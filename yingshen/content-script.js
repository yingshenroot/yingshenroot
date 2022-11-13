
injectCustomJs('inject.js');


function injectCustomJs(jsPath)
{
	
	var temp = document.createElement('script');
	
	temp.setAttribute('type', 'text/javascript');
	temp.src = chrome.extension.getURL(jsPath);
	
	document.head.appendChild(temp);
	
}