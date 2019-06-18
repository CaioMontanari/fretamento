/* This is for example purposes */
const contractABI = [
	{
		"constant": false,
		"inputs": [],
		"name": "cancelamentoEEstornoDeTodos",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "nomeClienteEstorno",
				"type": "string"
			}
		],
		"name": "estornoIndividual",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "pousoSeguro",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "nomePassageiro",
				"type": "string"
			},
			{
				"name": "carteiraCliente",
				"type": "address"
			},
			{
				"name": "estornoParaAgencia",
				"type": "bool"
			}
		],
		"name": "reserva",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_limiteAviao",
				"type": "uint256"
			},
			{
				"name": "_valorPassagem",
				"type": "uint256"
			},
			{
				"name": "_dataEncerramentoVendas",
				"type": "uint256"
			},
			{
				"name": "_carteiraCompanhiaAerea",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "aviso",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "nomePassageiro",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "carteiraAgencia",
				"type": "address"
			}
		],
		"name": "reservaEfetuada",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "aviso",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "nomePassageiro",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "carteiraAgencia",
				"type": "address"
			}
		],
		"name": "pousoEfetuadoComSucesso",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "nomePassageiro",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "carteiraEstorno",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "valorEstorno",
				"type": "uint256"
			}
		],
		"name": "eventoEstornoRealizado",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "carteiraCompanhiaAerea",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "a",
				"type": "string"
			},
			{
				"name": "b",
				"type": "string"
			}
		],
		"name": "comparacaoStrings",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "dataEncerramentoVendas",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "limiteAviao",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"name": "mapeamentoReservaPorNome",
		"outputs": [
			{
				"name": "nomePassageiro",
				"type": "string"
			},
			{
				"name": "carteiraCliente",
				"type": "address"
			},
			{
				"name": "carteiraAgencia",
				"type": "address"
			},
			{
				"name": "estornoParaAgencia",
				"type": "bool"
			},
			{
				"name": "estornoRealizado",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "passageiros",
		"outputs": [
			{
				"name": "nomePassageiro",
				"type": "string"
			},
			{
				"name": "carteiraCliente",
				"type": "address"
			},
			{
				"name": "carteiraAgencia",
				"type": "address"
			},
			{
				"name": "estornoParaAgencia",
				"type": "bool"
			},
			{
				"name": "estornoRealizado",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "passageirosPorAgencia",
		"outputs": [
			{
				"name": "nomePassageiro",
				"type": "string"
			},
			{
				"name": "carteiraCliente",
				"type": "address"
			},
			{
				"name": "carteiraAgencia",
				"type": "address"
			},
			{
				"name": "estornoParaAgencia",
				"type": "bool"
			},
			{
				"name": "estornoRealizado",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "valorPassagem",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "verificarCadeirasSobrando",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

if (network === "4") {
    contractAddress = "0x0738f14bc380a2a0507e3831b743865b2d88f0f1"; 
} else {
    contractAddress = "0xe7402e8cde5566c926f8103b793fa6eeec13c2b5"; 
}

contract = web3.eth.contract(contractABI).at(contractAddress);
