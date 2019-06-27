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
		"inputs": [],
		"name": "encerrarReservas",
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
		"inputs": [
			{
				"name": "nomeClientePesquisado",
				"type": "string"
			}
		],
		"name": "informarEstornoAgencia",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "nomeClientePesquisado",
				"type": "string"
			}
		],
		"name": "informarEstornoCliente",
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
    contractAddress = "0x838f7228cb2b7dea00fbf8c79d31e449cfe0b827"; 
} else {
    contractAddress = "0x838f7228cb2b7dea00fbf8c79d31e449cfe0b827"; 
}

contract = web3.eth.contract(contractABI).at(contractAddress);
