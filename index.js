const generatedPassword=document.getElementById('password');
const allChar ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
const passwordLength=12;

function generateRandomPassword(){
    password='';
    // password += allChar[Math.floor(Math.random() * allChar.length)];
    while(passwordLength>=password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    generatedPassword.value=password;
    console.log(password);
}
function copyPassword(){
    generatedPassword.select();
    document.execCommand('copy');
    alert('Password copied');
   }