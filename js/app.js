// var Calculadora = (function(){
//     var Constructor = function(nuevoValor){
//         this.valor = nuevoValor || 0;
//         var validarParametro = function(parametro){
//             return !isNaN(parseFloat(parametro) && isFinite(parametro));
//         }
//     }

//     Constructor.prototype.obtenerValor= function(){
//         return this.valor;
//     };    
//     Constructor.prototype.sumar= function(sumando){
//         if(validarParametro(parametro)){
//             this.valor += sumando;
//             return this.valor;
//         }
//     };
//     Constructor.prototype.restar= function(sustraendo){
//         if(validarParametro(parametro)){
//             this.valor -= sustraendo;
//             return this.valor;
//         }
//     };
//     Constructor.prototype.multiplicar= function(factor){
//         if(validarParametro(parametro)){
//             this.valor *= factor;
//             return this.valor;
//         }
//     };
//     Constructor.prototype.division= function(divisor){
//         if(validarParametro(parametro)){
//             this.valor /= factor;
//             return this.valor;
//         }
//     }
//     Constructor.validarParametro = function(parametro){
//             return !isNaN(parseFloat(parametro) && isFinite(parametro));
//     };

//     return Constructor;
// })();

var inputHandler = function(event){
    var teclaPresionada = event.which || event.keycode;
    var valorDisplay = document.getElementById('display');

    var worker = new Worker('workers.js');
    worker.addEventListener('message', function(e){       
        valorDisplay.innerHTML = e.data;
        worker.terminate();
    });
    worker.postMessage(1);
};

document.onkeypress = inputHandler;
