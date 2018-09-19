const OPCIONES ="OK";

let nameUser: string = 'Tu nombre';
let age: number = 29;
let havePets: boolean = true;

let arrayNumber: number[] = [1, 2, 3];
let arrayString: string[] = ['1', '2', '3'];

let arrayOnlyNumber: Array<number> = [1, 2, 3];
let arrayOnlyString: Array<string> = ['1', '2', '3'];

let arrayMixed: any[] = [2, '5', 3];

let hoy:Date = new Date();

nameUser = 'Otro nombre';

function sumar(n1:number, n2:number){
	let valorSuma:number = n1 + n2;
	console.log(`la suma es ${valorSuma}`);
}

function saludar(nombre:string){
	console.log(`Hola ${nombre.toUpperCase()}`);
}

saludar("Persona X");
sumar(1, 2);

function pruebas (t1:string, t2:string= "prueba", t3?:string){
    if(t3){
        console.log(`t1 = ${t1} t2=${t2} tiene t3 ${t3}`);
    }else{
        console.log(`t1 = ${t1} tiene t2 ${t2}`);
    }
}

pruebas("ok");
pruebas("ok", "de nuevo");
pruebas("ok", "de nuevo", "ok ");

let funcion2 = (a:number) => a;
let funcion4 = (a:number,b:number) => a+b;
let funcion5 = (a:number, b:number, c:number)=>{
	let d = a + b - c;
	return d;
}

console.log(funcion2(1));
console.log(funcion4(1,2));
console.log(funcion5(1,2,3));

let miarreglo ={
	vt1: "mi prueba",
	vt2: "prueba 2"
}

let valt1 = miarreglo.vt1;
let valt2 = miarreglo.vt2;
console.log(valt1, valt2);

let { vt1 , vt2 } = miarreglo;

console.log(vt1,vt2);

let pruebaArreglo:string[] = ["p1","p2","p3"];
let [pos1,pos2,pos3] = pruebaArreglo;

console.log(pos1, pos2, pos3);

/*
	Promesas
*/

let prom = new Promise(function(resolve, reject){
	setTimeout( ()=>{
		//resolve();
		reject();
	}, 1500)
})
console.log(" primera parte");
prom.then (function(){
	console.log("termino bien");
	}, 
	function(){
		console.log("termino mal");
	}
);
console.log(" otra parte");

/*
	Interfaces
*/ 

interface Producto{
	nombre:string,
	descripcion:string
}

function listarProductos(producto:Producto){
	console.log(`mi producto es ${producto.nombre} ${producto.descripcion}`);
}

let miproducto:Producto = {
	nombre:"prueba 1",
	descripcion: "prueba descripcion"
}

listarProductos(miproducto);

/*
	Clases
*/

class Usuario{
	nombre:string;
	apellido:string;
	cel:number;
	activo:boolean;

	constructor(nombre:string, apellido:string, cel:number, activo:boolean){
		this.nombre= nombre;
		this.apellido = apellido;
		this.cel=cel;
		this.activo=activo;
	}
}
let miUsuario:Usuario = new Usuario("Persona", "X", 123456, true);

console.log(miUsuario);
	