document.querySelector("button").addEventListener("click", function() {
    let input = document.querySelector("#sekundy");
    let button = document.querySelector("button");
    let wynik = document.querySelector("#wynik");

    button.addEventListener("click", () => {
        const sec = parseInt(input.value);

        if (isNaN(sec) || sec <= 0) {
            wynik.innerHTML = "czas nie może iść do tyłu :p";
            return;
        }

        const godziny = Math.floor(sec / 3600);
        const minuty = Math.floor((sec % 3600) / 60);
        const sekundy = sec % 60;

        wynik.innerHTML = `${godziny}g${minuty}m${sekundy}s`;
    });
});
