var config = {
    "formate" : "inter_scroller",
    "adType": "video", // {"static", "animated", "video", "carousel", "parallex", "hotspots"}
    "dimention":"375x667", // ad width x ad height
    "size":"2MB", // max size
    "adContainer":".bannerContainer", // advert inject container id
    "cta": {
        "isCtaShow": true, // {true, false}
        "ctaType":'onlyCtaBtn', // {"onlyCtaBtn", "FullAdCta"}
        "url":"https://www.google.com",
        "copy": "Buy Now",
        "color": "#fff",
        "bgColor": "green"
    },
    "images" : {
        "bgImg": "./images/bg.jpg",
        "logo": "./images/logo.png",        
        "product1": "./images/product1.png",        
        "product2": "./images/product2.png",        
        "product3": "./images/product3.png",        
        "rotateImg": "./images/ball.png",        
    },

    "copy": {
        "copy1":"SEE THE STORY",
        "copy2":"<b>BEHIND THE SHAPE</b>",
    },

    "video": {
        "url": "advert.mp4",
        "poster": "./images/poster.png",
        "playIcon": "./images/play.png",
        "width": "320",
        "height": "240",
        "type":"video/mp4",
        "controls": false, // true, false
    },

    // "adCSS": "",
    // "adJS": "",
    // "adHTML":"",

    // "importedCSSLibraryLink" : {
        
    // },

    // "importedJSLibraryLink" : {

    // }
  
}