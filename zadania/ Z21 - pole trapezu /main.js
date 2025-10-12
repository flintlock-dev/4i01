document.querySelector("button").addEventListener("click", function() {
    let inputA = document.querySelector("#a");
    let inputB = document.querySelector("#b");
    let inputH = document.querySelector("#h");
    let button = document.querySelector("button");
    let wynik = document.querySelector("#wynik");

    button.addEventListener("click", () => {
        const a = parseFloat(inputA.value);
        const b = parseFloat(inputB.value);
        const h = parseFloat(inputH.value);

        if (isNaN(a) || isNaN(b) || isNaN(h) || h <= 0) {
            wynik.textContent = "Podaj poprawne liczby (a, b i h > 0)!";
            return;
        }

        const pole = ((a + b) * h) / 2;
        wynik.textContent = `Pole trapezu wynosi: ${pole.toFixed(2)}`;
    });
});
