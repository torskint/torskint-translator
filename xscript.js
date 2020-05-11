function loadfile(filename, filetype){
	if (filetype=="js"){
		var fileref=document.createElement('script')
		fileref.setAttribute("type","text/javascript")
		fileref.setAttribute("src", filename)
	}
	else if (filetype=="css"){
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", filename)
	}
	if (typeof fileref!="undefined"){
		document.getElementsByTagName("head")[0].appendChild(fileref)
	}
}
loadfile("//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit", "js");
loadfile("https://cdn.jsdelivr.net/gh/torskint/torskint-translator/xstyle.css", "css");
function googleTranslateElementInit() {
	let csTgs = document.getElementById('custom-settings')
	const lgParams = csTgs.dataset;
	console.log(lgParams)
	var ckDomain;
	for (var ckDomain = window.location.hostname.split("."); 2 < ckDomain.length;){
		ckDomain.shift();
	}
	ckDomain = ";domain=" + ckDomain.join(".");
	// domain cookie
	document.cookie = "googtrans=/"+lgParams.xlang+"/"+lgParams.ylang+"; expires=Thu, 07-Mar-2047 20:22:40 GMT; path=/" + ckDomain;
	// host-only cookie (with no domain name definition)
	// document.cookie = "googtrans=/en/fr; expires=Thu, 07-Mar-2047 20:22:40 GMT; path=/";
	new google.translate.TranslateElement({
		pageLanguage: lgParams.xLang,
		autoDisplay: false,
		layout: google.translate.TranslateElement
	}, 'google_translate_element');
}
