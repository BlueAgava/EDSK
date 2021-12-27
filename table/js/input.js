const inputForm = document.getElementById("inputForm");
const inputedEmail = document.querySelector(
    "#inputForm input[name='inputed-email']").parentNode;
const inputedName = document.querySelector(
    "#inputForm input[name='inputed-name']").parentNode;
const inputedReview = document.querySelector(
    "#inputForm textarea[name='inputed-review']").parentNode;

    console.log(inputedEmail, inputedName, inputedReview);

function initialazeForm(field) {
    const input = field.getElementsByTagName("input")[0];
    input.value = "";
    return {
        getValue() {
            return input.value;
        },
    };
}

const emailField = initialazeForm(inputedEmail);
const nameField = initialazeForm(inputedName);
const reviewField = initialazeForm(inputedReview);

inputForm.addEventListener("submit", function (event) {
    event.preventDefault(); //перехватывает submit и форма срабатывает на ENTER

    const emailValue = emailField.getValue();
    const nameValue = nameField.getValue();
    const reviewValue = reviewField.getValue();

    const data = {
        email: emailValue,
        name: nameValue,
        review: reviewValue,
    };
    console.log(data.emailValue, data.name, data.reviewValue);
});
