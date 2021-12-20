const prizeForm = document.getElementById("prize-popup");
const openBtn = document.querySelector("#popup-open");
const closeBtn = document.querySelector("#popup-close");
const nameInputWrapper = document.querySelector(
    "#prize-popup input[name='name']"
).parentNode;
const emailInputWrapper = document.querySelector(
    "#prize-popup input[name='e-mail']"
).parentNode;
const prizeSelect = document.querySelector("#choose-prize");

const INPUT_ERROR_CLASS = "st-input1_error";
const INPUT_FOCUS_CLASS = "st-input1_focused";
function popupToggle() {
    prizeForm.classList.toggle("hidden");
}
function initializeField(wrapperElement) {
    const inputElement = wrapperElement.getElementsByTagName("input")[0];
    const errorParagraphElement = wrapperElement.querySelector(
        ".st-input1__error-msg"
    );
    clearError();
    wrapperElement.classList.remove(INPUT_FOCUS_CLASS);
    inputElement.value = "";

    function clearError() {
        wrapperElement.classList.remove(INPUT_ERROR_CLASS);
        errorParagraphElement.innerText = "";
    }
    inputElement.addEventListener("focus", function () {
        wrapperElement.classList.add(INPUT_FOCUS_CLASS);
    });
    inputElement.addEventListener("input", function () {
        clearError();
    });
    inputElement.addEventListener("blur", function () {
        if (!inputElement.value) {
            wrapperElement.classList.remove(INPUT_FOCUS_CLASS);
        }
    });

    return {
        // focus() {
        //     inputElement.focus();
        // },
        getValue() {
            return inputElement.value;
        },
        // setError(errorText) {
        //     errorParagraphElement.innerText = errorText;
        //     wrapperElement.classList.add(INPUT_ERROR_CLASS);
        // },
    };
}

const nameField = initializeField(nameInputWrapper);
const emailField = initializeField(emailInputWrapper);

openBtn.onclick = function () {
    popupToggle();
    nameField.focus();
};

closeBtn.onclick = popupToggle;
prizeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValue = nameField.getValue();
    const emailValue = emailField.getValue();

    // if (!nameValue) {
    //     nameField.setError("Поле обязательно для заполнения");
    //     nameField.focus();
    //     return;
    // }
    // if (!emailValue) {
    //     emailField.setError("Поле обязательно для заполнения");
    //     emailField.focus();
    //     return;
    // }

    // if (!/^[\w]{3,16}@[a-z0-9]{4,10}\.[a-z]{2,3}$/.test(emailValue)){
    //     emailField.setError("Укажите валидный email");
    //     emailField.focus();
    //     return;
    // }
    // if (prizeSelect.value === 'none'){
    //     prizeSelect.classList.add(INPUT_ERROR_CLASS);
    //     return;
    // }
    const data = {
        name: nameValue,
        email: emailValue,
        prize: prizeSelect.value,
    };
    const url = new URL("http://inno-ijl.ru/multystub/stc-21/feedback");
    url.search = new URLSearchParams(data).toString();
    fetch(url.toString());
});
