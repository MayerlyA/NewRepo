


/*var nombreNuevo= "hola";
console.log(nombreNuevo);
//alert('soy boton externo');
function calcular(){
    let numero4 = document.getElementById("numero");
    console.log(numero4.value);
    alert(numero4.value);
}*/
/*
let nombre
nombre='agus'
console.log('Hola ' + nombre + ', ¿cómo estas?'); */
/*
let dineroEnLaCuenta = 100;
let nuevoDeposito = 1200;
let comisionBancaria = 0.05;
console.log((dineroEnLaCuenta+nuevoDeposito)* comisionBancaria);*/
/*
let uno = 3
let dos = uno
console.log(dos);*/
//let listaSuper=["pan","leche","harina", "carne","chocolates","pan lactal", "pescado"]
//let ultimoElemento = listaSuper.lenght-1
//listaSuper.push("chocolate", "pollo")
//let noHabia= listaSuper.pop() eliminar ultimo
//console.log(noHabia)
//let comprado= listaSuper.shift()
//listaSuper.unshift("cebolla","lechuga", "pescado") 
//let indexPan = listaSuper.indexOf("pan lactal") VER POSICION
//console.log(indexPan)

/*
let amigos=["Fran", "Maye", "Mishel","Felix"]
//let amigos2=amigos
let amigos2=amigos(2,3)
amigos.splice(0) COPIA DEL ARREGLO
function existeFelix(){
let index=amigos.indexOf("Felix")
if(index==-1){
    console.log("Que bueno seria tener un amigo que se llame Felix")
}
else{console.log("Tengo un amigo Felix")}
}
*/

//let cadena=[1,2,3]
//let newcadena= cadena.split(""); vuelve de strin a cadena
//let newcadena= cadena.join(); /*de cadena a string*/
//console.log(newcadena)

/*let notas =[1,7,9,5,6]
let aprobadas =[]

for(let i=0;i<notas.aprobadas)


*/
/*
let colores=["rojo","verde", "azul"]
for(let i=0;i<colores.length;i++){
    console.log(colores[i])
}*/

//FOR LOOP  manera de iterar un Arreglo, sirve para recorrer un arreglo y mostrar todos sus elemntos
//FOR LOOP VS WHILE LOOP 
//for(inicializacion;consicion;incremento/decremento)
//FOR EACH simple para iterar un arreglo element=i
/*let amigos=["Maye", "Agus", "Fiona","Emi","Cami"]
amigos.forEach(function(elem){
    if (elem="Cami"){
        console.log("bien")
    }
})
const amigosNuevos = amigos.map((amigo, i)=>console.log(i+amigo))
*/
/*let numeros=[1,2,3]
numeros.forEach((num,index)=>{
})
const nuevosnumeros = numeros.map((num, i)=>console.log(num))
*/
//let notas=[3,3,4];
//let sumaDeNotas = notas.reduce((total, nota)=> total + nota, 0);
//const sumadenotas=notas.reduce(function(total,nota){
  //  return total + nota;
//},0);
//console.log(sumaDeNotas);
//POO
let objetoPersona={
    nombre:"Mayerly",
    apellido:"Achata",
    edad:18,
    saludar: function(){
        console.log("Hola")
    }
}
console.log(objetoPersona)
//let persona1 =["Violeta",21,"Buenos Aires", function(){console.log("Hola")}]
//objetoPersona["saludar"]()/objetoPersona.saludar() VER
//objetoPersona.apellido="Fernandez" MODIFICAR
//objetoPersona.nacionalidad ="Argentina"/objetoPersona["nacionalidad"]="Argentina" AGREGAR

//let zapato = [{marca: 1, talle:3},{}]

//RECORRER UN OBJETO
for(let prop in objetoPersona){
    console.log(prop)
}



