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



//variable



//event
document.addEventListener("DOMContentLoaded", () => {
        ui.llenarOpciones();//llena las opciones de años
})


//funciones



//