document.querySelector("button").addEventListener("click", function() {
    let a = parseFloat(document.querySelector("#liczba_a").value);
    let b = parseFloat(document.querySelector("#liczba_b").value);
    let c = parseFloat(document.querySelector("#liczba_c").value);
    let wynik = document.querySelector("#wynik");

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        wynik.innerHTML = "<p>Wprowadź poprawne liczby :c</p>";
        return;
    }
    let p = (a + b + c) / 2;
    let pole = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    wynik.innerHTML = `<p>Pole trójkąta wynosi: <b>${pole.toFixed(2)}</b></p>`;
});
