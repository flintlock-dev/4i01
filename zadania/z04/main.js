document.querySelector("button").addEventListener("click", function() {
    let a = parseFloat(document.querySelector("#liczba_a").value);
    let b = parseFloat(document.querySelector("#liczba_b").value);
    let wynik = document.querySelector("#wynik");

    if (isNaN(a) || isNaN(b)) {
        wynik.innerHTML = "<p>Wprowadź poprawne liczby :c</p>";
        return;
    }

    let iloraz = a / b;
    wynik.innerHTML = `<p>Iloraz liczb wynosi: <b>${iloraz.toFixed(2)}</b></p>`;
});
