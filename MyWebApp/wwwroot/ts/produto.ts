class Produto {
    public id: number = 0;
    public nome: string

    public obterNome(): string {
        return this.nome;
    }

    public obterID(): number {
        return this.id;
    }

    set descricao(val) {

    }

    get descricao() {
        return this.nome;
    }
}