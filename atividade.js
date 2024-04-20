class Estudante{
    constructor(nome,email,RA,curso,disciplinas){
        this.nome = nome
        this.email = email
        this.RA = RA
        this.curso = curso
        this.disciplinas = disciplinas
    }

    primeiraDisciplina() {
        console.log(this.disciplinas[0])
    }

    ultimaDisciplina(){
        console.log(this.disciplinas[this.disciplinas.length-1])
    }

}

let estudante1=new Estudante("luan","luansouza70690@gmai.com",123456789,"ADS",["L. Programação","Sistemas informação"])


estudante1.primeiraDisciplina()
estudante1.ultimaDisciplina()

let estudante2=new Estudante("joão","joao@gamail.com", 987654321,"ADS",["calculo", "ingles"])
estudante2.primeiraDisciplina()
estudante2.ultimaDisciplina()