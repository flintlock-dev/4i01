let liczba_a = document.querySelector("#liczba_a");
let liczba_b = document.querySelector("#liczba_b");
let liczba_c = document.querySelector("#liczba_c");
let liczba_d = document.querySelector("#liczba_d");
let wynik = document.querySelector("#wynik");
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let a = parseFloat(liczba_a.value);
    let b = parseFloat(liczba_b.value);
    let c = parseFloat(liczba_c.value);
    let d = parseFloat(liczba_d.value);

    if ( isNaN(a) || isNaN(b) ||
        isNaN(c) || isNaN(d)){
        wynik.innerHTML = "Podaj liczby całkowite";
    } else if (!Number.isInteger(a) || !Number.isInteger(b)) {
        wynik.innerHTML = "Podaj liczby całkowite a nie rzeczywiste";
    } else if (b === 0) {
        wynik.innerHTML = "Nie można dzielić przez 0";
    } else {
        let c = a / b;
        wynik.innerHTML = "Wynik dzielenia: " + c;
    }
});
