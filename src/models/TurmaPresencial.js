class TurmaPresencial extends Turma{
    constructor(frequencia, codigo, nota){
        super(codigo, nota)
        this.frequencia = frequencia
    }
}