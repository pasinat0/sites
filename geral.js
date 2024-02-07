window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector("footer").style.display = "none";
    } else {
        document.querySelector("footer").style.display = "block";
    }
}
