(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{1773:function(e,t,r){var content=r(2702);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("354af5ee",content,!0,{sourceMap:!1})},1774:function(e,t,r){var content=r(2705);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(44).default)("6e47b544",content,!0,{sourceMap:!1})},2202:function(e,t,r){e.exports=r.p+"img/full-screen.0cca4a3.svg"},2701:function(e,t,r){"use strict";var n=r(1773),o=r.n(n);r.d(t,"default",(function(){return o.a}))},2702:function(e,t,r){var n=r(43)(!1);n.push([e.i,".container_jzAgp{max-width:100%}.container_jzAgp .previews_gAwfr{display:inline-block;margin-bottom:0}.container_jzAgp .previews_gAwfr .previewItem_toVFf{height:3rem;width:3rem;padding:.25rem;background:#fff;border:1px solid #EBEDF5;border-radius:4px;cursor:pointer}.container_jzAgp .previews_gAwfr .previewItem_toVFf .previewImg_TSFHr{max-width:100%;max-height:100%}.container_jzAgp .previews_gAwfr .previewItem_toVFf:hover{background:#F5F6FA}.container_jzAgp .previews_gAwfr .previewItem_toVFf.active_SCgtg{background-color:#F5F6FA}\n",""]),n.locals={container:"container_jzAgp",previews:"previews_gAwfr",previewItem:"previewItem_toVFf",previewImg:"previewImg_TSFHr",active:"active_SCgtg"},e.exports=n},2703:function(e,t,r){e.exports=r.p+"videos/customize-square.ea2b42c.mp4"},2704:function(e,t,r){"use strict";var n=r(1774),o=r.n(n);r.d(t,"default",(function(){return o.a}))},2705:function(e,t,r){var n=r(43)(!1);n.push([e.i,".container_TgSwR{height:100%;padding:1.5rem}.container_TgSwR .bg_P\\+\\+Te{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0.4}.container_TgSwR .glbBtn_S\\+iGp{position:absolute;top:1.5rem;left:1.5rem;z-index:15}@media (max-width: 1023.98px){.container_TgSwR .glbBtn_S\\+iGp{display:none}}.container_TgSwR .exclusive_SitCx{position:absolute;top:1.5rem;right:1.5rem;z-index:15}@media (max-width: 1023.98px){.container_TgSwR .exclusive_SitCx{display:none}}.container_TgSwR .previewContainer_QOycb{position:relative;height:33.75rem;display:flex;align-items:center;justify-content:center;overflow:hidden}@media (max-width: 1279.98px){.container_TgSwR .previewContainer_QOycb{height:auto}}.container_TgSwR .previewContainer_QOycb.darkBg_phBqa{background:#1C2033}.container_TgSwR .previewContainer_QOycb .lottie_82UTS{display:block;max-height:540px;max-width:100%;cursor:pointer}.container_TgSwR .previewContainer_QOycb>video{display:block;max-height:540px;max-width:100%;cursor:pointer}.container_TgSwR .previewContainer_QOycb .thumbPreview_GFPGL{overflow:hidden;display:block;text-align:center;cursor:pointer}.container_TgSwR .previewContainer_QOycb .thumbPreview_GFPGL>source,.container_TgSwR .previewContainer_QOycb .thumbPreview_GFPGL>img{margin-bottom:-52px;object-fit:contain;max-height:550px;max-width:100%;pointer-events:none}.container_TgSwR .previewContainer_QOycb .mockupPreview_hpHOE{text-align:center;cursor:pointer}.container_TgSwR .previewContainer_QOycb .mockupPreview_hpHOE>source,.container_TgSwR .previewContainer_QOycb .mockupPreview_hpHOE>img{max-height:450px;max-width:100%;border-radius:8px;margin-top:50px;object-fit:contain;pointer-events:none}.container_TgSwR .previewContainer_QOycb .fullScreen_yYb8C{opacity:0;position:absolute;cursor:pointer;pointer-events:none;transition:opacity 0.22s}.container_TgSwR .previewContainer_QOycb:hover .fullScreen_yYb8C{opacity:1}.container_TgSwR .compContainer_oaDJW{opacity:0;transition:all 0.2s ease-in-out}.container_TgSwR:hover .compContainer_oaDJW{opacity:1}.container_TgSwR .brandColor_7pit9{position:absolute;bottom:1.5rem;left:1.5rem;z-index:11}@media (max-width: 1023.98px){.container_TgSwR .brandColor_7pit9{display:none}}\n",""]),n.locals={container:"container_TgSwR",bg:"bg_P++Te",glbBtn:"glbBtn_S+iGp",exclusive:"exclusive_SitCx",previewContainer:"previewContainer_QOycb",darkBg:"darkBg_phBqa",lottie:"lottie_82UTS",thumbPreview:"thumbPreview_GFPGL",mockupPreview:"mockupPreview_hpHOE",fullScreen:"fullScreen_yYb8C",compContainer:"compContainer_oaDJW",brandColor:"brandColor_7pit9"},e.exports=n},3988:function(e,t,r){"use strict";r.r(t);r(47),r(71),r(28),r(45),r(31);var n=r(87),o=r(1088),l=r(1095),c=r(1277),d=r(8),m=r(1217),v=r(1142),w={data:()=>({worker:null}),created(){this.worker||(this.worker=this.$worker.initLottieSwapper(),this.worker.addEventListener("message",this.onWorkerResponse))},methods:{onWorkerResponse(e){}},destroyed(){this.worker&&this.worker.terminate()}},h={components:{Loader:m.default},mixins:[w,v.a],props:{item:{type:Object,default:()=>{}}},data:()=>({originalContent:null,isLoading:!1}),computed:{id(){return"pdp-lottie-player-".concat(this.item.id)},selectedBrandPalette(){return this.$store.getters["brandPalettes/selectedPalette"]},originalLottieData(){return this.originalContent||this.item.urls.original}},created(){this.startWatch()},mounted(){this.$nuxt.$emit("lottie-pdp-model-opened"),document.querySelectorAll("video").forEach((e=>{(e.src.includes("mp4")||e.src.includes("m4v"))&&e.pause()})),this.isLoading=!0;var e=this;r.e(218).then(r.bind(null,4043)).then((()=>{e.$nextTick((()=>{e.$refs.lottiePlayer.load(e.originalLottieData)}))}))},destroyed(){this.$nuxt.$emit("lottie-pdp-model-closed"),document.querySelectorAll("video").forEach((e=>{(e.src.includes("mp4")||e.src.includes("m4v"))&&e.play()}))},methods:{onPaletteSelected(){this.selectedBrandPalette?this.swap(this.selectedBrandPalette.colors):this.applyLive(this.originalLottieData)},onLoad(){var e=this;return Object(d.a)((function*(){if(!e.originalContent){var t=yield e.$refs.lottiePlayer.getLottie();e.originalContent=t.animationData}e.selectedBrandPalette&&e.swap(e.selectedBrandPalette.colors),e.isLoading=!1}))()},swap(e){this.$nuxt.$loading.start(),this.worker.postMessage(JSON.parse(JSON.stringify({lottie:this.originalLottieData,palette:e})))},onWorkerResponse(e){this.applyLive(e.data.swappedJson)},applyLive(e){var t=this;return Object(d.a)((function*(){var r=Math.ceil(t.$refs.lottiePlayer.getLottie().currentFrame);yield t.$refs.lottiePlayer.load(e),yield t.$refs.lottiePlayer.seek(r),t.$nuxt.$loading.finish()}))()},onLargePreview(){var e=this;return Object(d.a)((function*(){var{animationData:t}=yield e.$refs.lottiePlayer.getLottie();e.$modal.open({id:"modalItemPreviewFs",component:Promise.all([r.e(0),r.e(37)]).then(r.bind(null,2726)),props:{item:e.item,brandPreview:JSON.stringify(t),selectedPreviewIndex:e.selectedPreviewIndex},options:{modalOnModal:!0}})}))()}}},_=r(7),f=Object(_.a)(h,(function(){var e=this,t=e._self._c;return t("div",[e.isLoading?t("loader",{attrs:{width:300,height:300,player:"json"}}):e._e(),e._v(" "),t("lottie-player",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],ref:"lottiePlayer",style:{width:"auto",height:"540px",overflow:"hidden",margin:"0 auto"},attrs:{id:e.id,autoplay:"",loop:""},on:{load:e.onLoad,click:e.onLargePreview}})],1)}),[],!1,null,null,null).exports,y={components:{HorizontalScroll:r(1176).a},props:{asset:{type:String,default:"illustration"},previews:{type:Array,default:()=>[]},selectedPreviewIndex:{type:Number,default:0}},computed:{isCuratedMockup(){return!!(this.previews&&this.previews.length>1&&this.previews[this.selectedPreviewIndex].isCuratedMockup)}},methods:{resizedUrl:o.a,generateSrcSetPx:n.c,generateMultipleFormats:n.a,onClick(e){this.$emit("change-preview",e),this.$nextTick((()=>{this.$analytics.track("click",{route_name:this.$route.name,route_path:this.$route.path,location:"pdp-multi-preview-icons",data:{isCuratedMockup:this.isCuratedMockup}})}))}}},x=r(2701);var P=Object(_.a)(y,(function(){var e=this,t=e._self._c;return t("horizontal-scroll",{class:e.$style.container},[t("ul",{class:["list-inline",e.$style.previews]},e._l(e.previews,(function(r,n){return t("li",{key:n,staticClass:"list-inline-item mx-2"},[t("button",{class:[e.$style.previewItem,e.selectedPreviewIndex===n?e.$style.active:null],attrs:{type:"button"},on:{click:function(t){return e.onClick(n)}}},["lottie"===e.asset?t("video",{attrs:{src:e.resizedUrl({url:r.thumb,h:32}),autoplay:"",muted:"",loop:"",playsinline:"",type:"video/mp4"},domProps:{muted:!0}}):t("picture",[t("source",e._b({},"source",e.generateMultipleFormats({url:r.thumb,w:32}),!1)),e._v(" "),t("img",e._b({class:e.$style.previewImg,attrs:{loading:"lazy"}},"img",e.generateSrcSetPx({url:r.thumb,w:32,format:"webp"}),!1))])])])})),0)])}),[],!1,(function(e){this.$style=x.default.locals||x.default}),null,null).exports,S=r(2136),k={components:{MultiplePreview:P,BrandPaletteButton:c.a,LottieBrandPreview:f,SvgBrandPreview:S.a},mixins:[l.a],props:{item:{type:Object,default:()=>{}},brandClient:{type:String,default:null}},data:()=>({showLarge:!1,selectedPreviewIndex:0,previewType:"normal"}),computed:{previews(){var e=[];return"3d"===this.item.asset?this.item.preview_files.forEach((t=>{e.push(t)})):e.push(this.item.urls),this.item.curated_item&&this.item.curated_item.urls&&e.splice(1,0,{thumb:this.item.curated_item.urls.preview,preview:this.item.curated_item.urls.preview,isCuratedMockup:!0}),e},hasMultiplePreview(){return this.previews&&this.previews.length>1},currentPreviewUrl(){return this.hasMultiplePreview?this.previews[this.selectedPreviewIndex].preview:this.item.urls.preview},previewPictureClass(){return this.item.curated_item&&this.item.curated_item.urls&&this.previews[this.selectedPreviewIndex]&&this.previews[this.selectedPreviewIndex].isCuratedMockup&&"mockup"===this.previewType?this.$style.mockupPreview:this.$style.thumbPreview}},methods:{resizedUrl:o.a,generateSrcSetPx:n.c,generateMultipleFormats:n.a,onLoad(){this.previewType=this.hasMultiplePreview&&this.previews[this.selectedPreviewIndex].isCuratedMockup?"mockup":"normal"},onLargePreview(){this.$modal.open({id:"modalItemPreviewFs",component:Promise.all([r.e(0),r.e(37)]).then(r.bind(null,2726)),props:{item:this.item,currentPreviewUrl:this.currentPreviewUrl},options:{modalOnModal:!0}})},onGltfClick(){if(this.handleAuth())if(this.canDownload){var e="".concat("https://iconscout.com").concat(this.$router.resolve({name:"360-gltf-3d-models",query:{slug:this.item.slug,query:this.item.tags[0].slug}}).href);window.open(e,"_blank")}else this.$modal.open({id:"modalSubscribeFeatures",component:Promise.all([r.e(0),r.e(25)]).then(r.bind(null,3996)),options:{modalOnModal:!0},props:{trackingObj:{event:"edit".concat(this.item.asset,"Pricing"),data:{slug:this.item.slug,uuid:this.item.uuid,price:this.item.price,asset:this.item.asset,entity:"item",from:"3d-previewer"}},type:"mp4",video:r(2703)}})}}},C=k,$=r(2704);var L=Object(_.a)(C,(function(){var e=this,t=e._self._c;return t("div",{class:e.$style.container},[e.item.additional_informations&&e.item.additional_informations.iconscout_exclusive?t("div",{class:e.$style.exclusive,attrs:{"data-balloon":"Iconscout Exclusive","data-balloon-pos":"right"}},[t("img",{attrs:{src:r(2129),alt:"IconScout Exclusive",height:"64"}})]):e._e(),e._v(" "),"3d"===e.item.asset&&e.item.formats&&e.item.formats.length&&(e.item.formats.map((e=>e.name)).includes("glb")||e.item.formats.map((e=>e.name)).includes("gltf"))?t("button",{class:["btn btn-default has-icon",e.$style.glbBtn],attrs:{"data-balloon":e.$t("editor.".concat(e.isLoggedIn&&e.canDownload?"can_edit":"cant_edit")),"data-balloon-pos":"down","data-balloon-length":"medium",type:"button"},on:{click:e.onGltfClick}},[t("img",{staticClass:"mr-3",attrs:{src:r(521),height:"24",width:"24",alt:"360"}}),e._v("\n    glTF 3D viewer\n  ")]):e._e(),e._v(" "),t("div",{class:[e.$style.previewContainer,e.item.additional_informations&&"dark"===e.item.additional_informations.background_type?e.$style.darkBg:null]},["lottie"===e.item.asset?[e.isLoggedIn&&e.canDownload&&e.item.urls.original&&e.item.urls.original.includes(".json")&&0===e.selectedPreviewIndex?t("lottie-brand-preview",{class:e.$style.lottie,attrs:{item:e.item}}):[t("video",{attrs:{src:e.resizedUrl({url:e.item.urls.preview}),autoplay:"",muted:"",loop:"",playsinline:"",type:"video/mp4"},domProps:{muted:!0},on:{click:e.onLargePreview}}),e._v(" "),t("img",{class:e.$style.fullScreen,attrs:{src:r(2202),alt:"Full Screen"}})]]:["illustration"===e.item.asset&&e.isLoggedIn&&e.canDownload&&e.item.formats&&e.item.formats.length&&e.item.formats.map((e=>e.name)).includes("svg")&&0===e.selectedPreviewIndex?t("svg-brand-preview",{attrs:{item:e.item,size:550}}):t("picture",{class:e.previewPictureClass,on:{click:e.onLargePreview}},[t("source",e._b({},"source",e.generateMultipleFormats({url:e.currentPreviewUrl,h:700}),!1)),e._v(" "),t("img",e._b({attrs:{alt:0===e.selectedPreviewIndex?e.name:"".concat(e.name,"-preview-").concat(e.selectedPreviewIndex)},on:{load:e.onLoad}},"img",e.generateSrcSetPx({url:e.currentPreviewUrl,h:700,format:"webp"}),!1))])],e._v(" "),t("img",{class:e.$style.fullScreen,attrs:{src:r(2202),alt:"Full Screen"}})],2),e._v(" "),e.hasMultiplePreview?t("div",{staticClass:"mt-3 mb-5-5 text-center"},[t("multiple-preview",{attrs:{asset:e.item.asset,previews:e.previews,"selected-preview-index":e.selectedPreviewIndex},on:{"change-preview":function(t){e.selectedPreviewIndex=t}}})],1):e._e(),e._v(" "),"icon"===e.item.asset||e.item.formats&&e.item.formats.length&&(e.item.formats.map((e=>e.name)).includes("svg")||e.item.formats.map((e=>e.name)).includes("json"))?t("div",{class:e.$style.brandColor},[t("brand-palette-button",{attrs:{enable:!(!e.isLoggedIn||!e.canDownload),"brand-client":e.brandClient}})],1):e._e()])}),[],!1,(function(e){this.$style=$.default.locals||$.default}),null,null);t.default=L.exports}}]);
//# sourceMappingURL=c71d27f.modern.js.map