$(document).foundation();

//**## NEM NEWS FEED ##**/
//Pulls twitter feed using twitter fetcher.
// Also automatically hyperlinks URLS and user mentions and hashtags.
//@nemcoin
var config1 = {
  "id": '474290838172749825',
  "domId": 'newsFeed',
  "maxTweets": 3,
  "enableLinks": true,
  "showUser": true,
  "showImages": true,
  "showTime": true,
  "dateFunction": '',
  "showRetweet": false,
  "showInteraction": false
};
twitterFetcher.fetch(config1);

$.i18n.init({
		ns: { namespaces: ['en', 'es'], defaultNs: 'en'},
		useLocalStorage: false,
		fallbackLng: 'en',
    resGetPath: 'assets/locales/__lng__.json',
		debug: true
	}, function(t) {
		$('#add').text($.t('ns.common:add'));
		$('#appname').text($.t('app.name'));
		$('#appclient').text($.t('app.client'));
		<!-- OURNEM HOMEPAGE -->
		$('#navclient').text($.t('!test'));
		$('#navbuy').text($.t('nav.buy'));
		$('#blog').text($.t('nav.blog'));
		$('#support').i18n();
});
