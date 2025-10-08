document.querySelector("button").addEventListener("click", function() {
    let c = parseFloat(document.querySelector("#celciusz").value);
    let wynik = document.querySelector("#wynik");

    if (isNaN(c)) {
        wynik.innerHTML = "<p>Wprowadź poprawną liczbę :c</p>";
        return;
    }

    let kelwin = c + 273.15;
    let fahrenheit = (c * 9/5) + 32;

    wynik.innerHTML = `
        <p>Temperatura w Kelvinach: <b>${kelwin.toFixed(2)} K</b></p>
        <p>Temperatura w Fahrenheitach: <b>${fahrenheit.toFixed(2)} °F</b></p>
    `;
});
