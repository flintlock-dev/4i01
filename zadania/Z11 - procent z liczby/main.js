document.querySelector("button").addEventListener("click", function() {
    let wartoscInput = document.querySelector("#wartosc");
    let procentInput = document.querySelector("#procent");
    let button = document.querySelector("button");
    let wynik = document.querySelector("#wynik");

    button.addEventListener("click", () => {
        const wartosc = parseFloat(wartoscInput.value);
        const procent = parseFloat(procentInput.value);

        if (isNaN(wartosc) || isNaN(procent)) {
            wynik.innerHTML = "złe liczby :p !";
            return;
        }

        const wynikProcent = (wartosc * procent) / 100;
        wynik.innerHTML = `${procent}% z ${wartosc} = ${wynikProcent}`;
    });
});
