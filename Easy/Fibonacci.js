var f0 = 0;
var f1 = 1;
var Fn;
var Fp;
function Fibonacci(Fn){
    console.log(f0);
    console.log(f1);
    for (i = 0; i < (Fn-1); i++){
         Fp = f1 + f0;
         f0 = f1;
         f1 = Fp;        
        console.log(Fp);
    }
}
Fibonacci(20);