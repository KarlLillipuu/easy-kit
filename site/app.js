//Focus button functionality - class swapping
var element = document.getElementsByClassName('focus-wrap focus-inactive')[0];
function toggleFocus() {
	if(element.className) {
		element.className = (element.className == 'focus-wrap focus-inactive') ? 'focus-wrap focus-active' : 'focus-wrap focus-inactive';
	}
}