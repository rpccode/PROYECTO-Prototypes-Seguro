//constructor
function  Seguro(marca,year,tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

function UI() {}

//llena las opciones de los años
UI.prototype.llenarOpciones = ()    => {
    const max = new Date().getFullYear(),
            min = max -20;

            const selecYear = document.querySelector('#year');

            for (let i = max; i > min; i--)  {
                
                const option = document.createElement('option');
                option.value = i;
                option.textContent =i;

                selecYear.appendChild(option);
                
            }
}

//mostral alerta en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo)=>{

    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }
    div.classList.add('mensaje','mt-10');
    div.textContent = mensaje;

    //insertar en html
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout(() => {
            div.remove();
    }, 2000);

}   

//intanciar UI

const ui = new UI();






//event
document.addEventListener("DOMContentLoaded", () => {
        ui.llenarOpciones();//llena las opciones de años
})

enventListener();
function enventListener(){
        //variable
const formulario = document.querySelector('#cotizar-seguro');
formulario.addEventListener('submit', cotizarSeguro);
}


//funciones

function cotizarSeguro(e){
            e.preventDefault();

            //leer la marca seleccionada
            const marca = document.querySelector('#marca').value;
           


            //leer el year seleccionado
            const year = document.querySelector('#year').value;
            

            //leer el tipo seleccionado
            const tipo = document.querySelector('input[name="tipo"]:checked').value;
         


            if (marca === '' ||  year === '' || tipo === '' ) {
               ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
               return;
            }
                    ui.mostrarMensaje('pasaste la validación', 'correcto');

            //instaciando Seguro



            //utilizar el prototype que va a seleccionadar
            
}

//