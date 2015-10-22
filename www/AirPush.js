var airPush = {
	cacheEnabled: false,
	setAppId: function(airPushAppId, successCallback, errorCallback) {
		cordova.exec(
			successCallback, // success callback function
			errorCallback, // error callback function
			'AirpushPlugin', // mapped to our native Java class called "AmazonAdsPlugin"
			'setAppId', // with this action name
			airPushAppId
		); 
	 },
	 setApiKey: function(airPushApiKey, successCallback, errorCallback) {
		cordova.exec(
			successCallback, // success callback function
			errorCallback, // error callback function
			'AirpushPlugin',
			'setApiKey',
			airPushApiKey
		); 
	 },
	 smartWall: {
		AD_TYPE: {
			APP_WALL: 'appwall',
			INTERSTITIAL: 'interstitial',
			LANDING_PAGE: 'landing_page',
			OVERLAY: 'overlay',
			VIDEO: 'video'
			
		},
		showDefault: function(successCallback, errorCallback) {
			cordova.exec(
				successCallback, // success callback function
				errorCallback, // error callback function
				'AirpushPlugin',
				'airpushSmartWallAd',
				'smartwall'
			); 
		},
		showOverlayAd: function(successCallback, errorCallback) {
			cordova.exec(
				successCallback, // success callback function
				errorCallback, // error callback function
				'AirpushPlugin',
				'airpushSmartWallAd',
				'overlay'
			); 
		 },
		 showAppWallAd: function(successCallback, errorCallback) {
			cordova.exec(
				successCallback, // success callback function
				errorCallback, // error callback function
				'AirpushPlugin',
				'airpushSmartWallAd',
				'appwall'
			); 
		 },
		 showInterstitialAd: function(successCallback, errorCallback) {
			cordova.exec(
				successCallback, // success callback function
				errorCallback, // error callback function
				'AirpushPlugin',
				'airpushSmartWallAd',
				'interstitial'
			); 
		 },
		 showVideoAd: function(successCallback, errorCallback) {
			cordova.exec(
				successCallback, // success callback function
				errorCallback, // error callback function
				'AirpushPlugin',
				'airpushSmartWallAd',
				'video'
			); 
		 },
		 showLandingPageAd: function(successCallback, errorCallback) {
			cordova.exec(
				successCallback, // success callback function
				errorCallback, // error callback function
				'AirpushPlugin',
				'airpushSmartWallAd',
				'landing_page'
			); 
		 },
		 showCached: function(adType, successCallback, errorCallback) {
			if(adType.length <= 0)
				adType = 'smartwall';
			cordova.exec(
				successCallback, // success callback function
				errorCallback, // error callback function
				'AirpushPlugin',
				'showCache',
				adType
			); 
		 },
	 },
	 banner360: {
		 placementId: null,
		 setPlacementId: function(id, successCallback, errorCallback) {
			this.placementId = id;
			cordova.exec(
				successCallback, // success callback function
				errorCallback, // error callback function
				'AirpushPlugin',
				'setPlacementId',
				'<span color="red"><placement_id></span>'
			);
		 },
		 call360Ad: function(successCallback, errorCallback) {
			if(this.placementId == null){
				cordova.exec(
					successCallback, // success callback function
					errorCallback, // error callback function
					'AirpushPlugin',
					'setPlacementId',
					0
				);
			}
			cordova.exec(
				successCallback, // success callback function
				errorCallback, // error callback function
				'AirpushPlugin',
				'call360',
				''
			);
		 },
	 },
	 inlineBanner: {
		 showInlineBanner: function(successCallback, errorCallback) {
			cordova.exec(
				successCallback, // success callback function
				errorCallback, // error callback function
				'AirpushPlugin',
				'ShowTop',
				''
			); 
		 },
	 },
	 setCaching: function(caching, successCallback, errorCallback) {
		this.cacheEnabled = caching;
		cordova.exec(
			successCallback, // success callback function
			errorCallback, // error callback function
			'AirpushPlugin',
			'setCache',
			caching
		); 
	 },
}
module.exports = airPush;
