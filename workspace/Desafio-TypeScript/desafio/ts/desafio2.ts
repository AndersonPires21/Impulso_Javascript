interface Identificacao {
    nome: string;
    idade: number;
    profissao: Profissao
};

enum Profissao {
    Atriz,
    Padeiro
};

const pessoa1 : Identificacao = {
    nome : "Maria",
    idade : 29,
    profissao: Profissao.Atriz
}

const pessoa2 : Identificacao = {
    nome : "Roberto",
    idade : 19,
    profissao: Profissao.Padeiro
}

const pessoa3 : Identificacao = {
    nome : "Laura",
    idade : 32,
    profissao: Profissao.Atriz
}

const pessoa4 : Identificacao = {
    nome : "Carlos",
    idade : 19,
    profissao: Profissao.Padeiro
}