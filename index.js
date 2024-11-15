const okno = document.getElementById('okno');
const img = document.getElementById('img');
const zal = document.getElementById('zal');
const text = document.getElementById('text')

const handler = (event) => {
    okno.style.transform = 'scale(2)'
}

const hanler = (event) => {
    okno.style.transform = 'scale(1)'
}
window.addEventListener("mouseover", handler);
window.addEventListener("mouseout", hanler);