var Calculadora = (function(){
    var Constructor = function(nuevoValor){
        this.valor = nuevoValor || 0;
        this.display = document.getElementById('display');
        var obtenerIdDelElemento = function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;
            return document.getElementById(target.id);
        };
        var validarParametro = function(parametro){
            return !isNaN(parseFloat(parametro) && isFinite(parametro));
        };
        this.teclaPresionada = function(e){
            var teclaSeleccionda = obtenerIdDelElemento(e);
            if(validarParametro(teclaSeleccionda.id)){
                display.innerHTML = display.innerHTML + teclaSeleccionda.id;    
            }
            teclaSeleccionda.style.padding = '2px';        
        };
        this.NotTeclaPresionada = function(e){
            var teclaSeleccionda = obtenerIdDelElemento(e);
            teclaSeleccionda.style.padding = '0px';        
        };
    }
    Constructor.prototype.obtenerValor= function(){
        return this.valor;
    };    
    Constructor.prototype.sumar = function(){
        if(this.validarParametro(sumando)){
            this.valor += sumando;
            this.display.innerHTML = this.valor.toString();
            return this.valor;
        }
    };
    Constructor.prototype.restar = function(sustraendo){
        if(this.validarParametro(sustraendo)){
            this.valor -= sustraendo;
            this.display.innerHTML = this.valor.toString();
            return this.valor;
        }
    };
    Constructor.prototype.multiplicar = function(factor){
        if(this.validarParametro(factor)){
            this.valor *= factor;
            this.display.innerHTML = this.valor.toString();
            return this.valor;
        }
    };
    Constructor.prototype.division = function(divisor){
        if(this.validarParametro(divisor)){
            this.valor /= divisor;
            this.display.innerHTML = this.valor.toString();
            return this.valor;
        }
    }

    return Constructor;
})();

var miCalculadora = new Calculadora();

var elementoTeclado = document.querySelector('.teclado');
var elementoDisplay = document.getElementById('display');

// Capturamos el elemento al que damos click...
elementoTeclado.addEventListener('mousedown', miCalculadora.teclaPresionada, false);
// Restauramos cuando damos click...
elementoTeclado.addEventListener('mouseup', miCalculadora.NotTeclaPresionada, false);

elementoTeclado.addEventListener('change', function(e){

});