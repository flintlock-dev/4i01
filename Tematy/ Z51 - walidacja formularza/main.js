const imie = document.querySelector('#name');
const mail = document.querySelector('#email');
const pass = document.querySelector('#haslo');
const passp = document.querySelector('#haslop');
const walidacja = document.querySelector('#walidacja');
const zapisz = document.querySelector('#zapisz');

zapisz.addEventListener('click', () => {

    if (imie.value.trim() === "") {
        alert("Nazwa użytkownika nie może być pusta");
        return;
    }
    const mailRegex = /^[a-zA-Z0-9._%+-]+@zspglogow\.pl$/;
    if (!mailRegex.test(mail.value)) {
        alert("Email musi być z domeny zspglogow.pl");
        return;
    }
    const hasloRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
    if (!hasloRegex.test(pass.value)) {
        alert("Hasło musi mieć min. 8 znaków, małe i duże litery, cyfrę i znak specjalny");
        return;
    }
    if (pass.value !== passp.value) {
        alert("Hasła nie są takie same");
        return;
    }
    walidacja.innerHTML = `
        <h3>Dane wprowadzone przez użytkownika:</h3>
        Nazwa użytkownika: ${imie.value}<br>
        Email: ${mail.value}<br>
        Hasło: ${pass.value}
    `;
});
