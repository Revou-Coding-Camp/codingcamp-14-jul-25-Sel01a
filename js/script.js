console.log('Javascript is Working');
showWelcomPopup();

function showWelcomPopup() {
    let userName = prompt ("Please enter your name:");
    if (userName !=''){
        document.getElementById('welcome-user').innerHTML = userName;
        
    }
}
function validateForm() {
    const name = document.getElementById('name-inputt').value;
    const tgl = document.getElementById('tgllahir').value;
    const msg = document.getElementById('message').value;
    const genderRadios = document.getElementsByName('jeniskelamin');
    let gender = '';
    for (const radio of genderRadios) {
        if (radio.checked) {
            gender = radio.value;
            break;
        }
    }

    if (!name || !tgl || !gender || !msg) {
        alert('Silakan lengkapi semua field.');
        return;
    }

    const output = `
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${tgl}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${msg}</p>
    `;

    document.getElementById('message-output').innerHTML = output;
}