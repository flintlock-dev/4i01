const select = document.getElementById('select')
const ilosc = document.getElementById('ilosc')
const papier = document.getElementById('papier')
const button = document.getElementById('dodaj')
const koszyk = document.getElementById('koszyk')
const ile = document.getElementById('suma')
let suma = 0

button.addEventListener('click', () => {
    const Nrobrazu = select.value
    const iletego = parseInt(ilosc.value)
    const cenaPapieru = parseFloat(papier.value)
    if (iletego <= 0) return
    const cena = iletego * cenaPapieru
    suma += cena
    const div = document.createElement('div')
    div.className = 'koszykchb'

    const img = document.createElement('img')
    img.src = Nrobrazu + '.jpg'

    const idk = document.createElement('span')
    idk.innerText = `${iletego} sztuk | ${papier.options[papier.selectedIndex].text} | ${cena.toFixed(2)} zł`

    const usun = document.createElement('button')
    usun.innerText = 'Usuń'
    usun.onclick = () => {
        koszyk.removeChild(div)
        suma -= cena
        ile.innerText = `Suma: ${suma.toFixed(2)} zł`
    }
    div.appendChild(img)
    div.appendChild(idk)
    div.appendChild(usun)
    koszyk.appendChild(div)
    ile.innerText = `Suma: ${suma.toFixed(2)} zł`
})
