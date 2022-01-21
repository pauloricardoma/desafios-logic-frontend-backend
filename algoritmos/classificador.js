const pessoas = [
  {
    souEu: true,
    responsavel:true,
    nome: 'Paulo',
  },
  {
    souEu: false,
    responsavel:true,
    nome: 'Rose',
  },
  {
    souEu: false,
    responsavel:false,
    nome: 'Joao',
  },
  {
    souEu: false,
    responsavel:false,
    nome: 'Mateus',
  },
  {
    souEu: false,
    responsavel:true,
    nome: 'Rafa',
  },
  {
    souEu: false,
    responsavel:false,
    nome: 'Lurdes',
  },
]

function ordenar(a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

function classificador(array) {
  const pessoasOrdenado = [];
  const ordenarPessoas = array.sort((a, b) => ordenar(a.nome, b.nome));
  
  pessoasOrdenado.push(ordenarPessoas.find(pessoa => pessoa.souEu));

  let pessoasResponsaveis = ordenarPessoas.filter(pessoa => 
    !pessoa.souEu && pessoa.responsavel
  );
  for (let pessoaResponsavel of pessoasResponsaveis) {
    pessoasOrdenado.push(pessoaResponsavel)
  };

  let pessoasSemResponsabilidades = ordenarPessoas.filter(pessoa=>
    !pessoa.souEu && !pessoa.responsavel  
  );
  for (let pessoaSemResponsabilidade of pessoasSemResponsabilidades) {
    pessoasOrdenado.push(pessoaSemResponsabilidade)
  };

  return pessoasOrdenado;
};

const classificados = classificador(pessoas);
console.log(classificados.map(pessoa => pessoa.nome))