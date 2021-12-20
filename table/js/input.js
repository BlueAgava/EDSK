const inputForm = document.getElementById('#inputForm');

// const inputedEmail = document.querySelector("#inputedEmail");
// const inputedName = document.querySelector("#inputedName");
// const inputedText = document.querySelector("#inputedText");
// const inputedCheck = document.querySelector("#checkbox");

const inputedEmail = document.querySelector("#inputForm input[name='inputed-email']").parentNode;
const inputedName = document.querySelector("#inputForm input[name='inputed-name']").parentNode;
const inputedReview = document.querySelector("#inputForm input[name='inputed-review']").parentNode;

console.log(inputedEmail, inputedName);


function initialazeForm(field){
    const input = field.getElementByTagName("input")[0];
    input.value = "";
}

const emailField = initialazeForm (inputedEmail);
const nameField = initialazeForm (inputedName);
const reviewField = initialazeForm (inputedReview);

inputForm.addEventListener('submit', function (event){
    event.preventDefault(); //перехватывает submit и форма срабатывает на ENTER
    return{
        getValue() {
            return input.value
        }
    }
    
});
