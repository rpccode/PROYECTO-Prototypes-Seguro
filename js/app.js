//constructor
function  Seguro(marca,year,tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//realiza la cotizacion con los datos

Seguro.prototype.cotizarSeguro = function(){
    /*
            1= 1.15
            2=1.05
            3=1.35
    */
    let cantidad ;
    let base = 2000;

   switch (this.marca) {
       case '1':
                cantidad = base * 1.15;
                break;
       case '2':
                cantidad = base * 1.05;
                break;
       case '3':
                cantidad = base * 1.35;
           break;
   
       default:
           break;
   }
   //leer el ano
    const diferencia = new Date().getFullYear() - this.year;
   //cada año que la diferencia es myor el costo va a reducir un 3%
   cantidad -= ((diferencia * 3) * cantidad)/100;

   /**
    * 
    *  si el Seguro es basico se multiplica por un  30% mas
    * si el Seguro es completo se multiplica por un  50% mas
    * 
    * */
   if (this.tipo === 'basico') {
            cantidad *= 1.30;
   }else{
            cantidad *= 1.50;
   }

    return cantidad;
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

UI.prototype.mostrarResultado = (seguro , total) => {

        const {marca, year, tipo} = seguro;

        let textMarca ;

        switch (marca) {
            case '1':
                    textMarca = 'Americano';
                    break;
            case '2':
                        textMarca = 'Japones';
                        break;
            case '3':
                        textMarca = 'Europeo';
                break;
        
            default:
                break;
        }

        const div = document.createElement('div');
        div.classList.add('mt-10')

        div.innerHTML= `
                <p class="header">Tu Resumen</p>
                  <p class="font-bold">Marca: <span class="font-normal">${textMarca}</span></p>
                  <p class="font-bold">Year: <span class="font-normal">${year}</span></p>
                  <p class="font-bold">Tipo: <span class="font-normal capitalize">${tipo}</span></p>
                <p class="font-bold">Total: <span class="font-normal">${total}</span></p>
        
        
        `;

        const resultadoDiv =document.querySelector('#resultado');

       

        //mostrando spinner
        const spinner = document.querySelector('#cargando');
        spinner.style.display = 'block';

        setTimeout(() => {
                spinner.style.display = 'none';//se eilimina el spinner
                 resultadoDiv.appendChild(div);//se muestra el resultado
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
            //ocultar cotizaciones previas 
            const resultados = document.querySelector('#resultado div')

            if (resultados != null) {

                resultados.remove();
                
            }

            //instaciando Seguro
                const seguro = new Seguro(marca, year, tipo);
                const cotizar= seguro.cotizarSeguro(); 

            //utilizar el prototype que va a seleccionadar
            ui.mostrarResultado(seguro, cotizar);
}

//