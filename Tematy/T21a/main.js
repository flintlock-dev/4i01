let input = document.querySelector("#liczba");
let button = document.querySelector("button");
let wynik = document.querySelector("#wynik");

    button.addEventListener("click", () => {
        const liczba = parseInt(input.value);
        let output = "";

        if (isNaN(liczba)) {
            wynik.innerHTML = "zla liczba :p!";
            return;
        }

        for (let i = 1; i <= 30; i++) {
            output += i + " ";
            if (i === liczba) break;
        }

        wynik.innerHTML = output.trim();
});