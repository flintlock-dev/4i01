document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("imie");
    const button = document.querySelector("button");
    const wynik = document.getElementById("wynik");

    button.addEventListener("click", () => {
        const dane = input.value.trim();

        if (!dane || !dane.includes(" ")) {
            wynik.innerHTML = "Podaj imeie i nazwisko oddzielone spacją :p !";
            return;
        }

        const [imieRaw, nazwiskoRaw] = dane.split(" ");
        const imie = imieRaw.charAt(0).toUpperCase() + imieRaw.slice(1).toLowerCase();
        const nazwisko = nazwiskoRaw.charAt(0).toUpperCase() + nazwiskoRaw.slice(1).toLowerCase();

        wynik.innerHTML = `Twoje imię i nazwisko to: ${imie} ${nazwisko} :3 .`;
    });
});
