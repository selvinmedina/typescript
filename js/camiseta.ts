// Interface
interface camisetaBase{
    setColor(color);
    getColor();
};

// Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log('Camiseta estampada con el logo de: ' + logo);
        }
    }
}

// Clase (molde del objeto)
@estampar('Gucci Gang')
class Camiseta implements camisetaBase{
    // Propiedades (Caracteristicas del objeto)
    public color: string;
    public modelo: string;
    public talla: string;
    public marca: string;
    public precio: number;

    // Constructor
    constructor(color, modelo, talla, marca, precio){
        this.color = color;
        this.modelo = modelo;
        this.talla = talla;
        this.marca = marca;
        this.precio = precio;
    }

    // Metodos (funciones o acciones del objeto)
    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }
}

var camiseta = new Camiseta('Verde', 'MJ', '44888', 'anonimus',4);
console.log(camiseta)
camiseta.setColor('Rojo');
camiseta.getColor();

// var playera = new Camiseta();
// playera.setColor('Azul');

console.log(camiseta.getColor());
var camiseta = new Camiseta('ujo','dos','tres','c',8);

class Sudadera extends Camiseta{
    public capucha: boolean;
    setCapucha( capucha : boolean){
        this.capucha = capucha
    }

    getCapucha(){
        return this.capucha;
    };
}

var sudaderamara = new Sudadera('d','d','d','d',4);
sudaderamara.setCapucha(true);
sudaderamara.setColor('gris');
console.log(sudaderamara);