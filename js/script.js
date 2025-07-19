console.log('Javascript is Working');
showWelcomPopup();

function showWelcomPopup() {
    let userName = prompt ("Please enter your name:");
    if (userName !=''){
        document.getElementById('welcome-user').innerHTML = userName;
        
    }
}
function validateForm() {
    const nameInput = document.getElementById('name-inputt');
    console.log(nameInput.value);
    if (nameInput.value === ''){
        alert('Please enter your name.');
    } else {
        document.getElementById('message-output').innerHTML = `Thank You, ${nameInput.value}, for your message!`;
        nameInput.value ='';
    }
}