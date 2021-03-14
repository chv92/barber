var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=password]");
var isStorageSupport = true;
var storage = "";
var map = document.querySelector(".contacts-button-map");
var modalMap = document.querySelector(".modal-map");
var closeMap = modalMap.querySelector(".modal-close");

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }

});

close.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (event) {
    if (!login.value || !password.value) {
        event.preventDefault();
    }
    else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
})
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        event.preventDefault();
        if (popup.classList.contains("modal-show") || modalMap.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            modalMap.classList.remove("modal-show");
        }
    }
})

map.addEventListener("click", function (event) {
    event.preventDefault();
    modalMap.classList.add("modal-show");

})

closeMap.addEventListener("click", function (event) {
    event.preventDefault();
    modalMap.classList.remove("modal-show");
})


