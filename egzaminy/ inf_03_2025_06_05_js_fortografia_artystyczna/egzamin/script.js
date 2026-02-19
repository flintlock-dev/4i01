const przycisk = document.getElementById("koszyk");

przycisk.onclick = function () {

    let plik = document.getElementById("plik");
   let ilosc = document.getElementById("ilosc").value;
    let papier = document.querySelector('input[name="papier"]:checked').value;
   let wynik = document.getElementById("wynik");

    let cena = 0;

    if (papier === "blyszczacy") {
        cena = ilosc * 1.5;
    } else {
        cena = ilosc * 2;
    }

    if (plik.files.length > 0 && ilosc > 0) {

        let obraz = document.createElement("img");
        obraz.src = plik.files[0].name;
        obraz.alt = "zamowiony obraz";

        let p1 = document.createElement("p");
        p1.innerHTML = "Liczba kopii: " + ilosc;

        let p2 = document.createElement("p");
        p2.innerHTML = "Cena: " + cena + " zł";

        wynik.appendChild(obraz);
        wynik.appendChild(p1);
        wynik.appendChild(p2);
    }
}