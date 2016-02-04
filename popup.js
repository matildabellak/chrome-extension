function clickHandler() {
	window.webkitNotifications.createNotification("icon19.png", "Clicked", "It was clicked").show();
}





window.onload = function(){ 
	var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://www.bbc.com/", true);
    xhr.onreadystatechange = function() {
    	if (xhr.readyState == 4) {
    	// WARNING! Might be injecting a malicious script!
    	document.getElementById("changed_div").innerHTML = xhr.responseText;
        }
    }

    xhr.send();


    //document.getElementById('btn_div').onclick = function () {
    //document.getElementById('changed_div').style.backgroundColor = '#242424';
};


// function loadHandler() {
// 	window.webkitNotifications.createNotification("icon19.png", "Plugin Loaded", "It was loaded").show();
// }