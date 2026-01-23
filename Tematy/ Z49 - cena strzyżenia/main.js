const radios = document.querySelectorAll('input[type="radio"]');
const cena = document.querySelector("#cena");
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    for (const radio of radios) {
        if (radio.checked) {
            cena.innerHTML = radio.value;

        }
    }

})