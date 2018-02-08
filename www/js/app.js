// Dom7
var $$ = Dom7;


// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!sdsd');
    },
	  helloWorld1: function () {
      app.dialog.alert('Hello World1!');
    },  
  },
  // App routes
  routes: routes,
});

// Dom Events
$$('.panel-left').on('panel:open', function () {
  console.log('Panel left: open');
});
$$('.panel-left').on('panel:opened', function () {
  console.log('Panel left: opened');
});


$$('.exit-click').on('click', function () {
	 app.dialog.alert('Выход из приложения');
	 app.router.exitApp();
	 navigator.app.exitApp();
});





// Prompt
$$('.open-prompt').on('click', function () {
  app.dialog.prompt('Введите число ?', function (name) {
	  var m=Number(document.getElementById('pole2').value);
	  m=m+Number(name);
      app.dialog.alert('Общая сумма будет равна ' + m);
      document.getElementById('pole1').value="m";
  });
});




// Prompt
$$('.banner').on('click', function () {
		alert("fff");
var admobid = {};
    if( /(android)/i.test(navigator.userAgent) ) { // for android & amazon-fireos 
    admobid = {
        banner: 'ca-app-pub-3940256099942544/6300978111', // or DFP format "/6253334/dfp_example_ad" 
        interstitial: 'ca-app-pub-9609087637503923/1710134090'
    };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios 
    admobid = {
        banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad" 
        interstitial: 'ca-app-pub-xxx/kkk'
    };
} else { // for windows phone 
    admobid = {
        banner: 'ca-app-pub-xxx/zzz', // or DFP format "/6253334/dfp_example_ad" 
        interstitial: 'ca-app-pub-xxx/kkk'
    };
}
if(AdMob) AdMob.createBanner({
  adId: admobid.banner,
  overlap: true,	
  isTesting: true,	
  position: AdMob.AD_POSITION.BOTTOM_CENTER,
  autoShow: true });

			
});



//functions to allow you to know when ads are shown, etc.
function registerAdEvents() {
    document.addEventListener('onReceiveAd', function(){});
    document.addEventListener('onFailedToReceiveAd', function(data){});
    document.addEventListener('onPresentAd', function(){});
    document.addEventListener('onDismissAd', function(){ });
    document.addEventListener('onLeaveToAd', function(){ });
    document.addEventListener('onReceiveInterstitialAd', function(){ });
    document.addEventListener('onPresentInterstitialAd', function(){ });
    document.addEventListener('onDismissInterstitialAd', function(){
        window.plugins.AdMob.createInterstitialView();          //REMOVE THESE 2 LINES IF USING AUTOSHOW
        window.plugins.AdMob.requestInterstitialAd();           //get the next one ready only after the current one is closed
    });
}


// Add the following 2 functions and call them when you want ads to show



// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});







// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});


function xx2(){
	app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
}




$$()


							  
 function onConfirmExit(button){
 	if(button==1){
 		navigator.app.exitApp();
 	}
 	else{
 		return;
 	}
 }