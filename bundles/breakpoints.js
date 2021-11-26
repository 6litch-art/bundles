var debug = debug || false;

var getBreakpoint = function () {
	return window.getComputedStyle(document.body, ":before").content.replace(/\"/g, '');
}

var breakpoint = getBreakpoint();
if(debug) {
	console.log("Breakpoint: " + breakpoint);
}

window.addEventListener('resize', function() {
	breakpoint = getBreakpoint();
	if(debug) console.log("Breakpoint: " + breakpoint);
}, false);

// Wait for the page to be fully loaded
window.addEventListener("load", function(event) {
	if(document.getElementById("page")) document.getElementById("page").style.visibility='visible';
});
