document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector("button");
    const wynik = document.getElementById("wynik");

    button.addEventListener("click", () => {
        let A = parseFloat(document.getElementById("liczba_a").value);
        let B = parseFloat(document.getElementById("liczba_b").value);

        let I, Y;

        if (A <= 0 && B <= 0) {
            I = 1; Y = 0;
        } else if (A <= 0 && B >= 0) {
            I = 2; Y = 1;
        } else if (A > 0 && B <= 0) {
            I = 3; Y = 2;
        } else {
            I = 4; Y = 3;
        }

        wynik.innerHTML = `
            <p>I = ${I}</p>
            <p>Y = ${Y}</p>
        `;
    });
});
