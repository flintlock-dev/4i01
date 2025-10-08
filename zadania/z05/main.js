document.querySelector("button").addEventListener("click", function() {
    let a = parseInt(document.querySelector("#liczba_a").value);
    let b = parseInt(document.querySelector("#liczba_b").value);
    let wynik = document.querySelector("#wynik");

    if (isNaN(a) || isNaN(b)) {
        wynik.innerHTML = "<p>Wprowadź poprawne liczby całkowite :c</p>";
        return;
    }

    let suma = a + b;
    let roznica = a - b;
    let iloczyn = a * b;
    let iloraz = a / b;
    let reszta = a % b;
    let potega = a ** b;

    wynik.innerHTML = `
        <p>Suma: <b>${suma}</b></p>
        <p>Różnica: <b>${roznica}</b></p>
        <p>Iloczyn: <b>${iloczyn}</b></p>
        <p>Iloraz całkowity: <b>${iloraz}</b></p>
        <p>Reszta z dzielenia: <b>${reszta}</b></p>
        <p>Potęga: <b>${potega}</b></p>
    `;
});
