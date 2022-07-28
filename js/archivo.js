let boton= document.getElementById("boton");
let boton2= document.getElementById("boton2");
let respuesta= document.getElementById("respuesta");


boton.addEventListener('click',()=>{
    fetch('./datos/datos.json')
    .then ((resp)=>resp.json())
    .then ((datos)=>{
        datos.forEach(element => {
            const li=document.createElement('li');
            li.textContent =element.nombre;
            respuesta.append(li);
        });
       
      })
   
    });

    
document.getElementById("agregar3").addEventListener("click", funcionEntradas);
function funcionEntradas(){
    let entrada=document.getElementById("artista").value.toLowerCase; 
     entrada== "los tipitos" || "airbag"|| "las pastillas del abuelo" || "rodrigo tapari"?

        document.getElementById("respuesta2").innerHTML="Ya tienes tus entradas!"

       :document.getElementById("respuesta2").innerHTML="Entradas agotadas"
       
    let enJson2=JSON.stringify(entrada)
    localStorage.setItem("entradas", entrada)
}

