const btnEmpezar = document.getElementById('empezar')
const animacionCargar = document.getElementById('cargando')
btnEmpezar.addEventListener('click', () => {
    cargarAnimacion()
    setTimeout(enviarAlLogin, 5000)
})

function cargarAnimacion(){
    animacionCargar.style.display = 'block'
}
function enviarAlLogin(){
    btnEmpezar.href = 'html/login.html'
    btnEmpezar.click()
}