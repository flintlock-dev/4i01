const obrazek = document.querySelector('#obrazek');
const kolor = document.querySelector('#kolor');
const grubosc = document.querySelector('#grubosc');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const Kolor = kolor.value;
    const Grubosc = grubosc.value;

    obrazek.style.border = `${Grubosc}px solid ${Kolor}`;
    obrazek.style.boxShadow = `0 0 10px ${Kolor}`;
});
