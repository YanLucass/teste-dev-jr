const fs = require("fs");
const xlsx = require("xlsx");

function lerArquivoTxt(caminhoArquivo) {
  try {
    const conteudo = fs.readFileSync(caminhoArquivo, "utf-8").trim();
    return conteudo
      .split("\n")
      .map((linha) => linha.split("|").map((campo) => campo.trim()));
  } catch (erro) {
    console.error(`Erro ao ler o arquivo ${caminhoArquivo}:`, erro.message);
    return null;
  }
}

function salvarParaExcel(dados, caminhoArquivo) {
  try {
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.aoa_to_sheet(dados);
    xlsx.utils.book_append_sheet(workbook, worksheet, "Dados");
    xlsx.writeFile(workbook, caminhoArquivo);
    console.log(`Arquivo Excel salvo em: ${caminhoArquivo}`);
  } catch (erro) {
    console.error(`Erro ao salvar o arquivo Excel:`, erro.message);
  }
}

function converterTxtParaExcel(caminhoTxt, caminhoExcel) {
  const dados = lerArquivoTxt(caminhoTxt);
  if (dados) {
    salvarParaExcel(dados, caminhoExcel);
  } else {
    console.error(
      "Erro: Não foi possível processar os dados do arquivo de texto."
    );
  }
}

const caminhoTxt = "arquivo.txt";
const caminhoExcel = "dados.xlsx";

converterTxtParaExcel(caminhoTxt, caminhoExcel);
