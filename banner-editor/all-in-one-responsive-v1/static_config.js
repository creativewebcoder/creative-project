var config = {
    "formate" : "inter_scroller",
    "adType": "static", // {"static", "animated", "video", "carousel", "parallex", "hotspots"}
    "adSize":{
        "width":"100%",
        "height":"100vh"
    }, // ad width x ad height
    "adContainer":".bannerContainer", // advert inject container id
    "cta": {
        "isCtaShow": false, // {true, false}
        "ctaType":'fullAdCta', // {"onlyCtaBtn", "fullAdCta"}
        "url":"https://www.taylormadegolf.com/",
        "copy": "Buy Now",
        "color": "#fff",
        "bgColor": "#111111",
        "top": "365px",
        "left": "135px"
    },
    "landscape" : {
        "images" : {
            // "bgImg": "./images/static/Parallax_414x736.jpg"          
            "bgImg": "./images/static/Parallax_736x414.jpg"          
        }  
    },

    "portrait" : {
        "images" : {
            "bgImg": "./images/static/Parallax_414x736.jpg"          
            // "bgImg": "./images/static/Parallax_736x414.jpg"          
        }  
    },

    "scrollMagicActive": true, // true, false
    "isShowAdBar": true // true, false
}