const contact_first_name_box = document.getElementById("contact-first-name");
const contact_first_name_error_box = document.getElementById("contact-first-name-error-box");
const contact_last_name_box = document.getElementById("contact-last-name");
const contact_last_name_error_box = document.getElementById("contact-last-name-error-box");
const contact_email_box = document.getElementById("contact-email");
const contact_email_error_box = document.getElementById("contact-email-error-box");
const contact_phone_box = document.getElementById("contact-phone-num");
const contact_phone_error_box = document.getElementById("contact-phone-num-error-box");
const contact_form = document.getElementsByClassName("contact-form")[0]
const contact_form_submit = document.getElementsByClassName("contact-form-submit")[0]

contact_form_submit.addEventListener("click", (event) =>{
    event.preventDefault();
    console.log(event)
    if(contact_first_name_error_box.innerText == "" && contact_email_error_box.innerText == "" && contact_phone_error_box.innerText == ""){
        // contact_form.submit();
        alert("Form submitted successfully!");
    }
})

// contact_first_name_box.addEventListener("input", ()=>{
//     if(contact_first_name_box.value.length() < 3){
//         contact_first_name_error_box.innerHTML(`Itna chota naam kiska hota hai bhai`);
//     }
// })

contact_first_name_box.addEventListener("input", () => {
    if (contact_first_name_box.value.length < 3) {
        contact_first_name_error_box.innerText = "Itna chota naam kiska hota hai bhai";
    } 
    else {
        contact_first_name_error_box.innerText = "";
    }
});

contact_email_box.addEventListener("input", () => {
    let text = contact_email_box.value;
    if (text.match(".*.@..*") === null) {
        contact_email_error_box.innerText = "Please enter a valid email";
    } 
    else {
        contact_email_error_box.innerText = "";
    }
});

contact_phone_box.addEventListener("input", () => {
    let text = contact_phone_box.value;
    console.log(text);
    if (!text.match(/^\d{10}$/)) {
        contact_phone_error_box.innerText = "Please enter a valid phone number";
    } 
    else {
        contact_phone_error_box.innerText = "";
    }
});
