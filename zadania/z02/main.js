const liczba_a = document.querySelector("#liczba_a");
const liczba_b = document.querySelector("#liczba_b")
const liczba_c = document.querySelector("#liczba_c");
const liczba_d = document.querySelector("#liczba_d");

const wynik = document.querySelector("#wynik");
const btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let a = parseFloat(liczba_a.value);
    let b = parseFloat(liczba_b.value);
    let c = parseFloat(liczba_c.value);
    let d = parseFloat(liczba_d.value);

    let suma = a+b+c+d;
    let srednia = suma/4;
    wynik.innerHTML =
        `
        a = <b>${a}</b><br>
        b = <b>${b}</b><br>
        c = <b>${c}</b><br>
        d = <b>${d}</b><br>
        suma liczb = <b>${suma}</b><br>
        srednia = <b>${srednia}</b><br>
        `
})