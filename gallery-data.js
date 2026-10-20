/* Curated picture galleries. ! marks illustrative atmosphere shots, not this specific venue. */
(() => {
const photos = {
  "vasa": [
    "https://www.vasamuseet.se/globalassets/vasamuseet/bilder/bransch/bilder-for-nedladdning/vasa-museum-4-2300-1500.jpg",
    "https://static.thatsup.co/content/img/place/v/a/vasamuseet-31.jpg",
    "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/031/844/large/7e7c931c505159ea828855fb0217103c/article-sweden-stockholm-vasa-museum-ship-starboard-stern.jpg",
    "https://image.jimcdn.com/app/cms/image/transf/none/path/s46a21b12ec663f93/image/iafca839cec5263e9/version/1558281287/image.jpg",
    "https://static.swedenherald.com/74a82917-438e-4f82-91e8-5ed675c2ac94/74a82917-438e-4f82-91e8-5ed675c2ac94.jpg",
    "https://loveincorporated.blob.core.windows.net/contentimages/gallery/3e5fa3dd-4a85-4036-a462-909442632753-bestships-vasa.jpg"
  ],
  "wisdome": [
    "https://www.ingenieurholzbau.de/fileadmin/user_upload/Wisdome-Stockholm-Bild_01-_c_Tekniska-Museet-Anna-Gerden.jpg",
    "https://www.tekniskamuseet.se/app/uploads/2024/02/wisdome-domen-mane-wow-1536x864.jpg",
    "https://www.tekniskamuseet.se/app/uploads/2023/07/wisdome-utstallningar-arskort.jpg",
    "https://www.tekniskamuseet.se/app/uploads/2023/12/wisdome-forestallning-film.jpg",
    "https://www.husvagnochcamping.se/app/uploads/2024/12/tekniska1.jpg",
    "https://mnd-assets.mynewsdesk.com/image/upload/c_fill%2Cdpr_auto%2Cf_auto%2Cg_sm%2Cq_auto%3Agood%2Cw_746/scoi59gcsbnuxgw6zcqj"
  ],
  "wingsuit": [
    "https://res.cloudinary.com/manawa/image/private/f_auto%2Cc_limit%2Cw_3840%2Cq_auto/ab12b986fd54c1fb9c891bd5fd839c9d",
    "https://www.inclined.ws/hs-fs/hubfs/dev/images/hero-product-page.webp?height=901&name=hero-product-page.webp&width=1600",
    "https://litium.liveit.se/_images/e8042bb7-4707-445f-8409-3e7bc6dc3235/PDP_192444_01.jpg?quality=75&width=1440",
    "https://litium.liveit.se/_images/b70cc51a-704e-47cd-a158-28b2f9907bec/PDP_192444_03.jpg?quality=75&width=1440",
    "https://res.cloudinary.com/manawa/image/upload/f_auto%2Cc_limit%2Cw_1920%2Cq_auto/articles/2708/63d792ce46aa1e511a534cfd5d0add11"
  ],
  "slose": [
    "!https://cdn.prod.website-files.com/689b13af864049a0175e902e/68b5bc49cd50babf5cd91d02_HEY%20STHLM%20Small%20%281%29.jpg",
    "!https://static.thatsup.co/content/img/place/o/-/o-learys-event-center-tolv-stockholm-21.jpg",
    "!https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/55/ab/d0/caption.jpg?h=1400&s=1&w=1400",
    "!https://media.timeout.com/images/105148620/1920/1080/image.jpg",
    "!https://www.visitstockholm.com/media/images/hey2.width-1440.jpg"
  ],
  "hellas": [
    "https://www.visitstockholm.com/media/original_images/helena_wahlman-winter_swim-61.jpg",
    "https://s3-eu-north-1.amazonaws.com/py3.visitsweden.com/images/Winter-swim_Helena-Wahlman-IBSweb.2e16d0ba.fill-1200x628.jpg",
    "https://svd.vgc.no/v2/images/333da1d8-132d-404b-b75d-8822d4a5c2a1?format=auto&h=560&q=80&s=40100f25367b29691b01956590094cbaf788ad16&upscale=true&w=995",
    "https://svd.vgc.no/v2/images/215ed845-b523-4ea2-878f-d969d7309763?h=630&q=80&s=620c5a9dfa6b5a8a693f15bbc1a6717160bec723&upscale=true&w=1200",
    "!https://s3-eu-north-1.amazonaws.com/py3.visitsweden.com/original_images/sauna-lac-gele-stockholm-2-CMSTemplate_0J1pdto.jpg"
  ],
  "tomtits": [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e0/6b/21/img-20191029-131500-largejpg.jpg?h=1000&s=1&w=1000",
    "https://www.tomtit.se/globalassets/mediaflow/tjejer_snurrar.webp?quality=100&width=367",
    "https://aws-tiqets-cdn.imgix.net/images/content/befdc9f04e164be4af6d14196093dbb0.jpg?auto=format%2Ccompress&dpr=2&fit=crop&h=260&q=30&w=390",
    "https://storage.googleapis.com/production_kidzadvizor/public/images/186/conversions/b3d07fff-941b-479e-859e-7beddff348f4-web.webp",
    "https://www.visitstockholm.com/media/original_images/11aec48b4c0843be97a8ed716f5b7d66.png"
  ],
  "laserfortet": [
    "!https://d21buns5ku92am.cloudfront.net/69537/images/676860-PRISON_ISLAND5-a14ebf-original-1779811957.jpg",
    "!https://visitvastmanland.com/assets/bilder/Prison-Island/visit-vastmanland-prison-island-toppbild.jpg",
    "!https://www.bildn.se/wp-content/uploads/2017/07/17058-191B-1024x682.jpg",
    "!https://www.strawberry.se/globalassets/global/hotel-pictures/clarion-hotel--clarion-collection/clarion-collection-hotel-etage/offers/prison-island/ccetage_prisonisland1.jpg?t=ScaleDownToFill%7C985x549",
    "!https://image.vasterastidning.se/?imageId=171411&width=1200"
  ],
  "vrex": [
    "https://www.visitstockholm.com/media/original_images/VREX_City.jpg",
    "https://www.visitstockholm.com/media/original_images/Pressbild3.jpg",
    "https://static.wixstatic.com/media/fc9650_02063ec60535474ca31cca58f739e476~mv2.png/v1/fill/w_702%2Ch_484%2Cal_c/fc9650_02063ec60535474ca31cca58f739e476~mv2.png",
    "!https://static.thatsup.co/content/img/place/v/r/vrex-virtual-reality-16.jpg",
    "https://static.thatsup.co/content/img/place/v/r/vrex-city-1.jpg"
  ],
  "icebar": [
    "https://cdn.prod.website-files.com/68c949a3dd12b13380062bd4/69b94f1f0bc78a99acd05583_MNO_6584.jpg",
    "https://static.where-e.com/Sweden/Icebar-Stockholm-By-Icehotel_9f1f817aaa2ad075d51d627fa7c0b87a.jpg",
    "https://static.thatsup.co/content/img/place/i/c/icebar-by-icehotel-stockholm-8.jpg",
    "https://static.thatsup.website/211/81652/responsive-images/MNO_6602_web___media_library_original_2000_1333.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/SE%20-%20Stockholm%20-%20Icebar%20%284891073660%29.jpg?width=1400"
  ],
  "vrak": [
    "https://cdn.prod.website-files.com/68b9528d8e9decf678b17759/68d10bac0bb9fa69c5078335_639ad2b59badae158d70c3e9_Vrak_rum.png",
    "https://www.vrak.se/contentassets/8f621e013dcd4df3bc3eb7f84adb26a6/vr-montage_1500x750.jpg",
    "https://assets.tours-tickets.com/upsells/vrak-museum-of-wrecks-gallery-image-3-go-under-water_bvkpafrc.jpg",
    "https://www.vrak.se/siteassets/start-vrak/bilder/besok---bilder/utstallningar-bilder/minnenas-hav---bilder/_dsf6076.jpg",
    "https://images.welt.de/67da1373559c903aae7fb1a0/d33194f267a3db87b7a6216c14c3d302/ci3x2l-w1200/besucher-mit-vr-brillen-virtueller-tauc"
  ],
  "paradox": [
    "https://assets.tours-tickets.com/upsells/paradox-museum-optical-illusion-upside-down-holes.jpg",
    "https://www.visitstockholm.com/media/images/AMES_ROOM.max-1200x630.jpg",
    "https://assets.tours-tickets.com/upsells/paradox-museum-stockholm-tunnel-with-slide-polka-dot.jpg",
    "https://paradoxmuseum.com/_astro/art4_bk3ed2_1Nhbch.webp",
    "https://thatsup.se/content/img/place/stockholm/pa/8249ccf9-d079-11ec-b24b-86d7fdd99ed5/paradox-museum-5e19d59f-x2400.jpg",
    "https://www.pelago.com/img/products/SE-Sweden/paradox-museum-stockholm/dfbefbdf421a4ae3b271cf287ba8b2b6_paradox-museum-stockholm-entry-ticket.jpg",
    "https://www.city-guide-stockholm.com/_bibli/annonces/812/hd/paradox-museum-07.jpg"
  ],
  "greenhouse": [
    "https://www.su.se/images/18.3e707ac0199a328fe97c9c/1759758240954/palm_hall.jpg",
    "https://cms.sfv.se/media/gipmpook/_p6a8048_damm_bassang.jpg?autoorient=true&format=webp&height=1708&mode=crop&width=2560",
    "https://www.su.se/images/18.3e707ac0199a328fe97c98/1759758240479/california_room.jpg",
    "https://cms.sfv.se/media/53xe1z3d/_p6a8059_kalifornienrummet.jpg?autoorient=true&format=webp&height=1708&mode=crop&width=2560",
    "https://trippa.se/sites/default/files/edvard_anderssons_vaxthus_0.jpg"
  ],
  "haga": [
    "https://assets-global.website-files.com/5e2861598f1044a014f854f4/659e8b87047afad9ed0e36a7_sharktank.webp",
    "https://cdn.prod.website-files.com/5e2861598f1044a014f854f4/659e8b87047afad9ed0e36b2_location11.webp",
    "https://www.freedomtravel.se/wp-content/webp-express/webp-images/uploads/Akvarium-1024x576.jpg.webp",
    "https://assets.tours-tickets.com/butterfly-at-hagaparken_mlzlultz.jpg",
    "https://hopsa.io/assets/4b5c7eb8-8620-49a2-b81e-6e7d590845f3/fjarilshuset-haga-ocean-44b68faf11"
  ],
  "natural": [
    "https://www.nrm.se/images/18.5a38483f18bab8ebfa94be5/1699600652871/valskelett.jpg",
    "https://www.visitstockholm.com/media/images/a42c82b769b6443cb047bff5199e2178.width-1280.jpg",
    "https://mnd-assets-bunny.mynewsdesk.com/image/upload/ar_16%3A9%2Cc_fill%2Cdpr_auto%2Cf_auto%2Cg_sm%2Cq_auto%3Agood%2Cw_746/yz5sp7bxnnnwwnzyxyn1?fmt=jpeg",
    "https://www.nrm.se/images/18.2063bde018fe7b25d56819/1717597665800/DSC07948.jpg",
    "https://www.nrm.se/images/18.34a063841900fcf49e21808a/1718560894945/DSC08967.jpg"
  ],
  "baltic": [
    "https://www.skansen.se/wp-content/uploads/2024/01/bssc-tunnel.jpg",
    "https://www.cement.heidelbergmaterials.se/sites/default/files/assets/images/8f/80/cementa-skansen-dsc09243.jpg",
    "https://www.heidelbergmaterials.com/sites/default/files/2024-07/skansen_baltic_2_smaller.jpg",
    "https://www.skansen.se/wp-content/uploads/2022/11/Akvarium-i-Baltic-Sea-Science-Center-foto-Mark-Harris-for-SLU.jpg",
    "https://www.visitstockholm.se/media/original_images/7b517f1d95b844b7b82f292b22181c78.png"
  ],
  "abba": [
    "https://awe-inspiringplaces.com/wp-content/uploads/2024/01/Abba-The-Museum.jpeg",
    "https://cdn.prod.website-files.com/62618b140284296dea998204/626fa52557a5867243928284_6_ABBA_MUSEUM.jpeg",
    "https://www.meer.com/attachments/dbea66cb480cb5b157422f5dbe64a5165aa07a2c/store/fill/1148/861/e032d24c1adbddc8bf95ca64681343633ed813d804d57dd363b2792e3f58/The-full-ABBA-experience-exhibition-view-Courtesy-of-ABBA-The-Museum.jpg",
    "https://www.barnistan.se/storage/img/containers/assets/b3b883d3-5e63-4773-aea7-d7d0c72aa39d/abba-voyage-exhibition_axlmedia_1hq-1440x960.jpg/d5791e476ec559317b7902019241cc37/abba-voyage-exhibition_axlmedia_1hq-1440x960.webp",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Entrance%20to%20ABBA%20the%20Museum.jpg?width=1400"
  ],
  "avicii": [
    "https://cdn.tourdesk.io/activity-gallery/f25e8a9da1924ef3a02a14a008d76a72_main_slider.jpg",
    "https://d3fphkxyf5o5bm.cloudfront.net/image-resize/format%3Dwebp%2Cw%3D1200/QwRY54Li1HMwD7oNfog0mudUVtYDoHzsdd9NQeCUNW",
    "https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/6CJICPZ7EREK3EGHY5PY4OADHA.jpg",
    "https://www.pelago.com/img/products/SE-Sweden/avicii-experience/1a59eff87b424861a592e48744fc9fed_avicii-experience-entry-ticket-xlarge.jpg",
    "https://www.visitstockholm.com/media/original_images/avicii_experience.jpg"
  ],
  "holiday": [
    "https://upload.wikimedia.org/wikipedia/commons/5/53/Stortorget_in_Gamla_Stan%2C_Stockholm%2C_Sweden%2C_2022_December_-_8.jpg",
    "https://loveincorporated.blob.core.windows.net/contentimages/gallery/c57f16f7-6e06-488a-b185-1afa35c72b5c-Stockholm-Christmas-Market.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Stockholm%27s%20%22Stortorget%22%20during%20Christmas.JPG?width=1400",
    "https://www.skansen.se/wp-content/uploads/2023/09/Julmarknadens_julbocktoppbild.jpg",
    "https://www.visitstockholm.com/media/images/skansen-christmas-market.width-1440.jpg"
  ],
  "montelius": [
    "https://images.locationscout.net/2017/07/monteliusvaegen-stockholm-sweden-fr6w.webp?h=1400&q=80",
    "https://images.locationscout.net/2017/07/monteliusvaegen-stockholm-sweden-39og.webp?h=1400&q=83",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Monteliusv%C3%A4gen%202015.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Monteliusv%C3%A4gen%20Menschen.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Montelius%20v%C3%A4gen.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Monteliusv%C3%A4gen1.jpg?width=1400"
  ],
  "skinnar": [
    "https://lp-cms-production.imgix.net/2021-08/GettyImages-1269518731.jpg?ar=16%3A9&auto=format&fit=crop&q=40&w=4741",
    "https://hblimg.mmtcdn.com/content/hubble/img/dest/mmt/activities/m_Stockholm_Skinnarviksberget_4_l_650_975.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Skinnarviksberget%2C%20juli%202018a.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Skinnarviksberget%2C%20juli%202018b.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Skinnarviksberget%2C%20mars%202018.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Skinnarviksberget%202008x.jpg?width=1400"
  ],
  "skepps": [
    "https://images.squarespace-cdn.com/content/v1/57a23c34bebafb39c2208e52/1589968053461-A3EUE0K3CUCJKPFOEAFG/Adjustments.jpeg?format=1000w",
    "https://media.printler.com/media/photo/55418.jpg?height=638&rmode=crop&width=900",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Crown%20on%20Skeppsholmsbron%202008-07-18%20filtered.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/View%20from%20the%20Skeppsholmsbron%20-%20panoramio.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/View%20from%20the%20Skeppsholmsbron%20-%20panoramio%20%281%29.jpg?width=1400"
  ],
  "vaster": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/V%C3%A4sterbron%2020150921%20190218.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/V%C3%A4sterbron%20Stadshuset%20Kakn%C3%A4stornet%20dec%202013.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/V%C3%A4sterbron%20spanning%20gray%20water%20with%20a%20gray%20sky.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/V%C3%A4sterbron%20-%20Stockholm0313.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Riddarfj%C3%A4rden%20vinter%202012a.jpg?width=1400"
  ],
  "riddar": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Evert%20Taubes%20terrass%20March%202026%2001.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Evert%20Taubes%20terrass%202006a.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Evert%20Taubes%20terrass%202006b.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Waterfront%20of%20Evert%20Taubes%20terrass%2C%20Stockholm%20at%20night%20%282016%29.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Evert%20Taubes%20terrass%2C%20Stockholm%2C%20Sweden.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Stadshuset%20med%20frusen%20str%C3%B6m.jpg?width=1400"
  ],
  "tyresta": [
    "https://my-make-bucket.s3.eu-north-1.amazonaws.com/Photos/ogdhk4cdhwr6n9636eih.webp",
    "https://commons.wikimedia.org/wiki/Special:FilePath/A%20Path%20in%20Tyresta%20National%20Park.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Bylsj%C3%B6n%20in%20Tyresta%20National%20Park.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Fallen%20yet%20alive%20tree%20growing%20on%20rocks.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Forest%20Time.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Dead%20Tree%20in%20Tyresta%20National%20Park.jpg?width=1400"
  ],
  "metro": [
    "https://static.wixstatic.com/media/ded9d8_129ad49027f2407b9046335562a94e85~mv2.jpg/v1/fill/w_2500%2Ch_1562%2Cal_c/ded9d8_129ad49027f2407b9046335562a94e85~mv2.jpg",
    "https://womanadvice.ru/sites/default/files/tempos/t-centralen_0.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Kungstr%C3%A4dg%C3%A5rden_Metro_station_April_2015.jpg",
    "https://image.jimcdn.com/app/cms/image/transf/none/path/s826a4ec2a6962732/image/ia1884223d5ec21be/version/1528050110/image.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Solna%20Centrum%20Tunnelbana%20Painted%20Train%20Station%2C%20Stockholm%2C%20Sweden%2015777674995.jpg?width=1400"
  ],
  "bodyflight": [
    "https://static.thatsup.co/content/img/article/19/jan/dejtingtips-guiden-till-en-rolig-dejt-i-stockholm.jpg",
    "https://www.novacircle.com/_next/image?q=75&url=https%3A%2F%2Fmedia.novacircle.com%2Fspots%2F4318-1732744564483.webp&w=3840",
    "https://thatsup.co.uk/content/img/place/b/o/bodyflight-stockholm-14.jpg",
    "https://static.thatsup.co/content/img/place/b/o/bodyflight-stockholm-13.jpg",
    "!https://res.cloudinary.com/manawa/image/private/f_auto%2Cc_limit%2Cw_3840%2Cq_auto/ab12b986fd54c1fb9c891bd5fd839c9d"
  ],
  "vinterviken": [
    "https://svd.vgc.no/v2/images/f9089729-0301-3922-94b4-7fca227781e2?format=auto&h=560&q=80&s=5440a707d62d9d7d76b79bd74a861b885df67475&upscale=true&w=995",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Vinterviken%20fabriksomr%202010.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Vinterviken%20promenad%202011.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Vinterviken%20sn%C3%B6%202012%20%281%29.JPG?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Vinterviken%20brygga%202006.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Cliff%20near%20Vinterviken%20%28M%C3%A4laren%2C%20Stockholm%29%20-%20panoramio.jpg?width=1400"
  ],
  "katarina": [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Panorama%20over%20Stockholm%20from%20Katarinavagen%202005-06-06.JPG?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Stadsg%C3%A5rdsleden%20fr%C3%A5n%20Katarinav%C3%A4gen%2C%2020221001.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Katarinav%C3%A4gen%2020231210%20-%2005.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Katarinav%C3%A4gen%20January%202015.jpg?width=1400",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Slussen%2C%20Katarinav%C3%A4gen%2C%2020231210%20-%2004.jpg?width=1400"
  ]
};
for (const place of window.PLACES || []) {
 const urls = photos[place.id];
 if(!urls) continue;
 place.images = urls.map(item=>{
   const mood = item[0] === '!';
   const src = mood ? item.slice(1) : item;
   let hostname = 'Photo source';
   try { hostname = new URL(src).hostname.replace(/^www\./,''); } catch{}
   const commonsPrefix = 'https://commons.wikimedia.org/wiki/Special:FilePath/';
   const creditUrl = src.startsWith(commonsPrefix)
    ? 'https://commons.wikimedia.org/wiki/File:' + src.slice(commonsPrefix.length).split('?')[0]
    : src;
   return {src,credit:hostname,creditUrl,kind:mood?'illustrative':'venue'};
 });
}
})();
