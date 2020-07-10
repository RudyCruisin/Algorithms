var E1;
var sum = 0;
function Euler1(E1){
    for (i = 0; i < E1; i++){
        if (i % 3 == 0 || i % 5 == 0){
            sum = sum + i;
//            console.log(sum);
        }
    }
console.log(sum);
}

Euler1(10);