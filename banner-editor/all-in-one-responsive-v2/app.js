var config = {
    "formate" : "inter_scroller",
    "adType": "video", // {"static", "animated", "video", "carousel", "parallex", "hotspots"}
    "adSize":{
        "width":"100%",
        "height":"100vh"
    }, // ad width x ad height
    // "size":"2MB", // max size
    "adContainer":".bannerContainer", // advert inject container id
    "cta": {
        "isCtaShow": true, // {true, false}
        "ctaType":'onlyCtaBtn', // {"onlyCtaBtn", "FullAdCta"}
        // "ctaImg":"./images/cta.png",
        "url":"https://www.taylormadegolf.com/",
        "copy": "Buy Now",
        "color": "#fff",
        "bgColor": "inherit",
        // "top": "65%",
        // "left": "10%"
    },
    "images" : {
        "bgImg": "./images/bg.jpg",
        "logo": "./images/logo2.png",        
        "product1": "./images/product1.png",        
        "product2": "./images/product2.png",        
        "product3": "./images/product3.png",        
        "rotateImg": "./images/ball.png",        
    },

    "copy": {
        "copy1":"SEE THE STORY",
        "copy2":"BEHIND THE SHAPE",        
    },

    "hotspots": {
        "bgImg" : "./images/taylormade.jpg",
        "points": {
            0:{
                title:"SIM Driver",
                copy:"We Reshaped the Driver, So You Can Reshape Your Game.",
                // url:'https://www.taylormadegolf.com/SIM-Driver/DW-JJI23.html?lang=default',
                left:"150px",
                top:"20px"
            },
            1:{
                title:"P790 Irons",
                copy:"You Don't Mess With What Works. You Work To Make It Better.",
                // url:'https://www.taylormadegolf.com/P790-Irons/DW-AL464.html?lang=default',
                left:"70px",
                top:"70px"
            },
            2:{
                title:"MySpider X",
                copy:"MySpider X allows you to personalize color, sightline, weights, and more.",
                // url:'https://www.taylormadegolf.com/MySpider-X/DW-JIC83.html?lang=default',
                left:"255px",
                top:"60px"
            }            
        }
    },


    // "video": {
    //     "url": "advert.mp4",
    //     "poster": "./images/poster.png",
    //     "playIcon": "./images/play.png",
    //     "width": "100%",
    //     "height": "auto",
    //     "type":"video/mp4",
    //     "controls": true, // true, false
    //     "muted": true, // true, false
    // },

    "isShowAdBar": true, // true, false

    // "adCSS": "",
    // "adJS": "",
    // "adHTML":"",

    // "importedCSSLibraryLink" : {
        
    // },

    // "importedJSLibraryLink" : {

    // }
  
}

$(document).ready(function () {
    if (config['adType'] == 'static') {
        createStaticAd();
    } else {
        createDaynamicAd();
    }
});


function scrollDirectionFn() {
    var lastScrollTop = 0;
    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
        var st = window.pageYOffset || document.documentElement.scrollTop;
        var topAdHeader = document.querySelector('.bannerContainer .ad-header');
        var topAdFooter = document.querySelector('.bannerContainer .ad-fotter');
        if (st > lastScrollTop) {
            // downscroll code
            console.log('downscroll code')
            topAdHeader.style.position = 'fixed';
            topAdFooter.style.position = 'absolute';
        } else {
            console.log('upscroll code')
            // upscroll code
            topAdHeader.style.position = 'absolute';
            topAdFooter.style.position = 'fixed';
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
}

function createStaticAd() {
    if (config) {
        let adData = config;
        let adContainer = $(adData.adContainer);
        let adContainerWidth = adData.adSize.width;
        let adContainerHeight = adData.adSize.height;
        let adImages = adData.images;

        // set ad width and height
        adContainer.width(adContainerWidth);
        adContainer.height(adContainerHeight);

        adContainer.addClass(adData['adType']);

        if(adData['isShowAdBar']){
            let adBar = '<div class="ad-header">Adevertisement</div><div class="ad-fotter">Scroll to continue with content</div>';           
            adContainer.append(adBar);
        }

        // set ad background image
        if (adImages['bgImg']) {
            // adContainer.css('background-image', 'url(' + adImages['bgImg'] + ')');
            // adContainer.css('background-attachment', 'fixed');
            adContainer.append('<img class="staticImg" src="' + adImages['bgImg'] + '" />');
        }

        if (adData['cta']) {
            let ctaData = adData['cta'];


            if (ctaData['ctaType'] != 'fullAdCta') {
                let ctaHtml = '<a class="cta" target="_blank" ';

                if (ctaData['url']) {
                    ctaHtml += ` href="${ctaData['url']}" `;
                }
                ctaHtml += ` style="`;
                if (ctaData['color']) {
                    ctaHtml += ` color:${ctaData['color']} !important; `;
                }
                if (ctaData['bgColor']) {
                    ctaHtml += ` background-color:${ctaData['bgColor']} !important; `;
                }
                if (ctaData['top']) {
                    ctaHtml += ` top:${ctaData['top']} !important; `;
                }
                if (ctaData['left']) {
                    ctaHtml += ` left:${ctaData['left']} !important; `;
                }

                ctaHtml += ` " >`;
                if (ctaData['copy']) {
                    ctaHtml += ctaData['copy'];
                }
                ctaHtml += '</a>';
                adContainer.append(ctaHtml);
            } else {
                console.log('cta add')
                let ctaHtml = '<a class="fullAdCta" target="_blank" ';

                if (ctaData['url']) {
                    ctaHtml += ` href="${ctaData['url']}" >&nbsp;`;
                }

                ctaHtml += '</a>';
                adContainer.append(ctaHtml);

            }
        }



        const controller = new ScrollMagic.Controller();

        var tl = new TimelineMax();

        const scene = new ScrollMagic.Scene({
            triggerElement: adData.adContainer,
            triggerHook: "onLeave",
            // triggerHook: 0.3,
            duration: "100%"
        })
            .setPin(adData.adContainer, { pushFollowers: true })
            .setTween(tl)
            // .addIndicators({name: "bannerContainer"}) 
            .addTo(controller);

           // scrollDirectionFn();

    }
}



function initScrollMagic() {
    if (config) {
        let adData = config;
        let adContainer = adData.adContainer;
        let adContainerWidth = adData.adSize.width;
        let adContainerHeight = adData.adSize.height;
        let adImages = adData.images;
        let adCopyArray = adData.copy;
        let adVideoSettings = adData.video;

        const controller = new ScrollMagic.Controller();

        var tl = new TimelineMax({ onUpdate: updatePercentage });

        if (adImages['logo']) {
            tl.from(adContainer + " .logo", 1, { alpha: 0 });
        }

        if (adCopyArray) {
            tl.from(adContainer + " .copyWrapper", 2, { alpha: 0 });
            if (adCopyArray['copy1']) {
                tl.from(adContainer + ' .copy1', 3, { x: 200, opacity: 0 });
            }

            if (adCopyArray['copy2']) {
                tl.from(adContainer + ' .copy2', 4, { x: -200, opacity: 0 });
            }
        }


        if (adVideoSettings) {
            // tl.from(adContainer+' .video', 2, {alpha:0, onComplete: videoPlayFn});
            tl.from(adContainer + ' .video', 2, { alpha: 0 });
        }

        if (adData['hotspots']) {
            tl.from(adContainer + ' .hotspots', 2, { alpha: 0 });
        }


        if (adImages['product1']) {
            
            tl.from(adContainer + ' .product1', 2, { x: 300, opacity: 0 });
        }
        if (adImages['product2']) {
            tl.from(adContainer + ' .product2', 2.5, { x: 300, opacity: 0 });
        }
        if (adImages['product3']) {
            tl.from(adContainer + ' .product3', 3, { x: 300, opacity: 0 });
        }

        if (adData['cta']) {
            tl.from(adContainer + ' .cta', 2, { alpha: 0 });
        }

        
        if (adImages['rotateImg']) {
            let continerWidth = document.querySelector(adContainer).offsetWidth;
             continerWidth += document.querySelector('.rotateImg ').offsetWidth;
            tl.from(adContainer + ' .rotateImg', 10, { x: continerWidth+100, alpha: 1, rotation: 360 });
        }



        const scene = new ScrollMagic.Scene({
            triggerElement: adContainer,
            triggerHook: "onLeave",
            // triggerHook: 0.3,
            duration: "100%"
        })
            .setPin(adContainer, { pushFollowers: true })
            //.on("enter leave", stopAdFn)
            .setTween(tl)
            //.addIndicators({name: "bannerContainer"}) 
            .addTo(controller);

        function updatePercentage() {
            tl.progress();
            //console.log(tl.progress());
            if (adVideoSettings) {
                stopAdFn();
            }
        }

        // scene.on("start", function (event) {
        //     console.log("Hit start point of scene.");
        //     videoPlayFn()
        // });

        // scene.on("end", function (event) {
        //     console.log("Hit end point of scene.");
        //     stopAdFn();
        // });

        // scene.on("leave", function (event) {
        //     console.log("Scene left.");
        //     stopAdFn();
        // });

        // scene.on("shift", function (event) {
        //     console.log("Scene moved, because the " + event.reason + " has changed.)");
        // });

        function isHidden(el) {
            var style = window.getComputedStyle(el);
            return parseInt(style.opacity);
        }

        function stopAdFn() {
            let videoContainer = document.querySelector(".bannerContainer .video");
            var bannerVideo = document.querySelector(".bannerContainer video");
            if (parseInt(videoContainer.style.opacity) < 1) {
                bannerVideo.pause();
                console.log('video pause');
            } else {
                if (bannerVideo.paused) {
                    console.log('video auto play');
                    bannerVideo.currentTime = 0;
                    bannerVideo.play();
                    if (document.querySelector(".bannerContainer .playIcon")) {
                        document.querySelector(".bannerContainer .playIcon").remove();
                    }
                }
            }
        }


        // function videoPlayFn(){
        //     var bannerVideo = document.querySelector(".bannerContainer video"); 
        //     console.log('video auto play');
        //     // bannerVideo.setAttribute('controls','');
        //    // bannerVideo.muted = true;
        //     bannerVideo.currentTime = 0;
        //     bannerVideo.play();
        //     if(document.querySelector(".bannerContainer .playIcon")){
        //         document.querySelector(".bannerContainer .playIcon").remove();    
        //     }

        // }
    }
}

function createDaynamicAd() {

    if (config) {
        let adData = config;
        // let adContainer = $(adData.adContainer + ' #main-ad');
        let adContainer = $(adData.adContainer);
        let adContainerWidth = adData.adSize.width;
        let adContainerHeight = adData.adSize.height;
        let adImages = adData.images;
        let adCopyArray = adData.copy;
        let adVideoSettings = adData.video;
        let videoContainer = adContainer.find('.video');

       

        // set ad width and height
        adContainer.width(adContainerWidth);
        adContainer.height(adContainerHeight);

        adContainer.addClass(adData['adType']);

        if(adData['isShowAdBar']){
            let adBar = '<div class="ad-header">Adevertisement</div><div class="ad-fotter">Scroll to continue with content</div>';           
            adContainer.append(adBar);
        }

        // console.log(adContainer)

        // set ad width and height
        $(adData.adContainer).width(adContainerWidth);
        $(adData.adContainer).height(adContainerHeight);
        adContainer.width(adContainerWidth);
        adContainer.height(adContainerHeight);


        // set ad background image
        if (adImages['bgImg']) {
            adContainer.css('background-image', 'url(' + adImages['bgImg'] + ')');
        }

        // set ad logo
        if (adImages['logo']) {
            adContainer.append('<div class="logo"><img src="' + adImages['logo'] + '" /></div>');
        }

        // set ad copy
        if (adCopyArray) {
            let copyHtml = '<div class="copyWrapper">';
            if (adCopyArray['copy1']) {
                copyHtml += '<span class="copy1">' + adCopyArray['copy1'] + '</span>';
            }

            if (adCopyArray['copy2']) {                
                    copyHtml += '<span class="copy2">' + adCopyArray['copy2'] + '</span>';
            }

            copyHtml += '</div>';
            adContainer.append(copyHtml);
        }


        // products
        adContainer.append('<div class="products "></div>')
        // set ad products
        if (adImages['product1']) {
            adContainer.find('.products').append('<img class=" product1" src="' + adImages['product1'] + '" />');
        }
        if (adImages['product2']) {
            adContainer.find('.products').append('<img class=" product2" src="' + adImages['product2'] + '" />');
        }
        if (adImages['product3']) {
            adContainer.find('.products').append('<img class=" product3" src="' + adImages['product3'] + '" />');
        }

        if (adImages['rotateImg']) {
            adContainer.append('<div class="rotateContainer"><img class="rotateImg " src="' + adImages['rotateImg'] + '" /></div>');
        }





        // set ad video
        if (adVideoSettings) {
            if (adVideoSettings['url']) {
                let videoHtml = ``;

                if (adVideoSettings['playIcon']) {
                    videoHtml += `<div class="playIcon"><img src="${adVideoSettings['playIcon']}" /></div>`;
                }
                videoHtml += `<video   `;
                if (adVideoSettings['muted']) {
                    videoHtml += ` muted `;
                }
                if (adVideoSettings['controls']) {
                    videoHtml += ` controls `;
                }

                if (adVideoSettings['width']) {
                    videoHtml += ` width="${adVideoSettings['width']}" `;
                }
                if (adVideoSettings['height']) {
                    videoHtml += ` height="${adVideoSettings['height']}" `;
                }

                if (adVideoSettings['poster']) {
                    videoHtml += ` poster="${adVideoSettings['poster']}" `;
                }
                videoHtml += ` ><source src="${adVideoSettings['url']}" type="${adVideoSettings['type']}">Your browser does not support the video tag.</video>`;


                adContainer.append('<div class="video">' + videoHtml + '</div>');

                var bannerVideo = document.querySelector(adData.adContainer + " video");

                $("body").on('click', '.playIcon', function (e) {
                    console.log('video play');
                    // bannerVideo.setAttribute('controls', '');
                    bannerVideo.play();
                    this.remove();
                    e.preventDefault();
                });

            }
        }

        // set hot spots points

        if (adData['hotspots']) {
            let hotSpotsData = adData['hotspots'];
            let hotSpotsHtml = '';
            hotSpotsHtml += '<div class="hotspots">';

            if (hotSpotsData['bgImg']) {
                hotSpotsHtml += '<div class="hotspotsImg"><img src="' + hotSpotsData['bgImg'] + '" /></div>';
            }


            // console.log(hotSpotsData['points']);

            if (hotSpotsData['points']) {
                for (let [key, value] of Object.entries(hotSpotsData['points'])) {
                    // console.log(value['title']);

                    let hotspotsPointStyle = 'style="left: ' + value['left'] + ' !important; top:' + value['top'] + ' !important;"';
                    hotSpotsHtml += '<div class="hotspotsInfo">';
                    hotSpotsHtml += '<div class="hotspotsPoint" ' + hotspotsPointStyle + '></div>';
                    hotSpotsHtml += '<div class="hotspotsMsg">';
                    hotSpotsHtml += '<div class="hotspotsTitle">' + value['title'] + '</div>';
                    hotSpotsHtml += '<div class="hotspotsCopy">' + value['copy'] + '</div>';
                    hotSpotsHtml += '</div>';
                    hotSpotsHtml += '</div>';
                }
            }

            hotSpotsHtml += '</div>';
            adContainer.append(hotSpotsHtml);


            $(document).on('mouseover', '.hotspotsPoint', function (e) {
                $(this).siblings('.hotspotsMsg').fadeIn();
            });

            $(document).on('mouseout', '.hotspotsPoint', function (e) {
                $(this).siblings('.hotspotsMsg').fadeOut();
            });

        }

        // cta 

        if (adData['cta']) {
            let ctaData = adData['cta'];


            if (ctaData['ctaType'] != 'fullAdCta') {
                if (ctaData['ctaImg']) {
                    let ctaHtml = '<a class="ctaImg" target="_blank" >';
                    ctaHtml += '<img src="' + ctaData['ctaImg'] + '" />';
                    ctaHtml += '</a>';
                    adContainer.append(ctaHtml);
                } else {

                let ctaHtml = '<a class="cta" target="_blank" ';

                if (ctaData['url']) {
                    ctaHtml += ` href="${ctaData['url']}" `;
                }

                ctaHtml += ` style="`;
                if (ctaData['color']) {
                    ctaHtml += ` color:${ctaData['color']} !important; `;
                }
                if (ctaData['bgColor']) {
                    ctaHtml += ` background-color:${ctaData['bgColor']} !important; `;
                }
                if (ctaData['top']) {
                    ctaHtml += ` top:${ctaData['top']} !important; `;
                }
                if (ctaData['left']) {
                    ctaHtml += ` left:${ctaData['left']} !important; `;
                }

                ctaHtml += ` " >`;
                
                if (ctaData['copy']) {
                    ctaHtml += '<span>'+ctaData['copy']+'</span>';
                }

                ctaHtml += '</a>';
                adContainer.append(ctaHtml);
            }
                
            } else {
                console.log('cta add')
                let ctaHtml = '<a class="fullAdCta" target="_blank" ';

                if (ctaData['url']) {
                    ctaHtml += ` href="${ctaData['url']}" >&nbsp;`;
                }

                ctaHtml += '</a>';
                adContainer.append(ctaHtml);

            }
        }

        initScrollMagic();

    }
}

