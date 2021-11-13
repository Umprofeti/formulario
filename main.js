var form = document.querySelector('#form');
var error = document.querySelector('#err');
var respuesta = document.querySelector('#res');
var inputNombre = document.querySelector('#nombre');
var inputApellido = document.querySelector('#apellido');
var inputCorreo = document.querySelector('#correoElectronico');
var inputCelular = document.querySelector('#celular');
var inputIg = document.querySelector('#ig');
var bottonGuardar = document.querySelector('#send');
var terminos = document.getElementById('term');
var enviarFormulario = function () {
    var emailRegExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var celRegExp = /(.+[0-9+])([0-9]+)-([0-9]+)$/;
    var nameRegExp = /[ a-zA-Z+]/;
    var err = [];
    var res = [];
    if (inputNombre.value === '') {
        err.push('El nombre es obligatorio');
    }
    else {
        if (/[/<>"":;()+]/.test(inputNombre.value)) {
            err.push('ERROR, Nombre invalido');
        }
        else {
            if (nameRegExp.test(inputNombre.value)) {
                if (inputApellido.value === '') {
                    err.push('El apellido es obligatorio');
                }
                else {
                    if (/[/<>"":;()+]/.test(inputApellido.value)) {
                        err.push('ERROR, Apellido invalido');
                    }
                    else {
                        if (nameRegExp.test(inputApellido.value)) {
                            if (inputCorreo.value === '') {
                                err.push('El correo es obligatorio');
                            }
                            else {
                                if (emailRegExp.test(inputCorreo.value)) {
                                    if (inputCelular.value === '') {
                                        err.push('El whatsapp es obligatorio');
                                    }
                                    else {
                                        if (/[/<>"":;()a-zA-z]/.test(inputCelular.value)) {
                                            err.push('ERROR, Whatsapp invalido');
                                        }
                                        else {
                                            if (celRegExp.test(inputCelular.value)) {
                                                if (inputIg.value === '') {
                                                    err.push('Porfavor coloca tu Instagram');
                                                }
                                                else {
                                                    if (/[ / <> "" : ;()+]/.test(inputIg.value)) {
                                                        err.push('ERROR, Instagram invalido');
                                                    }
                                                    else {
                                                        if (nameRegExp.test(inputIg.value)) {
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                else {
                                    err.push('ERROR, Correo Invalido');
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (terminos.checked == false) {
        err.push('Acepta los terminos y condiciones');
    }
    else {
    }
    var enviar_datos = new FormData(form);
    if (err.length == 0) {
        fetch('./emailsphp/datos.php', {
            method: 'POST',
            body: enviar_datos
        });
        respuesta.className = "alert alert-success";
        res.push('Datos enviados correctamente');
        imprimirRes(res);
        form.reset();
    }
    else {
        error.className = "alert alert-danger";
        imprimirErr(err);
    }
};
var imprimirErr = function (err) {
    error.textContent = '';
    err.forEach(function (mensaje) {
        var newLI = document.createElement('li');
        newLI.textContent = mensaje;
        error.appendChild(newLI);
    });
};
var imprimirRes = function (res) {
    respuesta.textContent = '';
    res.forEach(function (mensaje) {
        var newLI = document.createElement('li');
        newLI.textContent = mensaje;
        respuesta.appendChild(newLI);
    });
};
form.addEventListener('submit', function (e) {
    e.preventDefault();
    enviarFormulario();
});
