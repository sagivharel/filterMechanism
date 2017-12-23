var filterItems = document.querySelectorAll("ul li");
for (let i = 0; i < filterItems.length; i++) {
    filterItems[i].addEventListener("click", function (e) {
        if (e.target.classList.contains("clicked")) {
             e.target.classList.remove("clicked");
            var allResults = document.getElementsByClassName("card-panel");
            for (let y = 0; y < allResults.length; y++) {
                if (!allResults[y].classList.contains(filterItems[i].className)) {
                    // allResults[y].parentElement.classList.remove("animation");
                    allResults[y].parentElement.parentElement.style.display = "block";
                   
                }
            }
        }
        else {
            $("ul li").removeClass("clicked");
            // $(".col").removeClass("animation");
            $(".row").css("display", "none");
            var allResults = document.getElementsByClassName("card-panel");
            for (let y = 0; y < allResults.length; y++) {
                // if (!allResults[y].classList.contains(filterItems[i].className)) {
                //     allResults[y].parentElement.classList.add("animation");
                //     // allResults[y].classList.add("animation");
                // }
            }
            $(".row." + filterItems[i].className).css("display", "block");
            e.target.classList.add("clicked");
        }
    });
}
   