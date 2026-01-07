function rysujRamke(a, b) {
    let wynik = "";

    for (let i = 1; i <= b; i++) {
        for (let j = 1; j <= a; j++) {
            if (i === 1 || i === b) {
                wynik += "|";
            }
            else if (j === 1 || j === a) {
                wynik += "|";
            }
            else {
                wynik += " ";
            }
        }
        wynik += "\n";
    }

    return wynik;
}
function rysuj() {
    const a = parseInt(document.getElementById("wielkoscA").value);
    const b = parseInt(document.getElementById("wielkoscB").value);

    if (a < 2 || b < 2) {
        alert("Wymiary muszą być większe od 2");
        return;
    }

    let output = document.getElementById("output");
    output.textContent = rysujRamke(a, b);
}
document.querySelector("button").addEventListener("click", rysuj);
