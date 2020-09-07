// const email1 = document.getElementById("email1");
// const email2 = document.getElementById("email2");
// const email3 = document.getElementById("email3");
// const email4 = document.getElementById("email4");
// const email5 = document.getElementById("email5");
// const email6 = document.getElementById("email6");
// const email7 = document.getElementById("email7");
// const email8 = document.getElementById("email8");
// const email9 = document.getElementById("email9");
// const email10 = document.getElementById("email10");


// email1.onclick = () => {
//     email1.classList.remove("email");
//     email1.classList.add("visto");
//   };

//   email2.onclick = () => {
//     email2.classList.remove("email");
//     email2.classList.add("visto");
//   };
//   email3.onclick = () => {
//     email3.classList.remove("email");
//     email3.classList.add("visto");
//   };
//   email4.onclick = () => {
//     email4.classList.remove("email");
//     email4.classList.add("visto");
//   };
//   email5.onclick = () => {
//     email5.classList.remove("email");
//     email5.classList.add("visto");
//   };
//   email6.onclick = () => {
//     email6.classList.remove("email");
//     email6.classList.add("visto");
//   };
//   email7.onclick = () => {
//     email7.classList.remove("email");
//     email7.classList.add("visto");
//   };
//   email8.onclick = () => {
//     email8.classList.remove("email");
//     email8.classList.add("visto");
//   };
//   email9.onclick = () => {
//     email9.classList.remove("email");
//     email9.classList.add("visto");
//   };

//   email10.onclick = () => {
//     email10.classList.remove("email");
//     email10.classList.add("visto");
//   };
//  const oscuro = document.getElementsByClassName(".oscuro")
//  const claro = document.getElementsByClassName(".claro")
//  const botonOscuro = document.querySelector("#sol")
//  const botonClaro = document.querySelector("#luna")

//  botonOscuro.onclick = () => {

//      oscuro.classList.add(".oscuro")
//      claro.classList.remove(".claro")
    
//  };

//  botonClaro.onclick = () => {

//      oscuro.classList.remove("oscuro")
//      claro.classList.add("claro")
//  }; 


 const peliculasRetro = document.getElementsByClassName("peli retro")
 const peliculasRomanticas= document.getElementsByClassName("peli rom")
 const peliculasDisneyPixar = document.getElementsByClassName("peli disney")

 const botonRetro = document.getElementById("retro")
 const botonRomanticas = document.getElementById("romanticas")
 const botonDisneyPixar = document.getElementById("disneypixar")


const estiloOculto = document.querySelector(".peli")

 botonRetro.onclick =() => {

  peliculasRetro.classList.remove("peli")
  peliculasRomanticas.classList.add("peli")
  peliculasDisneyPixar.classList.add("peli")

 };

 bontonRomanticas.onclick =() => {
   peliculasRetro.classList.add("peli")
   peliculasRomanticas.classList.remove("peli")
   peliculasDisneyPixar.classList.add("peli")
  
 }; 

 botonDisneyPixar.onclick =() => {

  peliculasRetro.classList.add("peli")
  peliculasRomanticas.classList.add("peli")
  peliculasDisneyPixar.classList.remove("peli")
 }


//  Uncaught TypeError: Cannot set property 'onclick' of null
//     at VM19 index.js:85