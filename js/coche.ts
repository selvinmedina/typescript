module Tienda {
    export class Ropa {
        constructor(public titulo: string) {
            alert('Tienda de tecnologia: ' + titulo);
        }
    }
}

function arranque(lanzar: string) {
    return function (target: Function) {
        target.prototype.lanzamiento = function (): void {
            alert(lanzar);
        }
    }
}

import Ropa = Tienda.Ropa;
let informatica = new Ropa('Comida');

@arranque('Lanzamiento del curso de node.js y Angujar8')
class Coche {
    public color: string;
    public modelo: string;
    public velocidad: number;

    constructor(modelo = null) {
        this.velocidad = 0;

        this.color = 'negro';

        (modelo == null) ?
            this.modelo = 'modeloooooooo'
            :
            this.modelo = modelo;
    }

    public getModelo() {
        return this.modelo;
    }

    public setModelo(modelo: string) {
        this.modelo = modelo;
    }

    public getColor() {
        return this.color;
    }

    public setColor(color: string) {
        this.color = color;
    }

    protected acelerar() {
        this.velocidad++;
    }

    private frenar() {
        this.velocidad--;
    }

    public getVelocidad() {
        return this.velocidad;
    }


}

var coche = new Coche('ff');

coche.lanzamiento();

console.log(coche.getVelocidad());