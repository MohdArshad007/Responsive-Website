window.onload = function(){
    window.onscroll = function(){
        var header = document.querySelector("header");
        if(window.pageYOffset > 80){
            header.classList.add("onscroll");
        } else {
            header.classList.remove("onscroll");
        }
    }
}