let liczba_a = document.querySelector("#liczba_a");
let liczba_b = document.querySelector("#liczba_b");
let wynik = document.querySelector("#wynik");
let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let a = parseInt(liczba_a.value);
    let b = parseInt(liczba_b.value);

    if(isNaN(a) || isNaN(b)){
        wynik.innerHTML = "podaj liczby całkowite";
    } else if(b == 0){
        wynik.innerHTML = "nie można dzielić przez 0";
    } else {
        let c = a / b;
        wynik.innerHTML = "Wynik dzielenia: " + c;
    }
});
