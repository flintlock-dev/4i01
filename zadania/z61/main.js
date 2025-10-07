const liczba = document.querySelector("#liczba");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    let dzien = parseInt(liczba.value);
    switch (dzien) {
        case 1: wynik.innerHTML = ` ${dzien} : Styczeń`; break
        case 2: wynik.innerHTML = ` ${dzien} : Luty`; break
        case 3: wynik.innerHTML = ` ${dzien} : Marzec`; break
        case 4: wynik.innerHTML = ` ${dzien} : Kwiecień`; break
        case 5: wynik.innerHTML = ` ${dzien} : Maj`; break
        case 6: wynik.innerHTML = ` ${dzien} : Czerwiec`; break
        case 7: wynik.innerHTML = ` ${dzien} : Lipiec :p`; break
        case 8: wynik.innerHTML = ` ${dzien} : Sierpień`; break
        case 9: wynik.innerHTML = ` ${dzien} : Wrzesień`; break
        case 10: wynik.innerHTML = ` ${dzien} : Październik`; break
        case 11: wynik.innerHTML = ` ${dzien} : Listopad`; break
        case 12: wynik.innerHTML = ` ${dzien} : Grudzień :3`; break
        default: wynik.innerHTML = ` Ni ma takiego miesiąca`;

    }
})