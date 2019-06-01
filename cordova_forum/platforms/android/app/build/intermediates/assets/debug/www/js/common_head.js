var localStorage = window.localStorage;
var baseUrl =  'http://2b0e48ca.ngrok.io';
var contentSerucityPolicy = `default-src 'self' `+baseUrl+`   
 data: gap: ms-appdata: https://ssl.gstatic.com 'unsafe-eval';
 style-src 'self' 'unsafe-inline'; media-src *;`;
//  media-src *;

localStorage.setItem('baseUrl', baseUrl);
localStorage.setItem('contentSerucityPolicy',contentSerucityPolicy);

function attach(contentSerucityPolicy)
{
	var headElement = document.querySelector('head');
	var metaTag = document.createElement('meta');

	metaTag.httpEquiv="Content-Security-Policy";
	metaTag.content = contentSerucityPolicy;

	headElement.insertBefore(metaTag, headElement.childNodes[0] || null); 
}
attach(contentSerucityPolicy);