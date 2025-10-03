let licznik = document.querySelector("#licznik");
let mianownik = document.querySelector("#mianownik");
let wynik = document.querySelector("#wynik");
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let l = parseInt(licznik.value);
    let m = parseInt(mianownik.value);

    if(m == 0){
        wynik.innerHTML = "nie dzieli sie przez zero :p ";
    } else {
        let cal = Math.floor(l/m);
        let reszta = l % m;
        wynik.innerHTML = "wynik: " + cal + " i " + reszta + "/" + m;
    }
});
