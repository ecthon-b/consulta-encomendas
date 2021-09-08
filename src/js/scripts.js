import value from '../data/dados.json' assert { type: "json" };

//console.log(value)
var form = document.getElementById('formulario')
var campo = document.getElementById('codigo')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    var dados = String(campo.value).toUpperCase()
    const { encomendas } = value
    for (const item of encomendas) {
        if(item.numero === dados) {
            setResult(item)
        }
    }
})

function setResult(encomendas) {
    document.getElementById("numero-ordem").innerHTML = encomendas.id;
    document.getElementById("nome-cliente").innerHTML = encomendas.cliente.nome;
    document.getElementById("valor").innerHTML = (encomendas.valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    const dataEntrega = encomendas.data
    document.getElementById("data-pedido").innerHTML = dataEntrega;

    const statusEncomenda = (encomendas.entregue === true ? "Entregue" : "Entregar"); 
    document.getElementById("status-entrega").innerHTML = statusEncomenda;
}

// {
//     "id": 312,
//     "numero": "QWE-72Y",
//     "valor": 27.00,
//     "entregue": false,
//     "data": "2014-12-14T11:12:43Z",
//     "cliente": {
//       "nome": "Investidores ricos",
//       "id": 2
//     }
//   }