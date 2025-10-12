document.querySelector("button").addEventListener("click", function() {
    let input = document.querySelector("#wartosc");
    let button = document.querySelector("button");
    let wynik = document.querySelector("#wynik");

    button.addEventListener("click", () => {
        let liczba = parseFloat(input.value);

        if (isNaN(liczba)) {
            wynik.innerHTML = "Podałeś złą liczbe :p !";
            return;
        }
        liczba = Math.floor(liczba);

        const kwadrat = liczba ** 2;
        const szescian = liczba ** 3;

        wynik.innerHTML = `Dla liczby ${liczba}: kwadrat = ${kwadrat}, sześcian = ${szescian}`;
    });
});
