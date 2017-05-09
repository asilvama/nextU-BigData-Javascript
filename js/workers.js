self.addEventListener("message", function(e){
    var input = e.data;
    var response = 0;

    if(!isNaN(input) && isFinite(e.data)){
        if(input[0] == '0'){
            response = input.substring(1, input.length - 1);
        }
    }
    self.postMessage(response);    
})