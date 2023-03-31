//Form Validation

const button = document.querySelector(".formcontato__botao");
const item = document.querySelectorAll(".input");


for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("blur", () => {
        if (item[i].value == "") {
            item[i].classList.add("invalid");
            item[i].classList.add("color");
            item[i].nextElementSibling.classList.remove("none");
            item[i].nextElementSibling.classList.add("flex");
        } else if (!item[1].value == "" && !item[1].value.includes("@")) {
            item[1].classList.add("invalid");
            item[1].classList.add("color");
            item[1].nextElementSibling.classList.remove("none");
            item[1].nextElementSibling.classList.add("flex");
        } else {
            item[i].classList.remove("invalid");
            item[i].classList.remove("color");
            item[i].nextElementSibling.classList.remove("flex");
            item[i].nextElementSibling.classList.add("none");
            button.removeAttribute("disabled");

        }
    });

}
button.addEventListener("click", (e) => {
    e.preventDefault();
});