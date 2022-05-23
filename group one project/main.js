// Select All The Element
let firstName=document.querySelector("#firstName");
let lastName=document.querySelector("#lastName");
let password=document.querySelector("#password");
let conformPassword=document.querySelector("#confirmPassword");
let email=document.querySelector("#email");
let phone=document.querySelector("#phone");

let form=document.querySelector("#register");
let successAlert=document.querySelector("#successAlert");
let dangerAlert=document.querySelector("#dangerAlert");

let passwordHelper=document.querySelector("#passwordHelper");
let confirmPasswordHelper=document.querySelector("#confirmPasswordHelper");
let table=document.querySelector("#userTable tbody");

//submit Event

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    if(checkEmptyFeild(firstName) && checkEmptyFeild(lastName) && checkEmptyFeild(password)
        && checkEmptyFeild(conformPassword) && checkEmptyFeild(email) && checkEmptyFeild(phone)
    ){
        if(!checkPasswordLength()){
            checkPasswordLength();
            return;
        }

        if(!checkConfirmPassword()){
            checkConfirmPassword();
            return;
        }


        successsAlert.textContent="thank You successfully Registered";
        successAlert.classList.add("d-block");

        form.reset();
    }
    else{
        checkEmptyFeild(firstName);
        checkEmptyFeild(lastName);
        checkEmptyFeild(password);
        checkEmptyFeild(conformPassword);
        checkEmptyFeild(email);
        checkEmptyFeild(phone);
    }
   
});

//function check the empty feilds

function checkEmptyFeild(feild){
    if(feild.value == ""){
        feild.classList.add("border","border-danger");
        dangerAlert.textContent="All Feild Must not Empty...";
        dangerAlert.classList.add("d-block");
        return;
    }
    else{
        feild.classList.remove("border-danger");
        dangerAlert.classList.remove("d-block");
        return true;
    }
}

function checkPasswordLength(){
    if(password.value.length < 6){
        password.classList.add("border","border-warning");
        passwordHelper.textContent="Atleast 6 character";
        passwordHelper.classList.add("text-danger");
        return false;
    }
    else{
        password.classList.remove("border-warning");
        passwordHelper.textContent="";
        return true;
    }
}

function checkConfirmPassword(){
    if(conformPassword.value != password.value){
        password.classList.add("border","border-warning");
        confirmPasswordHelper.textContent="Must be Same";
        confirmPasswordHelper.classList.add("text-danger");
        return false;
    }
    else{
        password.classList.remove("border-warning");
        confirmPasswordHelper.textContent="";
        return true;
    }
}

