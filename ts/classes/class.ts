abstract class Pessoa{
   protected nome:string;
   protected idade:number;


    constructor(nome:string, idade:number ){
        this.nome = nome;
        this.idade = idade; 
    }

   public comer(comida:string){
        return `O ${this.nome} comeu ${comida}`
    }
    
    public fezAniversario(){
        return  `O ${this.nome} fez ${++this.idade}`;
    }

    protected abstract profissao: string;
    public abstract qualSuaProfissao(): string;
}


class Sergio extends  Pessoa{
    protected profissao:string = "dev"
    
    constructor() {
        super("Sergio",19);
    }
    
    public qualSuaProfissao(): string {
        return this.profissao
    }
}