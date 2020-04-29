
// fetch('config.json')
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   console.log(data);
// });

console.log(config)

$(document).ready(function () {
    createAd();
    initScrollMagic();


});

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
            if (adCopyArray['copy1']) {
                tl.from(adContainer + ' .copy1', 1.5, { x: 200, opacity: 0 });
            }

            if (adCopyArray['copy2']) {
                tl.from(adContainer + ' .copy2', 2, { x: -200, opacity: 0 });
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
            tl.from(adContainer + ' .rotateImg', 5, { x: 400, alpha: 1, rotation: 360 });
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

function createAd() {

    if (config) {
        let adData = config;
        let adContainer = $(adData.adContainer + ' #main-ad');
        let adContainerWidth = adData.adSize.width;
        let adContainerHeight = adData.adSize.height;
        let adImages = adData.images;
        let adCopyArray = adData.copy;
        let adVideoSettings = adData.video;
        let videoContainer = adContainer.find('.video');

        // console.log(adContainer)

        // set ad width and height
        $(adData.adContainer).width(adContainerWidth);
        $(adData.adContainer).height(adContainerHeight);
        adContainer.width(adContainerWidth);
        adContainer.height(adContainerHeight);
        //adContainer.css('margin-bottom','5000px');


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
            if (adCopyArray['copy1']) {
                adContainer.append('<div class="copy1">' + adCopyArray['copy1'] + '</div>');
            }

            if (adCopyArray['copy2']) {
                adContainer.append('<div class="copy2">' + adCopyArray['copy2'] + '</div>');
            }
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
            adContainer.append('<div class="rotateContainer"><div class="rotateLine"></div><img class="rotateImg " src="' + adImages['rotateImg'] + '" /></div>');
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

                    let hotspotsPointStyle = 'style="left: '+value['left']+' !important; top:'+value['top']+' !important;"';
                    hotSpotsHtml += '<div class="hotspotsInfo">';
                    hotSpotsHtml += '<div class="hotspotsPoint" '+hotspotsPointStyle+'></div>';
                    hotSpotsHtml += '<div class="hotspotsMsg">';
                    hotSpotsHtml += '<div class="hotspotsTitle">'+value['title']+'</div>';
                    hotSpotsHtml += '<div class="hotspotsCopy">'+value['copy']+'</div>';
                    hotSpotsHtml += '</div>';
                    hotSpotsHtml += '</div>';
                }
            }

            hotSpotsHtml += '</div>';
            adContainer.append(hotSpotsHtml);


            $(document).on('mouseover', '.hotspotsPoint', function(e) {
                $(this).siblings('.hotspotsMsg').fadeIn();
            });
            
            $(document).on('mouseout', '.hotspotsPoint', function(e) {
                $(this).siblings('.hotspotsMsg').fadeOut();
            });           

        }

        // cta 

        if(adData['cta']){
            let ctaData = adData['cta'];
            let ctaHtml = '<a class="cta" target="_blank" ';

            if(ctaData['url']){
                ctaHtml += ` href="${ctaData['url']}" `;
            }
            
            ctaHtml += ` style="`;
            if(ctaData['color']){
                ctaHtml += ` color:${ctaData['color']} !important; `;
            }            
            if(ctaData['bgColor']){
                ctaHtml += ` background-color:${ctaData['bgColor']} !important; `;
            }
            if(ctaData['top']){
                ctaHtml += ` top:${ctaData['top']} !important; `;
            }
            if(ctaData['left']){
                ctaHtml += ` left:${ctaData['left']} !important; `;
            }
            
            

            ctaHtml += ` " >`;

            if(ctaData['copy']){
                ctaHtml += ctaData['copy'];
            }

            ctaHtml += '</a>';


            adContainer.append(ctaHtml);
        }


    }
}

