let fmessage = document.querySelector('.form__fmessage');
let lmessage = document.querySelector('.form__lmessage');
let emessage = document.querySelector('.form__emessage');
let pmessage = document.querySelector('.form__pmessage');
let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let email_id = document.querySelector('#email')
let password_id = document.querySelector('#password')
let btn = document.querySelector('.btn');
let regex = /[\w]+/;
let em = /[@]/;

btn.addEventListener('click',check);
function check(e){
    e.preventDefault();
    
    // for first name
    let firstNameValue = firstName.value;
    if(!regex.test(firstNameValue)){
        fname.style.visibility = 'visible';
        fmessage.innerHTML = 'First Name cannot be empty';
    }else{
        fname.style.visibility = 'hidden';
        fmessage.innerHTML = '';
    }
    // for last name
    if(!regex.test(lastName.value)){
        lname.style.visibility = 'visible';
        lmessage.innerHTML = 'Last Name cannot be empty';
    }else{
        lname.style.visibility = 'hidden';
        lmessage.innerHTML = '';
    }
    // for email
    if(!em.test(email_id.value)){
        email.style.visibility = 'visible';
        emessage.innerHTML = 'Looks like this is not an email';
    }else{
        email.style.visibility = 'hidden';
        emessage.innerHTML = '';
    }
    // for password
    if(!regex.test(password_id.value)){
        password.style.visibility = 'visible';
        pmessage.innerHTML = 'Password cannot be empty';
    }else{
        password.style.visibility = 'hidden';
        pmessage.innerHTML = '';
    }
}