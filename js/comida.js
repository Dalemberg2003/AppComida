const btn_salir = document.getElementById('icono')
const accion = document.getElementById('accion')
let contador = 0

btn_salir.addEventListener('click', () => {
    if(contador == 0){
        accion.style.display = 'flex'
        contador = 1
    }else{
        accion.style.display = 'none'
        contador = 0
    }
})

const btncarrito = document.getElementById('carrito')

btncarrito.addEventListener('click', () => {
    alert('Esta opcion aun no esta configurada')
})

const btncerrarSesion = document.getElementById('cerrar')

btncerrarSesion.addEventListener('click', () => {
    btncerrarSesion.text = 'Cerrando sesión...'
    setTimeout(cerrarSesion, 3000)
})

const btnFood= document.getElementById('opcion1')
const btnDrink= document.getElementById('opcion2')
const btnSnack= document.getElementById('opcion3')

btnFood.addEventListener('click', () => {
    btnFood.classList.add('active')
    btnDrink.classList.remove('active')
    btnSnack.classList.remove('active')
})
btnDrink.addEventListener('click', () => {
    btnDrink.classList.add('active')
    btnFood.classList.remove('active')
    btnSnack.classList.remove('active')
})
btnSnack.addEventListener('click', () => {
    btnSnack.classList.add('active')
    btnFood.classList.remove('active')
    btnDrink.classList.remove('active')
})

const carta = document.getElementById('carta')
carta.addEventListener('click', () => {
    alert('Aun no se pueden agregar comidas al carrito')
})

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

btn1.addEventListener('click', () => {
    btn1.classList.add('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
})
btn2.addEventListener('click', () => {
    btn2.classList.add('active')
    btn1.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
})
btn3.addEventListener('click', () => {
    btn3.classList.add('active')
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    btn4.classList.remove('active')
})
btn4.addEventListener('click', () => {
    btn4.classList.add('active')
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    btn3.classList.remove('active')
})
function cerrarSesion(){
    btncerrarSesion.href = 'login.html'
    btncerrarSesion.click()
}


