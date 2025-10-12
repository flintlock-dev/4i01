document.querySelector("button").addEventListener("click", function() {
    let input = document.querySelector("#x");
    let button = document.querySelector("button");
    let wynik = document.querySelector("#wynik");

    button.addEventListener("click", () => {
        const x = parseFloat(input.value);

        if (isNaN(x)) {
            wynik.innerHTML = "Podaj poprawne liczby :p";
            return;
        }

        const wartosc = (x ** 2) / ((1 + Math.abs(x)) ** 2);
        wynik.innerHTML = `Dla x = ${x}, wynik wynosi: ${wartosc.toFixed(4)}`;
    });
});
