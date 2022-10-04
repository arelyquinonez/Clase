alert("Alerta")

// var personas =["Guillermo","Josue","chino", "Axel", 176];

// var personas=[["guillermo","quiñones"],["josue","adame"],["chino","sandoval"]]


// var personas={
//     "nombre":"guillermo",
//     "apellido":"quiñones"
// }


// var personas={
//     nombre:"guillermo",
//     apellido:"quiñones",
//     edad:37,
//     correo:"memo@hotmai.com"
// }


// class miClase{
//     constructor(nombre, apellido){
//         this.nombre=nombre;
//         this.apellido=apellido;
//     }
// }

// function laPersona(nombre, apellido){
//         this.nombre=nombre;
//         this.apellido=apellido;
// }


// let variable={
//     nombre:"Asus",
//     ram:"8gb"
// }

// let nombre=variable.nombre;
// let ram=variable.ram;

// let frase=`Mi computadora ${variable.nombre} tiene ${variable.ram} de ram`;

// var elMemo=new miClase("guillermo", "quiñones");
// var elChino=new laPersona("Yahir","Sandoval");


var alumnos=[
    {
        nombre:"samuel",
        edad:21,
        calificaciones:[1,2,3]
    },
    {
        nombre:"Yahir",
        edad:20
    },
    {
        nombre:"guillermo",
        edad:21
    }
]


// arreglo de objetos
var articulos=[
    {nombre:"bici", costo: 3000},
    {nombre:"Tv",costo: 2500},
    {nombre:"Libro",costo: 320},
    {nombre:"Celular",costo: 10000},
    {nombre:"Laptop",costo: 20000},
    {nombre:"Teclado",costo: 500},
    {nombre:"Audifonos",costo: 1700},
];

// articulos.forEach((valor)=>{
//     console.log(valor);
// })

articulos.forEach((valor)=>{
    console.log(valor.nombre);
})

var articulosCaros=articulos.filter((valor)=>{
    if (valor.costo>2000)
    return valor;
})

var articulosDescuento=articulos.map((articulos)=>{
    return {nombre:articulos.nombre, costo:articulos.costo*0.8};
})



// var numeros=[
//     23,13,56,67
// ]

// function escribir(palabra){
//     console.log(palabra);
// }

// function otraFuncion(){
//     console.log("Escribo desde otra funcion");
// }

// function escribir(laFuncion){
//     return laFuncion();
// }


// funcion anonima o funcion de flecha
// cal(10,2,(val1,val2)=>{return val1/val2})


//formas en las que se pueden encontrar las funciones anonimas

// function laFuncion(variable1) {
//     return variable1*2;
// }

// (variable1)=>{return variable1*2}

// variable1=>{return variable1*2}

// variable1=>variable1*2;

// ()=>variable1*2;