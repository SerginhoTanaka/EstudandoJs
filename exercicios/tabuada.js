function tabuada(number){
    for(let i = 0; i <= 10; i++){
        const result = number * i;
        console.log(number + "X" + i + "=" + result)
    }
}
const number = 10;
tabuada(number)