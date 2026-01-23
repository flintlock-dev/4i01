document.querySelector("button").addEventListener("click", function() {
    const ocena = document.getElementById("numer")
    const data = document.getElementById("data")
   const kolor = document.getElementById("kolor")
    let wynik = document.querySelector("#wynik");

    btn.addEventListener("click", () => {
        let Ocena = ocena.value;
        let Data = data.value
        let Kolor = kolor.value;

wynik.innerHTML = `ocena klienta: ${Ocena}/15 <br> Data wykonania usługi: ${Data} <br> <p style="color:${Kolor}"> ocena kolorem </p> `
    })
});