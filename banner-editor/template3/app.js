
console.log(config)

$( document ).ready(function() {
    createAd();
    initScrollMagic();


});

function initScrollMagic(){
    if(config){
        // let adData = config;
        // let adContainer = adData.adContainer+' .rotateImg ';        
        // let videoContainer = adContainer.find('.video');
        // let productsContainer = adContainer.find('.products');
    // Init ScrollMagic Controller
  // Init ScrollMagic
    var controller = new ScrollMagic.Controller();


    // pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '.bannerContainer',
        triggerHook: 0,
        duration: 667
		// duration: '30%'
	})
	.setPin('.bannerContainer', {pushFollowers: false})
	.addTo(controller);

	// // pin again
	// var pinIntroScene2 = new ScrollMagic.Scene({
	// 	triggerElement: '#project01',
	// 	triggerHook: 0.4
	// })
	// .setPin('.bannerContainer', {pushFollowers: false})
	// .addTo(controller);

    var tween = TweenMax.to('.rotateImg ', 0.5, {
        scale: 1,
        rotation: 360
      });

    var scene = new ScrollMagic.Scene({triggerElement: ".bannerContainer", duration: 667})
					// animate color and top border in relation to scroll position
					.setTween(tween) // the tween durtion can be omitted and defaults to 1
                    .setClassToggle(".logo", 'fadeIn')
                    //.setClassToggle(".copy1", 'fadeInBottom')
                    .addIndicators({name: "logo  (duration: 667)"}) // add indicators (requires plugin)
					.addTo(controller);
    



	// $('.products img').each(function(){

	// 	// build a scene
	// 	var ourScene = new ScrollMagic.Scene({
    //         triggerElement: this.children[0],
    //         //triggerHook: "onEnter",
	// 	    duration: 300
	// 		// triggerHook: 0.9
	// 	})
	// 	.setClassToggle(this, 'fade-in') // add class to project01
	// 	.addIndicators({
	// 		name: 'fade scene',
	// 		colorTrigger: 'black',
	// 		colorStart: '#75C695',
	// 		colorEnd: 'pink'
	// 	}) // this requires a plugin
	// 	.addTo(controller);

	// });
}
}

function createAd(){
    
    if(config){
        let adData = config;
        let adContainer = $(adData.adContainer);
        let adContainerDimention = adData.dimention.split("x");
        let adImages = adData.images;
        let adCopyArray = adData.copy;
        let adVideoSettings = adData.video;
        let videoContainer = adContainer.find('.video');

        // console.log(adContainer)

        // set ad width and height
        adContainer.width(adContainerDimention[0]+'px');
        adContainer.height(adContainerDimention[1]+'px');

        // set ad background image
        if(adImages['bgImg']){
            adContainer.css('background-image', 'url(' + adImages['bgImg'] + ')');
        }

        // set ad logo
        if(adImages['logo']){
            adContainer.find('.logo').html('<img src="'+ adImages['logo'] + '" />');
        }
        if(adImages['rotateImg']){
            adContainer.find('.rotateContainer').append('<img class="rotateImg " src="'+ adImages['rotateImg'] + '" />');
        }
        

        // set ad products
        if(adImages['product1']){
            adContainer.find('.products').append('<img class="cssanimation moveFromRight product1" src="'+ adImages['product1'] + '" />');
        }
        if(adImages['product2']){
            adContainer.find('.products').append('<img class="cssanimation moveFromRight product2" src="'+ adImages['product2'] + '" />');
        }
        if(adImages['product3']){
            adContainer.find('.products').append('<img class="cssanimation moveFromRight product3" src="'+ adImages['product3'] + '" />');
        }
        
        
        
        if(adCopyArray){
            // set ad copy
            if(adCopyArray['copy1']){
                adContainer.find('.copy1').html(adCopyArray['copy1']);
            }

            if(adCopyArray['copy2']){
                adContainer.find('.copy2').html(adCopyArray['copy2']);
            }
        }

        // set ad video
        if(adVideoSettings){
            if(adVideoSettings['url']){
                let videoHtml = ``;

                if(adVideoSettings['playIcon']){
                    videoHtml += `<div class="playIcon"><img src="${adVideoSettings['playIcon']}" /></div>`; 
                }
                videoHtml += `<video `;
                if(adVideoSettings['controls']){
                    videoHtml += ` controls `; 
                }
                if(adVideoSettings['width']){
                    videoHtml += ` width="${adVideoSettings['width']}" `; 
                }
                if(adVideoSettings['height']){
                    videoHtml += ` height="${adVideoSettings['height']}" `; 
                }
                
                if(adVideoSettings['poster']){
                    videoHtml += ` poster="${adVideoSettings['poster']}" `; 
                }
                videoHtml += ` ><source src="${adVideoSettings['url']}" type="${adVideoSettings['type']}">Your browser does not support the video tag.</video>`;
                
                
                videoContainer.html(videoHtml);

                var bannerVideo = document.querySelector(adData.adContainer+" video"); 

                $("body").on('click', '.playIcon', function (e) {
                    console.log('video play');
                    bannerVideo.setAttribute('controls','');
                    bannerVideo.play();
                    this.remove();
                    e.preventDefault();
                });

            }
        }else {
            videoContainer.remove();
        }


    }
}

