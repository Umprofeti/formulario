
const form: HTMLFormElement = document.querySelector('#form');
const error: HTMLUListElement = document.querySelector('#err');
const respuesta:HTMLUListElement = document.querySelector('#res');
const inputNombre: HTMLInputElement = document.querySelector('#nombre');
const inputApellido: HTMLInputElement = document.querySelector('#apellido');
const inputCorreo: HTMLInputElement = document.querySelector('#correoElectronico');
const inputCelular: HTMLInputElement = document.querySelector('#celular');
const inputIg: HTMLInputElement = document.querySelector('#ig');
const bottonGuardar: HTMLButtonElement = document.querySelector('#send');
const terminos = <HTMLInputElement> document.getElementById('term');



const enviarFormulario = ():void => {
    const emailRegExp:RegExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    const celRegExp: RegExp = /(.+[0-9+])([0-9]+)-([0-9]+)$/
    const nameRegExp: RegExp = /[ a-zA-Z+]/
    let err: string[] = [];
    let res :string[] =[];


    if(inputNombre.value === ''){
        err.push('El nombre es obligatorio');
    }else{
        if(/[/<>"":;()+]/.test(inputNombre.value)){
            err.push('ERROR, Nombre invalido');
        }else{
            if(nameRegExp.test(inputNombre.value)){
                if(inputApellido.value === ''){
                    err.push('El apellido es obligatorio');
                }else{
                    if(/[/<>"":;()+]/.test(inputApellido.value)){
                        err.push('ERROR, Apellido invalido');
                    }else{
                        if(nameRegExp.test(inputApellido.value)){
                            if(inputCorreo.value === ''){
                                err.push('El correo es obligatorio');
                            }else{
                                if(emailRegExp.test(inputCorreo.value)){
                                    if(inputCelular.value === ''){
                                        err.push('El whatsapp es obligatorio');
                                    }else{
                                        if(/[/<>"":;()a-zA-z]/.test(inputCelular.value)){
                                            err.push('ERROR, Whatsapp invalido');
                                        }else{
                                            if(celRegExp.test(inputCelular.value)){
                                                if(inputIg.value === ''){
                                                    err.push('Porfavor coloca tu Instagram');
                                                }else{
                                                    if(/[ / <> "" : ;()+]/.test(inputIg.value)){
                                                        err.push('ERROR, Instagram invalido');
                                                    }else{
                                                        if(nameRegExp.test(inputIg.value)){
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }else{
                                    err.push('ERROR, Correo Invalido');
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    

    if(terminos.checked == false){
        err.push('Acepta los terminos y condiciones');
    }else{

    }

    
    const enviar_datos= new FormData(form);
    if(err.length == 0){
        fetch('./emailsphp/datos.php',{
            method:'POST',
            body: enviar_datos
        })
        respuesta.className="alert alert-success";
        res.push('Datos enviados correctamente');
        imprimirRes(res)
        form.reset();
    }else{
        error.className="alert alert-danger";
        imprimirErr(err);
    }
}

const imprimirErr = (err):void =>{

    error.textContent = ''

    err.forEach( mensaje => {
        let newLI = document.createElement('li');
        newLI.textContent = mensaje
        error.appendChild(newLI)
        
    });

    

}



const imprimirRes = (res):void =>{

    respuesta.textContent = ''

    res.forEach(mensaje => {
        let newLI = document.createElement('li');
        newLI.textContent = mensaje
        respuesta.appendChild(newLI)
    });


}

form.addEventListener('submit', (e):void => {
    e.preventDefault()
    enviarFormulario();
});