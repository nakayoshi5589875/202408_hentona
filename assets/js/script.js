
accordion("js-accordion");
disActive("js-disActive");
langSet("js-body");
scrollIn("js-scrollIn");

function accordion(className){
    let target    = document.getElementsByClassName(className);
    let targetArr = Array.from(target);
    targetArr.forEach(element => {
        element.addEventListener("click", function(){
            element.classList.toggle("is-active");
        });
    });
}

function disActive(className){
    let target    = document.getElementsByClassName(className);
    let targetArr = Array.from(target);

    targetArr.forEach(element => {
        element.addEventListener("click", function(){
            let active    = document.getElementsByClassName("is-active");
            let activeArr = Array.from(active);
            activeArr.forEach(elementAct => {
                console.log(elementAct);
                elementAct.classList.remove("is-active");
            });
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


// scrollIn
// ------------------------------------------------------------
function scrollIn(Class){
    const headings = document.querySelectorAll('.' + Class);
    const options = {
      threshold: 1
    };

    const observer = new IntersectionObserver(showElements);

    headings.forEach(heading => {
      observer.observe(heading);
    });

    function showElements(entries){
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-view');
        }
      });
    };
}
