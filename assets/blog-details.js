const toc_toggle = () => {
    let toc_bubble = document.querySelector(".post__toggle-toc-button");
    let toc_menu = document.querySelector(".post__toc");
    toc_bubble.addEventListener("click", function () {
        if (toc_menu.classList.contains("post__toc--show-mobile")) {
            toc_menu.className = toc_menu.className.replace(" post__toc--show-mobile", "");
        } else {
            toc_menu.className += " post__toc--show-mobile";
        }
    });
}

const toc_item_highlighter = () => {
    let toc = document.querySelector(".toc");
    toc.querySelector("ul li:first-child a").className += "active";

}

// toc_toggle();
// toc_item_highlighter();