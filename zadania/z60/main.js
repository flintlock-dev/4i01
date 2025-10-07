const liczba = document.querySelector("#liczba");
const wynik = document.querySelector("#wynik");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    let dzien = parseInt(liczba.value);
    switch (dzien) {
        case 1: wynik.innerHTML = ` ${dzien} : Poniedziałek :c`; break
        case 2: wynik.innerHTML = ` ${dzien} : Wtorek`; break
        case 3: wynik.innerHTML = ` ${dzien} : Środa`; break
        case 4: wynik.innerHTML = ` ${dzien} : Czwartek`; break
        case 5: wynik.innerHTML = ` ${dzien} : Piątek :3`; break
        case 6: wynik.innerHTML = ` ${dzien} : Sobota >_<`; break
        case 7: wynik.innerHTML = ` ${dzien} : Niedziela :p`; break
        default: wynik.innerHTML = ` Ni ma takiego dnia`;

    }
})