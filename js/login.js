let loginForm = document.querySelector('#loginForm')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    let Users = JSON.parse(localStorage.getItem('users')) || []
    let validUser = Users.find(user => user.email === email && user.password === password)

    if(!validUser){
        Swal.fire({
            icon: 'error',
            title: 'Error de Datos',
            text: 'El usuario y/o contraseña son incorrectos'
        })
        return
    }
    Swal.fire({
        icon: 'success',
        title: 'Inicio de Sesion Exitoso',
        text: `Bienvenido ${validUser.name}`
    })
    window.location.href = 'index.html'})