document.querySelector("button").addEventListener("click", function() {
    let input = document.querySelector("#x");
    let button = document.querySelector("button");
    let wynik = document.querySelector("#wynik");

    button.addEventListener("click", () => {
        const stopnie = parseFloat(input.value);

        if (isNaN(stopnie)) {
            wynik.innerHTML = "zła wartość :p !";
            return;
        }

        const radiany = stopnie * (Math.PI / 180);
        wynik.innerHTML = `${stopnie}° = ${radiany} rad`;
    });
});
