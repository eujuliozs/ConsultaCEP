var $cep = document.querySelector("#cep");
var $logradouro = document.querySelector("#logradouro");
var $bairro = document.querySelector("#bairro");

$cep.addEventListener("blur", MinhaFuncao);

async function MinhaFuncao(){
  var endereço = await get(this.value);
  $logradouro.value = endereço.logradouro;
  $bairro.value = endereço.bairro;
}

async function get(cep)
{
  var url = `https://viacep.com.br/ws/${cep}/json/`;

  var response = await fetch(url);

  var data = await response.json();

  console.log(response);

  console.log(data);

  var endereco = new Endereco(data.cep, data.logradouro, data.complemento, data.bairro, data.localidade, data.uf, data.ibge, data.gia, data.ddd, data.siafi);

  console.log("bairro " + data.bairro);
  return endereco;  

}




class Endereco {
    constructor(cep, logradouro, complemento, bairro, localidade, uf, ibge, gia, ddd, siafi) {
      this.cep = cep;
      this.logradouro = logradouro;
      this.complemento = complemento;
      this.bairro = bairro;
      this.localidade = localidade;
      this.uf = uf;
      this.ibge = ibge;
      this.gia = gia;
      this.ddd = ddd;
      this.siafi = siafi;
    }

}
  