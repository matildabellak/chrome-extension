function clickHandler() {
	window.webkitNotifications.createNotification("icon19.png", "Clicked", "It was clicked").show();
}




window.onload = function(){ 
    document.getElementById('btn_div').onclick = function () {
    document.getElementById('changed_div').style.backgroundColor = '#242424';
}
};


// function loadHandler() {
// 	window.webkitNotifications.createNotification("icon19.png", "Plugin Loaded", "It was loaded").show();
// }