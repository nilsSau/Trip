/* GitHub Pages friendly: no build tools, no API keys, all ranking data stays in the browser. */
(() => {
'use strict';
const places = window.PLACES || [];
const allIds = places.map(p=>p.id);
const byId = new Map(places.map(p=>[p.id,p]));
const K = 'sthlm-hit-list-v1';
const $ = s=>document.querySelector(s);
const esc = x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const hash = s=>s.split('').reduce((a,c)=>(a*31+c.charCodeAt(0))|0,0);
function shuffle(items){const x=[...items];for(let i=x.length-1;i>0;i--){let r;try{r=crypto.getRandomValues(new Uint32Array(1))[0]/4294967296}catch{r=Math.random()}let j=Math.floor(r*(i+1));[x[i],x[j]]=[x[j],x[i]];}return x;}
function validatedOrder(arr){if(!Array.isArray(arr))return null;const used=new Set();const found=[];for(const id of arr){if(byId.has(id)&&!used.has(id)){used.add(id);found.push(id)}}return [...found,...allIds.filter(x=>!used.has(x))];}
function readSaved(){try{const d=JSON.parse(localStorage.getItem(K));if(!d)return null;return {order:validatedOrder(d.order),liked:Array.isArray(d.liked)?d.liked.filter(id=>byId.has(id)):[],name:d.name||''}}catch{return null}}
function parseRank(s){if(!s||s.length>3000)return null;return validatedOrder(s.split('.'));}
const params=new URLSearchParams(location.search);
const sharedRank=parseRank(params.get('rank'));
const saved=readSaved();
let order=sharedRank||saved?.order||shuffle(allIds);
let liked=new Set(saved?.liked||[]);
let voterName=params.get('name')||saved?.name||'';
let filter='All',hideUnavailable=false;
let scores=[];
let lastDrag=null, touchInfo=null;
const photoIndices = new Map();
const iconFallback={vasa:'⛵',wisdome:'✦',wingsuit:'◈',slose:'◉',hellas:'♨',tomtits:'⚙',laserfortet:'⌁',vrex:'◈',icebar:'❄',vrak:'⚓',paradox:'◎',greenhouse:'♣',haga:'✿',natural:'◆',baltic:'≈', abba:'♫',avicii:'♫',holiday:'✶',montelius:'◢',skinnar:'◢',skepps:'≈',vaster:'◢',riddar:'◢',tyresta:'♠',metro:'✳',bodyflight:'↟',vinterviken:'♣',katarina:'◢'};
const unavailable=p=>p.status==='closed';
function persist(){try{localStorage.setItem(K,JSON.stringify({order,liked:[...liked],name:voterName}));$('#saveStatus').textContent='● Saved locally'}catch{$('#saveStatus').textContent='● Browser storage blocked'}}
function visibleIds(){return order.filter(id=>{const p=byId.get(id);return (filter==='All'||p.category===filter)&&(!hideUnavailable||!unavailable(p))})}
const brokenPhotos = new Set();
let lightboxId = null;
function usableIndex(p) {
 const at = photoIndices.get(p.id)||0;
 for(let j=0;j<p.images.length;j++){
  const i=(at+j)%p.images.length;
  if(!brokenPhotos.has(p.images[i].src)) return i;
 }
 return -1;
}
function photoMoodText(ph){return ph.kind==='illustrative'?'VIBE PHOTO · NOT THIS VENUE':'PHOTO SOURCE ↗'}
function makePhoto(p){
 const n=usableIndex(p);
 if(n<0) return `<div class="card-gallery"><div class="card-photo"><div class="photo-error"><div class="big-icon">${iconFallback[p.id]||'✳'}</div>PHOTOS UNAVAILABLE<small>External photo hosts may block requests.</small><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(p.name+' Stockholm photos')}">FIND PHOTOS ↗</a></div></div></div>`;
 const ph=p.images[n];
 const thumbs=p.images.map((item,i)=>`<button class="gallery-thumb ${n===i?'active':''} ${item.kind==='illustrative'?'gallery-mood':''}" data-photo-index="${i}" data-id="${p.id}" aria-label="Show photo ${i+1} of ${p.images.length} for ${esc(p.name)}" title="${item.kind==='illustrative'?'Representative vibe photo':'View photo'} ${i+1}"><img loading="lazy" decoding="async" src="${esc(item.src)}" alt="${esc(p.name)} thumbnail ${i+1}" /></button>`).join('');
 return `<div class="card-gallery"><div class="card-photo"><button class="photo-expand" data-lightbox-open="${p.id}" title="Open the full photo gallery" aria-label="View photos of ${esc(p.name)} fullscreen"><img class="feature-img" loading="lazy" decoding="async" src="${esc(ph.src)}" alt="${esc(p.name)} — ${ph.kind==='illustrative'?'illustrative atmosphere photo, not this venue':'venue or location photo'}" /><span class="expand-label">⛶ VIEW LARGER</span></button><div class="photo-overlay"></div><div class="photo-source"><a href="${esc(ph.creditUrl)}" target="_blank" rel="noopener noreferrer">${photoMoodText(ph)}</a></div><div class="photo-nav"><button aria-label="Previous image" data-photo="prev" data-id="${p.id}">‹</button><span>${n+1}/${p.images.length}</span><button aria-label="Next image" data-photo="next" data-id="${p.id}">›</button></div></div><div class="gallery-thumbs" aria-label="Select photos of ${esc(p.name)}">${thumbs}</div></div>`;
}
function updateCardGallery(id){
 const el=document.querySelector('#place-'+id+' .card-gallery');
 if(el) el.outerHTML=makePhoto(byId.get(id));
}
function advancePhoto(id,direction){
 const p=byId.get(id); if(!p) return;
 const current=photoIndices.get(id)||0;
 for(let j=1;j<=p.images.length;j++){
  const i=(current+direction*j+p.images.length*2)%p.images.length;
  if(!brokenPhotos.has(p.images[i].src)){photoIndices.set(id,i);break}
 }
 updateCardGallery(id);
 if(lightboxId===id) updateLightbox();
}
function updateLightbox(){
 const p=byId.get(lightboxId), dialog=document.querySelector('#photoDialog');
 if(!p||!dialog)return;
 const n=usableIndex(p),img=dialog.querySelector('#lightboxImage');
 dialog.querySelector('#lightboxTitle').textContent=p.name;
 dialog.querySelector('#lightboxCount').textContent=n<0?'PHOTOS UNAVAILABLE':`PHOTO ${n+1} / ${p.images.length}`;
 img.hidden=n<0;
 if(n<0){dialog.querySelector('#lightboxPhotoCredit').textContent='Photo host unavailable';return}
 const ph=p.images[n];img.src=ph.src;img.alt=p.name+' gallery image '+(n+1);
 const credit=dialog.querySelector('#lightboxPhotoCredit');credit.href=ph.creditUrl;credit.textContent=ph.kind==='illustrative'?'Representative vibe — NOT this exact venue · Photo source ↗':'View original image / photo credit ↗';
}
function openLightbox(id){lightboxId=id;updateLightbox();const dialog=document.querySelector('#photoDialog');if(!dialog.open)dialog.showModal()}

function makeCard(id){const p=byId.get(id);const n=order.indexOf(id)+1;const heart=liked.has(id);return `<article id="place-${p.id}" class="place-card" data-id="${p.id}">
 <div class="rank-column"><span class="rank-num">${String(n).padStart(2,'0')}</span><button class="drag-handle" draggable="true" data-handle="${p.id}" title="Drag to reorder" aria-label="Drag ${esc(p.name)}">⠿</button><div class="rank-move"><button data-move="up" data-id="${p.id}" aria-label="Move ${esc(p.name)} up">↑</button><button data-move="down" data-id="${p.id}" aria-label="Move ${esc(p.name)} down">↓</button></div></div>
 ${makePhoto(p)}
 <div class="card-main"><div class="card-topline"><span class="card-category">${esc(p.category.toUpperCase())}</span>${p.tag?`<span class="top-tag ${p.status==='closed'?'warning':''}">${esc(p.tag)}</span>`:''}</div><h3>${esc(p.name)}</h3><p class="card-description">${esc(p.description)}</p><p class="card-tip">${esc(p.tip)}</p><div class="card-btm"><div class="cost-block"><span class="cost-price">${esc(p.price)}</span></div><div class="card-buttons"><a class="card-link" target="_blank" rel="noopener noreferrer" href="${esc(p.url)}">INFO ↗</a><a class="card-link" title="Directions in Google Maps" target="_blank" rel="noopener noreferrer" href="${'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.lat+','+p.lng)}">MAPS ↗</a><button class="heart ${heart?'selected':''}" title="${heart?'Remove from favourites':'Mark as favourite'}" aria-pressed="${heart}" aria-label="${heart?'Unfavourite':'Favourite'} ${esc(p.name)}" data-like="${p.id}">${heart?'♥':'♡'}</button></div></div><div class="card-meta"><span>${esc(p.area)}</span><span>·</span><span>${esc(p.duration)}</span>${p.status==='closed'?'<span class="status-note">· NOT ON THESE DATES</span>':''}</div></div></article>`}
function render(){const ids=visibleIds();$('#cards').innerHTML=ids.map(makeCard).join('');$('#emptyState').hidden=ids.length>0;$('#allCount').textContent=places.length;$('#placeCount').textContent=places.length;}
function shift(id,delta){const v=visibleIds(),a=v.indexOf(id),b=a+delta;if(a<0||b<0||b>=v.length)return;const target=v[b];const i=order.indexOf(id),j=order.indexOf(target);[order[i],order[j]]=[order[j],order[i]];persist();render();document.getElementById('place-'+id)?.scrollIntoView({behavior:'smooth',block:'nearest'});}
function moveTo(id,to){if(!id||!to||id===to||!byId.has(id)||!byId.has(to))return;order.splice(order.indexOf(id),1);order.splice(order.indexOf(to),0,id);persist();render();}
const categories=[...new Set(places.map(p=>p.category))];
$('#categoryChips').insertAdjacentHTML('beforeend',categories.map(c=>`<button class="chip" data-filter="${esc(c)}">${esc(c.toUpperCase())} <span>${places.filter(p=>p.category===c).length}</span></button>`).join(''));
$('#categoryChips').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;filter=b.dataset.filter;document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active',c.dataset.filter===filter));render()});
$('#hideUnavailable').addEventListener('change',e=>{hideUnavailable=e.target.checked;render()});
$('#resetOrder').addEventListener('click',()=>{if(!confirm('Randomize your order? This replaces your current ranking on this device.'))return;order=shuffle(allIds);persist();render();});
$('#cards').addEventListener('click',e=>{const btn=e.target.closest('button');if(!btn)return;const id=btn.dataset.id||btn.dataset.like;if(btn.dataset.move){shift(id,btn.dataset.move==='up'?-1:1)}else if(btn.dataset.like){liked.has(id)?liked.delete(id):liked.add(id);persist();render()}else if(btn.dataset.photo){advancePhoto(id,btn.dataset.photo==='next'?1:-1)}else if(btn.dataset.photoIndex!==undefined){photoIndices.set(id,Number(btn.dataset.photoIndex));updateCardGallery(id);}else if(btn.dataset.lightboxOpen){openLightbox(btn.dataset.lightboxOpen);}});

$('#cards').addEventListener('error',e=>{
 const img=e.target;
 if(!(img instanceof HTMLImageElement))return;
 brokenPhotos.add(img.src);
 const card=img.closest('.place-card');
 if(!card)return;
 if(img.classList.contains('feature-img')){
  const p=byId.get(card.dataset.id);photoIndices.set(p.id,(usableIndex(p)>=0?usableIndex(p):0));
  updateCardGallery(p.id);
 }else if(img.closest('.gallery-thumb')){
  img.closest('.gallery-thumb').classList.add('photo-failed');
 }
},true);
const photoDialog=document.querySelector('#photoDialog');
photoDialog.addEventListener('click',e=>{
 const b=e.target.closest('[data-lightbox]');if(!b)return;
 const x=b.dataset.lightbox;
 if(x==='close'){photoDialog.close();lightboxId=null;}
 else if(lightboxId) advancePhoto(lightboxId,x==='next'?1:-1);
});
photoDialog.querySelector('#lightboxImage').addEventListener('error',e=>{
 brokenPhotos.add(e.target.src);
 const id=lightboxId;
 if(id){const p=byId.get(id);const i=usableIndex(p);if(i>=0)photoIndices.set(id,i);updateLightbox();updateCardGallery(id);}
});
photoDialog.addEventListener('close',()=>{lightboxId=null});
document.addEventListener('keydown',e=>{
 if(!photoDialog.open||!lightboxId)return;
 if(e.key==='ArrowRight'){e.preventDefault();advancePhoto(lightboxId,1)}
 if(e.key==='ArrowLeft'){e.preventDefault();advancePhoto(lightboxId,-1)}
});

// Mouse / desktop drag and drop.
$('#cards').addEventListener('dragstart',e=>{const btn=e.target.closest('[data-handle]');if(!btn){e.preventDefault();return;}lastDrag=btn.dataset.handle;e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',lastDrag);btn.closest('.place-card').classList.add('is-dragging')});
$('#cards').addEventListener('dragover',e=>{const card=e.target.closest('.place-card');if(!card||!lastDrag)return;e.preventDefault();e.dataTransfer.dropEffect='move';document.querySelectorAll('.drop-target').forEach(x=>x.classList.remove('drop-target'));if(card.dataset.id!==lastDrag)card.classList.add('drop-target')});
$('#cards').addEventListener('drop',e=>{const card=e.target.closest('.place-card');if(!card)return;e.preventDefault();const from=lastDrag||e.dataTransfer.getData('text/plain');lastDrag=null;moveTo(from,card.dataset.id)});
$('#cards').addEventListener('dragend',()=>{lastDrag=null;document.querySelectorAll('.is-dragging,.drop-target').forEach(x=>x.classList.remove('is-dragging','drop-target'))});
// Touch-pointer grip drag (works on phones without third-party libraries).
$('#cards').addEventListener('pointerdown',e=>{const handle=e.target.closest('[data-handle]');if(!handle||e.pointerType==='mouse')return;touchInfo={id:handle.dataset.handle,pointerId:e.pointerId,startY:e.clientY,target:null};handle.setPointerCapture?.(e.pointerId);e.preventDefault()});
$('#cards').addEventListener('pointermove',e=>{if(!touchInfo||e.pointerId!==touchInfo.pointerId)return;const el=document.elementFromPoint(e.clientX,e.clientY);const card=el?.closest('.place-card');document.querySelectorAll('.drop-target').forEach(x=>x.classList.remove('drop-target'));if(card&&card.dataset.id!==touchInfo.id){card.classList.add('drop-target');touchInfo.target=card.dataset.id;}else touchInfo.target=null;});
function endTouch(e){if(!touchInfo||e.pointerId!==touchInfo.pointerId)return;const {id,target}=touchInfo;touchInfo=null;document.querySelectorAll('.drop-target').forEach(x=>x.classList.remove('drop-target'));if(target)moveTo(id,target)}
$('#cards').addEventListener('pointerup',endTouch);$('#cards').addEventListener('pointercancel',()=>{touchInfo=null;document.querySelectorAll('.drop-target').forEach(x=>x.classList.remove('drop-target'))});
function addClipboard(text,element){if(navigator.clipboard&&isSecureContext)return navigator.clipboard.writeText(text).then(()=>element.textContent='✓ COPIED — SEND IT TO THE GROUP',()=>fallbackCopy(text,element));return fallbackCopy(text,element)}
function fallbackCopy(s,el){const inp=document.createElement('textarea');inp.value=s;document.body.appendChild(inp);inp.select();try{document.execCommand('copy');el.textContent='✓ COPIED — SEND IT TO THE GROUP'}catch{el.textContent='Select & copy the ranking link manually: '+s}inp.remove()}
function linkFor(o=order,n=voterName){const u=new URL(location.href);u.search='';u.hash='';u.searchParams.set('rank',o.join('.'));if(n.trim())u.searchParams.set('name',n.trim());return u.toString()}
function download(name,content,mime){const blob=new Blob([content],{type:mime});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function csv(rows){return rows.map(row=>row.map(x=>'"'+String(x??'').replaceAll('"','""')+'"').join(',')).join('\r\n')+'\r\n'}
function openDialog(id){document.getElementById(id)?.showModal();if(id==='voteDialog')$('#voterName').value=voterName}
['#openVoteTop','#openVoteHero','#openVoteBottom'].forEach(s=>$(s).addEventListener('click',()=>openDialog('voteDialog')));
$('#photoCredits').addEventListener('click',()=>openDialog('creditsDialog'));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>document.getElementById(b.dataset.close).close()));
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
$('#voterName').addEventListener('input',e=>{voterName=e.target.value.slice(0,35);persist()});
$('#copyRankLink').addEventListener('click',()=>addClipboard(linkFor(),$('#copyFeedback')));
$('#downloadRank').addEventListener('click',()=>download('stockholm-my-ranking.csv',csv([['Rank','Place','Approx. price (EUR)','Category','Favourite','Website'],...order.map((id,i)=>{const p=byId.get(id);return [i+1,p.name,p.price,p.category,liked.has(id)?'Yes':'No',p.url]})]),'text/csv;charset=utf-8'));
$('#calculateVotes').addEventListener('click',()=>{const lines=$('#friendLinks').value.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);const votes=[{name:voterName.trim()||'Me',order}];let failed=0;for(const line of lines){try{const u=new URL(line,location.origin);const raw=u.searchParams.get('rank');const r=parseRank(raw);if(!r){failed++;continue}votes.push({name:u.searchParams.get('name')||'Friend '+votes.length,order:r});}catch{failed++;}}
 scores=places.map(p=>({id:p.id,name:p.name,avg:votes.reduce((sum,v)=>sum+v.order.indexOf(p.id)+1,0)/votes.length,top:votes.filter(v=>v.order.indexOf(p.id)<5).length})).sort((a,b)=>a.avg-b.avg||a.name.localeCompare(b.name));
 $('#voteFeedback').textContent=`Counted ${votes.length} ranking${votes.length===1?'':'s'}${failed?`; skipped ${failed} invalid line${failed===1?'':'s'}`:''}.`;
 $('#resultsList').innerHTML=scores.slice(0,12).map((s,i)=>`<div class="score-row"><span class="score-pos">${String(i+1).padStart(2,'0')}</span><span class="score-name">${esc(s.name)}</span><span class="score-value">avg rank ${s.avg.toFixed(1)} · ${s.top} top-5 votes</span></div>`).join('');$('#voteResults').hidden=false;});
$('#downloadGroupCSV').addEventListener('click',()=>download('stockholm-group-results.csv',csv([['Group rank','Place','Average position','Number of top-5 votes'],...scores.map((s,i)=>[i+1,s.name,s.avg.toFixed(2),s.top])]),'text/csv;charset=utf-8'));
$('#creditsList').innerHTML=places.map(p=>`<div><strong>${esc(p.name)}:</strong> ${p.images.map(x=>`<a target="_blank" rel="noopener noreferrer" href="${esc(x.creditUrl)}">${esc(x.credit)}${x.kind==='illustrative'?' (vibe image)':''}</a>`).join(' · ')}</div>`).join('');
window.addEventListener('scroll',()=>{const d=document.documentElement;$('#progressLine').style.width=((d.scrollTop/(d.scrollHeight-d.clientHeight||1))*100)+'%'},{passive:true});
render();persist();
if(sharedRank){$('#saveStatus').textContent=`● Shared order${params.get('name')?' from '+params.get('name').slice(0,35):''} — edit to make your own`;}
})();
