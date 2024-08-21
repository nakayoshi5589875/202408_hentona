
accordion("js-accordion");
langSet("js-body");

function accordion(className){
    let target    = document.getElementsByClassName(className);
    let targetArr = Array.from(target);
    targetArr.forEach(element => {
        element.addEventListener("click", function(){
            element.classList.toggle("is-active");
        });
    });
}

function langSet(className){
    let target    = document.getElementsByClassName(className)[0];
    let url = new URL(window.location.href);
    let lang = url.searchParams.get("lang");

    if(lang === "en"){
        target.classList.toggle("lang_en");
        return false;
    }
    if(lang === "kr"){
        target.classList.toggle("lang_kr");
        return false;
    }
    if(lang === "ch"){
        target.classList.toggle("lang_ch");
        return false;
    }
    target.classList.toggle("lang_ja");
}