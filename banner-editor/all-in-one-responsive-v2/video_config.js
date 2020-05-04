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

    // "hotspots": {
    //     "bgImg" : "./images/taylormade.jpg",
    //     "points": {
    //         0:{
    //             title:"SIM Driver",
    //             copy:"We Reshaped the Driver, So You Can Reshape Your Game.",
    //             // url:'https://www.taylormadegolf.com/SIM-Driver/DW-JJI23.html?lang=default',
    //             left:"150px",
    //             top:"20px"
    //         },
    //         1:{
    //             title:"P790 Irons",
    //             copy:"You Don't Mess With What Works. You Work To Make It Better.",
    //             // url:'https://www.taylormadegolf.com/P790-Irons/DW-AL464.html?lang=default',
    //             left:"70px",
    //             top:"70px"
    //         },
    //         2:{
    //             title:"MySpider X",
    //             copy:"MySpider X allows you to personalize color, sightline, weights, and more.",
    //             // url:'https://www.taylormadegolf.com/MySpider-X/DW-JIC83.html?lang=default',
    //             left:"255px",
    //             top:"60px"
    //         }            
    //     }
    // },


    "video": {
        "url": "advert.mp4",
        "poster": "./images/poster.png",
        "playIcon": "./images/play.png",
        "width": "100%",
        "height": "auto",
        "type":"video/mp4",
        "controls": true, // true, false
        "muted": true, // true, false
    },

    "isShowAdBar": true, // true, false

    // "adCSS": "",
    // "adJS": "",
    // "adHTML":"",

    // "importedCSSLibraryLink" : {
        
    // },

    // "importedJSLibraryLink" : {

    // }
  
}