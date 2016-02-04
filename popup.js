function clickHandler() {
	window.webkitNotifications.createNotification("icon19.png", "Clicked", "It was clicked").show();
}

function loadHandler() {
	window.webkitNotifications.createNotification("icon19.png", "Plugin Loaded", "It was loaded").show();
}