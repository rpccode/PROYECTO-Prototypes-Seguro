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
                console.log('no paso la validaccion');
            }else {
                console.log('paso la validaccion');
            }
}

//