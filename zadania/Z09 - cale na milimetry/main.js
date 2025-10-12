document.querySelector("button").addEventListener("click", function() {
    let input = document.querySelector("#cale");
    let button = document.querySelector("button");
    let wynik = document.querySelector("#wynik");
    button.addEventListener("click", () => {
        const cale = parseFloat(input.value);

        if (isNaN(cale) || cale < 0) {
            wynik.innerHTML = "długość musi być dodatnia";
            return;
        }

        const milimetry = cale * 25.3995;
        wynik.innerHTML = `${cale} cali = ${milimetry} mm`;
    });
});
