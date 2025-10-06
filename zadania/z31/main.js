document.querySelector("button").addEventListener("click", function() {
    let x1 = parseFloat(document.querySelector("#liczba_x1").value);
    let y1 = parseFloat(document.querySelector("#liczba_y1").value);
    let x2 = parseFloat(document.querySelector("#liczba_x2").value);
    let y2 = parseFloat(document.querySelector("#liczba_y2").value);
    let x3 = parseFloat(document.querySelector("#liczba_x3").value);
    let y3 = parseFloat(document.querySelector("#liczba_y3").value);

        let wynik = document.querySelector("#wynik");
    if (
        isNaN(x1) || isNaN(y1) ||
        isNaN(x2) || isNaN(y2) ||
        isNaN(x3) || isNaN(y3)
    ) {
        wynik.innerHTML = "<p>Wprowadź poprawne liczby :c</p>";
        return;
    }
    let pole = Math.abs(
        (x1*(y2 - y3) + x2*(y3 - y1) + x3*(y1 - y2)) / 2
    );

    if (pole === 0) {
        wynik.innerHTML = "<p>Punkty są współliniowe trójkąt nie istnieje :c </p>";
        return;
    }
    wynik.innerHTML = `<p>Pole trójkąta wynosi: <b>${pole}</b></p>`;
});
