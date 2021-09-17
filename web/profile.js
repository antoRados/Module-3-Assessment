function favColor() {
    alert('Favorite color is blue!')
}

function favPlace() {
    alert('Favorite place is Ceoatia')
}

function favRitual() {
    alert('Favorite ritual is eating skittles before basketball games')
}
document.querySelector("#color").addEventListener('click', favColor)
document.querySelector("#place").addEventListener('click', favPlace)
document.querySelector("#ritual").addEventListener('click', favRitual)