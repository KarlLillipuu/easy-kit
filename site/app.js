var focus = 0;
var wrap = document.getElementsByClassName('focus-wrap')[0];
wrap.style.margin = "0";

function toggleFocus() {
	var wrap = document.getElementsByClassName('focus-wrap')[0];
    if (focus === 0) {
        wrap.style.margin = "auto 25%";
        focus = 1;
        console.log(focus + "on");
    } else {
       	wrap.style.margin = "0";
       	focus = 0;
       	console.log(focus + "off");
    }
}