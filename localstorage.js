// key hace referencia a lo que voy a utilizar para tener acceso al campo donde se va a guardae 
// value hace referencia a la caja donde voy a poner los valores
//sintaxis para agregar los elementos de JS

localStorage.setItem('test','Francesca Polzella ')
sessionStorage.setItem('nombre','france')

//que pasa si tenemos un objeto
const producto={
    nombre:'telefono',
    precio:300
}
//console.log(typeof(producto)) 
// esto es para visualizar que el tipo de dato que nos estran extrayendo sea un objeto 




// convertir  JSON a string

const productoAstring= JSON.stringify(producto)
//console.log(productoAstring)
//console.log(typeof(productoAstring)) este me dice que esto ya es un string
localStorage.setItem('producto',productoAstring)

//arreglo un arreglo al LS

const meses= [ 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto' ,'septiembre', 'octubre', 'noviembre', 'diciembre']
const mesesAstring=JSON.stringify(meses)
console.log(mesesAstring)
localStorage.setItem('meses', mesesAstring)


// consultar a los objetos al local Storge 
const nombre = localStorage.getItem('test')
console.log(nombre)

const product= localStorage.getItem('producto')
const productAObj= JSON.parse(product)
console.log(productAObj)

const mes = localStorage.getItem('meses')
const mesArreglo = JSON.parse(mes)
console.log(mesArreglo)

//hola