const btnlogin = document.getElementById('login') 
const btnsignup = document.getElementById('signup')
const btnrecuperar = document.getElementById('recuperar')
const btningresar = document.getElementById('ingresar')
let validar = 0
btnlogin.addEventListener('click', () => {
        btnsignup.classList.remove('active')
        btnlogin.classList.add('active')
        btnrecuperar.style.display = 'block'
        btningresar.text = 'Login'
        validar = 0
})
btnsignup.addEventListener('click', () => {
        btnlogin.classList.remove('active')
        btnsignup.classList.add('active')
        btnrecuperar.style.display = 'none'
        btningresar.text = 'Sign-up'
        validar = 1
})

btnrecuperar.addEventListener('click', () => {
    alert('Esta opcion aún no esta configurada')
})

btningresar.addEventListener('click', () => {
    let email = document.getElementById('email')
    let pass = document.getElementById('pass')

    if(validar === 0){
        if(email.value === '' || pass.value === ''){
            alert('Debe ingresar su email y contraseña')
        }else{
            btningresar.text = 'Cargando...'
            setTimeout(enviarAComida, 3000)
        }
    }else if(validar === 1){
        if(email.value === '' || pass.value === ''){
            alert('Debe ingresar un email y contraseña')
        }else{
            btningresar.text = 'Cargando...'
            setTimeout(enviarAComida, 3000)
        }
    }    
})

function enviarAComida(){
    btningresar.href = 'comida.html'
    btningresar.click()
}