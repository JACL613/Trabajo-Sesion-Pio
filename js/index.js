let user = JSON.parse(localStorage.getItem('login_success')) || false

if(!user) {
    Swal.fire({
        icon: 'info',
        title: 'Iniciar Sesion',
        text: 'Debes iniciar sesión para acceder a esta página',
        confirmButtonText: 'Ir a Iniciar Sesión',
        showCancelButton: false,
        allowOutsideClick: false
    }).then((result) => {
        if(result.isConfirmed){
            window.location.href = 'login.html'
        }
    });
}

let logout = document.querySelector('#logout')
logout.addEventListener('click' , () => {
    Swal.fire({
        icon: 'info',
        title: 'Cerrar Sesión',
        text: '¿Estás seguro de que quieres cerrar sesión?',
        showCancelButton: true,
        confirmButtonText: 'Si, cerrar sesión',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            localStorage.removeItem('login_success');
            Swal.fire({
                icon: 'success',
                title: 'Sesión Cerrada',
                text: 'Tu sesión ha sido cerrada correctamente.',
                confirmButtonText: 'Ok'
            }).then(() => {
                window.location.href = 'login.html';
            });
        }
    });
});