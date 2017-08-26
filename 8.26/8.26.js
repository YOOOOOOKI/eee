
function buildFizzBuzz(num){
    if(num%15===0){
        console.log('fizz buzz');
    }else if(num%5===0){
        console.log('buzz');
    }else if(num%3===0){
        console.log('fizz');
    }
}
buildFizzBuzz(3);
buildFizzBuzz(5);
buildFizzBuzz(15);


