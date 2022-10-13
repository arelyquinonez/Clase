let amigos=[];

let btnGuardar=document.querySelector("#btnGuardar");
let btnCancelar=document.querySelector("#btnCancelar");

let lista=document.querySelector(".listaAmigos");
let formulario=document.querySelector("#formulario");


function limpiar(){
    formulario[0].value="";
    formulario[1].value="";
    formulario[2].value="";
    formulario[3].value="";
}


btnCancelar.addEventListener("click",(event)=>{
    limpiar();
    event.preventDefault();
});

btnGuardar.addEventListener("click",(event)=>{
    let contacto={
        nombre:formulario["nombre"].value,
        telefono:formulario["telefono"].value,
        correo:formulario["correo"].value,
        foto:formulario["foto"].value,
    };
    amigos.push(contacto);
    limpiar();
    event.preventDefault();
});