const createAccountBtn = document.getElementById("createAccount");
const authForms = document.getElementById("authForms");
const closeForms = document.getElementById("closeForms");


// OPEN DRAWER

createAccountBtn.addEventListener("click", () => {
    authForms.classList.add("open");
    authForms.setAttribute("aria-hidden", "false");
});


// CLOSE DRAWER

closeForms.addEventListener("click", () => {
    authForms.classList.remove("open");
    authForms.setAttribute("aria-hidden", "true");
});


// CLOSE WHEN CLICKING BACKDROP

authForms.addEventListener("click", (e) => {

    if (e.target === authForms) {
        authForms.classList.remove("open");
        authForms.setAttribute("aria-hidden", "true");
    }

});


// PASSWORD TOGGLE

document.querySelectorAll(".password-toggle").forEach(button => {

    button.addEventListener("click", () => {

        const input =
            button.parentElement.querySelector("input");

        const isPassword =
            input.type === "password";

        input.type =
            isPassword ? "text" : "password";

        button.setAttribute(
            "aria-pressed",
            isPassword
        );

    });

});

const agreementCheckbox =
    document.getElementById("agreeTerms");

const createButton =
    document.getElementById("submitCreateAccount");

createButton.disabled = true;

agreementCheckbox.addEventListener("change", () => {
    createButton.disabled = !agreementCheckbox.checked;
});

document
    .getElementById("signupForm")
    .addEventListener("submit", (e) => {

        if (!agreementCheckbox.checked) {
            e.preventDefault();
            alert(
                "Please agree to the Terms and Privacy Policy."
            );
        }

    });