var bicicleta = {
    color: 'Rojo',
    modelo: 'BMC',
    frenos: 'De disco',
    velocidadMaxima: '60km',
    cambiaColor: function(nuevo_color){
        // bicicleta.color = nuevo_color
        this.color=nuevo_color;
        console.log(this);
    }
};

console.log(bicicleta);