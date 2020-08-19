const dashboard = () => {
    const feed = document.querySelector(".feed");
    let posts = document.getElementsByClassName("feed__post");
    const empty = document.querySelector(".placeholder");
    let tag_list = document.querySelector(".tag-list");
    let tab_links = tag_list.getElementsByClassName("tag-list__link");
    let footer = document.querySelector(".footer");
    tag_list.addEventListener("click", function (e) {
        if (e.target && e.target.matches(".tag-list__link")) {
            let tag_name = e.target.innerHTML;
            if (e.target.classList.contains("active")) {
                tag_name = "";
                e.target.className = e.target.className.replace(" active", "");
            } else {
                setActiveTab(e.target);
            }
            if (filterSelection(tag_name)) {
                empty.style.display = "none";
                feed.style.display = "grid";
                footer.style.position = "relative";
            } else {
                feed.style.display = "none";
                empty.style.display = "flex";
                footer.style.position = "absolute";
                empty.innerHTML = '<p> <strong>' + tag_name + '</strong > articles will appear here.</p> ';
            };
        }
    });
    function filterSelection(name) {
        let hide_empty_flag = false;
        for (let index = 0; index < posts.length; index++) {
            let post = posts[index];
            let post_tags = post.querySelectorAll(".post-card__tag ._tag");
            // determining to show post or not depending on tag
            for (let i = 0; i < post_tags.length; i++) {
                let tag = post_tags[i].innerHTML.trim();
                if (tag.includes(name)) {
                    post.style.display = "block";
                    hide_empty_flag = true;
                    break;
                } else {
                    post.style.display = "none";
                }
            }

        }
        return hide_empty_flag;
    }
    function setActiveTab(current) {
        // remove current active
        for (let i = 0; i < tab_links.length; i++) {
            tab_links[i].className = tab_links[i].className.replace(" active", "");
        }
        current.className += " active";
    }
}
dashboard();
