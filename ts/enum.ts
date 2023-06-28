enum Emes{
    JAN,
    FEV,
    MAR,
    ABR,
    MAI,
    JUN,
    JUL,
    AGO,
    SET, 
    OUT, 
    NOV,
    DEZ,
}
const pessoa: {nome:string; mesAniversario:Emes} = {
    nome: "Sergio",
    mesAniversario: Emes.JUN,
}
if(pessoa.mesAniversario === Emes.JUN){
    console.log(pessoa)
}