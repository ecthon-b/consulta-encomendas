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

function setResult(encomenda) {
    document.getElementById("numero-ordem").innerHTML = encomenda.id;
    document.getElementById("nome-cliente").innerHTML = encomenda.cliente.nome;
    document.getElementById("valor").innerHTML = (encomenda.valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    const dataEntrega = new Date(encomenda.data)
    console.log(encomenda.data)
    const dataFormatada = dataEntrega.toLocaleDateString()
    console.log(dataFormatada)
    document.getElementById("data-pedido").innerHTML = dataFormatada;
    
    const statusEncomenda = (encomenda.entregue === true ? "Entregue" : "Entregar"); 
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