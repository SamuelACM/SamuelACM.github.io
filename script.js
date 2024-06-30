// 1 //
let desaparecer = document.querySelector(".ocultar");
let aparecer = document.querySelector(".mostrar");
let texto = document.querySelector(".signi");
let codigo = document.querySelector(".lin")

// 2 //
let des = document.querySelector(".ocultar1");
let apa = document.querySelector(".mostrar1");
let tex = document.querySelector(".signi1");
let cod = document.querySelector(".lin1");

// 3 //
let desapa = document.querySelector(".ocultar2");
let apare = document.querySelector(".mostrar2");
let text = document.querySelector(".signi2")
let codi = document.querySelector(".lin2")
// 4 //
let desaparece = document.querySelector(".ocultar3");
let aparece = document.querySelector(".mostrar3");
let te = document.querySelector(".signi3")
let co = document.querySelector(".lin3")
// 5 //
let desapare = document.querySelector(".ocultar4");
let apar = document.querySelector(".mostrar4");
let tet = document.querySelector(".signi4")
let cog = document.querySelector(".lin4")


// PROYECTO 1 //
aparecer.onclick = function(){
    texto.innerHTML = "El primer proyecto que realicé en este curso fue una calculadora que permite realizar las cuatro operaciones básicas de matemáticas. ", 
    codigo.innerHTML = "Ver proyecto";
    tex.innerHTML = "";
    cod.innerHTML = "";
    text.innerHTML= "";
    codi.innerHTML= "";
    te.innerHTML = "";
    co.innerHTML = "";
    tet.innerHTML = "";
    cog.innerHTML = "";
};

desaparecer.onclick = function(){
    texto.innerHTML = "";
    codigo.innerHTML="";
};

// PROYECTO 2
apa.onclick = function(){
    tex.innerHTML = "El segundo proyecto que realicé en el curso fue un pequeño artículo sobre el matrimonio de los Warren utilizando el lenguaje de diseño CSS. ";
    cod.innerHTML = "Ver proyecto"
    texto.innerHTML = "";
    codigo.innerHTML="";
    text.innerHTML= "";
    codi.innerHTML= "";
    te.innerHTML = "";
    co.innerHTML = "";
    tet.innerHTML = "";
    cog.innerHTML = "";
};

des.onclick = function(){
    tex.innerHTML = "";
    cod.innerHTML = "";
};
// PROTECYO 3 //
apare.onclick = function(){
    text.innerHTML = "El tercer proyecto que realicé junto con una compañera consistió en crear una página informativa, sobre alguna marca o una compañía específica, en nuestro caso fue la industria de juguetes Mattel, usando los conocimientos adquiridos en las clases. ";
    codi.innerHTML = "Ver proyecto"
    texto.innerHTML = "";
    codigo.innerHTML="";
    tex.innerHTML = "";
    cod.innerHTML = "";
    te.innerHTML = "";
    co.innerHTML = "";
    tet.innerHTML = "";
    cog.innerHTML = "";
};

desapa.onclick = function(){
    text.innerHTML= "";
    codi.innerHTML= "";
};

// PROYECTO 4 //
aparece.onclick = function(){
    te.innerHTML = "El cuarto proyecto, que para mí fue el más entretenido del curso, consistió en realizar los controles de movimiento de un juego de Mario en 2D, donde podemos saltar, cambiar nuestro tamaño de estatura e incluso cambiar el color del fondo. ";
    co.innerHTML = "Ver proyecto"
    texto.innerHTML = "";
    codigo.innerHTML="";
    tex.innerHTML = "";
    cod.innerHTML = "";
    text.innerHTML= "";
    codi.innerHTML= "";
    tet.innerHTML = "";
    cog.innerHTML = "";
};

desaparece.onclick = function(){
    te.innerHTML = "";
    co.innerHTML = "";
};

// PROYECTO 5 //
apar.onclick = function(){
    tet.innerHTML = "El quinto y último proyecto de este curso fue realizar una galería, en donde puedes agregar una foto y una descripción de tu preferencia a través de una foto de Google. ";
    cog.innerHTML = "Ver proyecto"
    texto.innerHTML = "";
    codigo.innerHTML="";
    tex.innerHTML = "";
    cod.innerHTML = "";
    text.innerHTML= "";
    codi.innerHTML= "";
    te.innerHTML = "";
    co.innerHTML = "";
};

desapare.onclick = function(){
    tet.innerHTML = "";
    cog.innerHTML = "";
};
