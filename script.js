/*2. Realizar un programa que ingrese los sueldos de 5 operarios en un vector. 
Realizar la creación y carga del vector en el constructor. Crear un método para imprimir el vector.*/

class Operario {
    constructor(sueldos) {        
        this.sueldos = sueldos
    }
    mostrarDatos() {
        this.sueldos.forEach((art) => {
            let content = document.getElementById("imprimir");
            let content1 = document.createElement("div");
            content1.innerHTML = `<p>${art}</p>`;
            content.append(content1);
        })
    }
}

let sueldos = []

let operarioSueldo = 0;
let operario = document.getElementById("escuchar");
operario.addEventListener("input", () => {
    operarioSueldo = parseFloat(operario.value)    
});
let conteo = 0
let quedan = 5
let padre3 = document.getElementById("cuenta")
padre3.innerHTML = `<p>Faltan Cargar ${quedan} Sueldo/s</p>`
function cargarSueldo() {
    conteo++
    if (conteo <= 5) {
        quedan--
        padre3 = document.getElementById("cuenta")
        padre3.innerHTML = `<p>Faltan Cargar ${quedan} Sueldo/s</p>`
        sueldos.push(`Operario ${conteo} Sueldo de $ ` + operarioSueldo)
        sueldoCargando(conteo,operarioSueldo)
        operario.value = ``
        operarioSueldo = 0
    }else{
        let padre2 = document.getElementById("avisar")
        padre2.innerHTML = `<p>Ya se cargaron los 5 sueldos</p>`              
    }
    if (quedan === 0) {
        const remuneracion = new Operario(sueldos);
        remuneracion.mostrarDatos()
        quedan = -1           
}

function sueldoCargando(conteo, operarioSueldo) {
    Toastify({
      text: "Se cargo el sueldo del operario " + conteo + " que es de un monto de $ " + operarioSueldo,
      duration: 3000,
      gravity: "top",
      position: "right",
    }).showToast();
  }}