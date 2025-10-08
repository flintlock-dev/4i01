document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const wynik = document.getElementById("wynik");

    button.addEventListener("click", () => {
        // Pobranie wartości z pól tekstowych
        const a = parseFloat(document.getElementById("liczba_a").value);
        const b = parseFloat(document.getElementById("liczba_b").value);
        const c = parseFloat(document.getElementById("liczba_c").value);
        const d = parseFloat(document.getElementById("liczba_d").value);

        // Sprawdzenie poprawności danych
        if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
            wynik.innerHTML = "<p style='color:red;'>Błąd: wprowadź cztery poprawne liczby rzeczywiste.</p>";
            return;
        }


        const sredniaGeom = Math.pow(a * b * c * d, 1 / 4);

        wynik.innerHTML = `
      <h3>Wynik:</h3>
      <p>Średnia geometryczna (dokładna): <strong>${sredniaGeom}</strong></p>
      <p>Średnia geometryczna (zaokrąglona do 3 miejsc): <strong>${sredniaGeom.toFixed(3)}</strong></p>
    `;
    });
});
