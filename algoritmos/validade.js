function validade(data, string) {
  const dataAgora = new Date();
  const dataAExpirar = new Date(data);
  const diferenca = Math.abs(dataAgora.getTime() - dataAExpirar.getTime());
  const diasPassados = Math.ceil(diferenca / (60 * 60 * 24 * 1000));

  const diasAExpirar = Number(string.replace('d', ''));
  
  const resultadoAExpirar = diasAExpirar - diasPassados;

  if (resultadoAExpirar > 0) {
    return `Faltam ${resultadoAExpirar} dias para a expiração.`;
  }

  return 'Está expirado.';
}

console.log(validade("2021-11-17T20:40:09.503Z", "10d"))
console.log(validade("2021-12-10T00:00:00.000Z", "180d"))