const div = document.querySelector('#data');
let pokazanadata = true;
function pokazdate() {
    if (pokazanadata) {
        const dzisiaj = new Date();
        div.innerHTML = dzisiaj.toLocaleString();
        pokazanadata = false;
    }
    else { div.innerHTML = "Data już była :p";}
}
function wyczyscpole() {
    div.innerHTML = " ";
}
div.addEventListener('mouseover', pokazdate);
div.addEventListener('mouseleave', wyczyscpole);