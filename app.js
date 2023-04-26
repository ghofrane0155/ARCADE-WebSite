const sign_in_btn=document.querySelector('#sign-in-button');
const sign_up_btn=document.querySelector('#sign-up-button');
const container=document.querySelector('.container-login');

sign_up_btn.addEventListener('click', () =>{
    container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove('sign-up-mode');
});
/************************************************************* */
var mail=/^([a-z\d\.-]+)@([a-z\d]+)\.([a-z]{2-3})$/;/*letters,numbers,dots,hyphens@letters,numbers,hyphens+.+3letters*/
var nb=/^\d{8}$/;/*contient 8 chiffres seulement*/
var nom=/^[A-Z]+([a-z])+$/;/*commence par un majus+minus*/
var users=/^[a-z\d]{5,12}$/;
    
function verif_signin()
{
    var user=document.getElementById('user').value;
    var pass=document.getElementById('pass').value;
    
    var error1=document.getElementById('erroru');
    var error2=document.getElementById('errorp');
    
    if(user== "") {
        error1.innerHTML = '<p style="color:red">Veuillez entrer votre Username!</p>';
     }
     else if(!user.match(users)){
        error1.innerHTML = '<p style="color:red">Username must be  and contain 5 - 12 characters</p>';
     }
     else{
        error1.innerHTML = "";
    }

    if(pass== "") {
        error2.innerHTML = '<p style="color:red">Veuillez entrer votre Password!</p>';
     }
     else if(!pass.match(mdp)){
        error2.innerHTML = '<p style="color:red">Password must(alphanumeric @ _ -)and be 8-20 characters</p>';
     }
     else{
        error2.innerHTML = "";
    }
}
function verif_signup(){
    var user=document.getElementById('username').value;
    var email=document.getElementById('email').value;
    var pass=document.getElementById('password').value;
    
    var error1=document.getElementById('erroruup');
    var error2=document.getElementById('erroreup');
    var error3=document.getElementById('errorpup');
    
    if(user== "") {
        error1.innerHTML = '<p style="color:red">Veuillez entrer votre Username!</p>';
     }
     else if(!user.match(users)){
        error1.innerHTML = '<p style="color:red">Username must be  and contain 5 - 12 characters</p>';
     }
     else{
        error1.innerHTML = "";
    }

    if(email== "") {
        error2.innerHTML = '<p style="color:red">Veuillez entrer votre Email!</p>';
     }
     else if(!email.match(mail)){
        error2.innerHTML = '<p style="color:red">Email must be a valid address, e.g. me@mydomain.com</p>';
     }
     else{
        error2.innerHTML = "";
    }

    if(pass== "") {
        error3.innerHTML = '<p style="color:red">Veuillez entrer votre Password!</p>';
     }
     else if(!pass.match(mdp)){
        error3.innerHTML = '<p style="color:red">Password must(alphanumeric,@,_,-)and be 8-20 characters</p>';
     }
     else{
        error3.innerHTML = "";
    }

}
/*************nour******************** */
function verif()                                    
{ 
    var name = document.forms["myForm"]["name"];              
    var email = document.forms["myForm"]["email"];    
    var message = document.forms["myForm"]["Message"]; 
    var phone = document.forms["myForm"]["phone"]; 
    
    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="you need to enter your Name!";  
        name.focus();  
    }
        else if(!name.value.match(nom)){
            document.getElementById('errorname').innerHTML="you need to enter a valid Name!";  
            name.focus();  
        }
            else
            {
                document.getElementById('errorname').innerHTML="";   }
    
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="you need to enter your E-mail!"; 
        email.focus(); 
    }
        else if(!email.value.match(mail)){
            document.getElementById('erroremail').innerHTML="you need to enter a valid E-mail!";  
            email.focus();  
        }
        else{
                document.getElementById('erroremail').innerHTML="";  
        }
   
    
    if (message.value == "")                           
    {
        document.getElementById('errormsg').innerHTML="you need to enter a valid msg!"; 
        message.focus(); 
    }else{
    		document.getElementById('errormsg').innerHTML="";  
    }
   
    if (phone.value == "")                                   
    { 
        document.getElementById('errornumber').innerHTML="you need to enter your Number!"; 
        email.focus(); 
    }
        else if(!phone.value.match(nb)){
            document.getElementById('errornumber').innerHTML="you need to enter a valid Number!";  
            phone.focus();  
        }
        else{
                document.getElementById('errornumber').innerHTML="";  
        }
}

function validateForm(e) {
    e.preventDefault();
    verif();
}
/************************RESRVATION********************************************* */
function envoyer() {

    var nameR = document.getElementById('nom').value;
    var numero = document.getElementById('numero').value;
    var ddn = document.getElementById('ddn').value;
   
    var errorN = document.getElementById('errorNR');
    var errornumero = document.getElementById('errorNUM');
    var errordd = document.getElementById('errorddn');

    var dateNow = new Date();
    if (nameR == "") {
        errorN.innerHTML = "you need to enter your name!";
    }
    else if (!(nameR.match(nom) )) {
        errorN.innerHTML = "you need to enter a valid name!";
    } else {
        errorN.innerHTML = "";
    }

    if (numero == "") {
        errornumero.innerHTML = "enter your phonenumber!";

    }
    else if (!(numero.match(nb))) {
        errornumero.innerHTML = "enter a valid phonenumber!";
    }
    else {
        errornumero.innerHTML = "";
    }
    

    if (ddn == "") {
        errordd.innerHTML = "Veuillez choisir une date!";
    }
    else if (new Date(ddn).toLocaleString() < dateNow.toLocaleString()) {
        errordd.innerHTML = "La date de reservation doit être supérieur à la date actuelle";
    }
    else {
        errordd.innerHTML = "";
    }
}
