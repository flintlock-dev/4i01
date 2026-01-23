const form = document.querySelector('#form');
const imie = document.querySelector('#name');
const dataur = document.querySelector('#data');
const regulamin = document.querySelector('#regulamin');
const newsletter = document.querySelector('#newsletter');

const walidacja = document.querySelector('#walidacja');

form.addEventListener('submit', (e) => {
    e.preventDefault();


    let poprawny = true;

    const nameValue = imie.value.trim();
    if (nameValue === "") {
        alert("Imię i nazwisko nie może być puste")
        poprawny = false;
    } else if (nameValue.split(" ").length < 2) {
        alert("Podaj imię i nazwisko ZE SPACJĄ ")
        poprawny = false;
    }

    const dateValue = dataur.value;
    if (dateValue === "") {
        alert("Data urodzenia nie może być pusta!!!")
        poprawny = false;
    } else {
        const date = new Date(dateValue);
        const [y, m, d] = dateValue.split("-");

        if (
            date.getFullYear() != y ||
            date.getMonth() + 1 != m ||
            date.getDate() != d
        ) {
           alert("Niepoprawna data")
            poprawny = false;
        }
    }

    if (!regulamin.checked) {
       alert("Musisz zaakceptować regulamin")
        poprawny = false;
    }
    if (poprawny) {
        walidacja.innerHTML = `
            <h3>Dane wprowadzone przez użytkownika:</h3>
            Imię i nazwisko: ${nameValue}<br>
            Data urodzenia: ${dateValue}<br>
            Newsletter: ${newsletter.checked ? "Tak" : "Nie"}
        `;
    }
});
