/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DPixToken } from "../DPixToken";

export class DPixToken__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    _enableFaucet: boolean,
    overrides?: Overrides
  ): Promise<DPixToken> {
    return super.deploy(
      name,
      symbol,
      initialSupply,
      _enableFaucet,
      overrides || {}
    ) as Promise<DPixToken>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    initialSupply: BigNumberish,
    _enableFaucet: boolean,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      name,
      symbol,
      initialSupply,
      _enableFaucet,
      overrides || {}
    );
  }
  attach(address: string): DPixToken {
    return super.attach(address) as DPixToken;
  }
  connect(signer: Signer): DPixToken__factory {
    return super.connect(signer) as DPixToken__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DPixToken {
    return new Contract(address, _abi, signerOrProvider) as DPixToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_enableFaucet",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_ok",
        type: "bool",
      },
    ],
    name: "changeEnableFaucet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "faucet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001378380380620013788339810160408190526200003491620004bd565b8351849084906200004d9060039060208501906200038e565b508051620000639060049060208401906200038e565b505050620000b16040518060400160405280601681526020017f44506978546f6b656e204465706c6f79696e672e2e2e000000000000000000008152506200019e60201b620004921760201c565b620000e6604051806040016040528060068152602001656e616d65203d60d01b81525085620001ec60201b620004d81760201c565b6200011d6040518060400160405280600881526020016773796d626f6c203d60c01b81525084620001ec60201b620004d81760201c565b6200015b6040518060400160405280600f81526020016e696e697469616c537570706c79203d60881b815250836200023d60201b620005211760201c565b60058054610100600160a81b031916336101008102919091179091556200018390836200028a565b6005805460ff191691151591909117905550620006c7915050565b620001e981604051602401620001b5919062000573565b60408051601f198184030181529190526020810180516001600160e01b0390811663104c13eb60e21b179091526200036816565b50565b620002398282604051602401620002059291906200058f565b60408051601f198184030181529190526020810180516001600160e01b03908116634b5c427760e01b179091526200036816565b5050565b62000239828260405160240162000256929190620005b8565b60408051601f198184030181529190526020810180516001600160e01b039081166309710a9d60e41b179091526200036816565b6001600160a01b038216620002bc5760405162461bcd60e51b8152600401620002b390620005dc565b60405180910390fd5b620002ca6000838362000389565b8060026000828254620002de91906200061c565b90915550506001600160a01b038216600090815260208190526040812080548392906200030d9084906200061c565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906200035290859062000613565b60405180910390a3620002396000838362000389565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b505050565b8280546200039c9062000674565b90600052602060002090601f016020900481019282620003c057600085556200040b565b82601f10620003db57805160ff19168380011785556200040b565b828001600101855582156200040b579182015b828111156200040b578251825591602001919060010190620003ee565b50620004199291506200041d565b5090565b5b808211156200041957600081556001016200041e565b600082601f83011262000445578081fd5b81516001600160401b0380821115620004625762000462620006b1565b604051601f8301601f191681016020018281118282101715620004895762000489620006b1565b604052828152848301602001861015620004a1578384fd5b620004b483602083016020880162000641565b95945050505050565b60008060008060808587031215620004d3578384fd5b84516001600160401b0380821115620004ea578586fd5b620004f88883890162000434565b955060208701519150808211156200050e578485fd5b506200051d8782880162000434565b93505060408501519150606085015180151581146200053a578182fd5b939692955090935050565b600081518084526200055f81602086016020860162000641565b601f01601f19169290920160200192915050565b60006020825262000588602083018462000545565b9392505050565b600060408252620005a4604083018562000545565b8281036020840152620004b4818562000545565b600060408252620005cd604083018562000545565b90508260208301529392505050565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b600082198211156200063c57634e487b7160e01b81526011600452602481fd5b500190565b60005b838110156200065e57818101518382015260200162000644565b838111156200066e576000848401525b50505050565b6002810460018216806200068957607f821691505b60208210811415620006ab57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610ca180620006d76000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c806306fdde03146100b4578063095ea7b3146100d257806318160ddd146100f257806323b872dd14610107578063313ce5671461011a578063395093511461012f57806370a082311461014257806395d89b4114610155578063a457c2d71461015d578063a9059cbb14610170578063d5fd68fc14610183578063dd62ed3e14610198578063de5f72fd146101ab575b600080fd5b6100bc6101b3565b6040516100c9919061097a565b60405180910390f35b6100e56100e03660046108db565b610245565b6040516100c9919061096f565b6100fa610262565b6040516100c99190610bf5565b6100e56101153660046108a0565b610268565b610122610301565b6040516100c99190610bfe565b6100e561013d3660046108db565b610306565b6100fa61015036600461084d565b61035a565b6100bc610379565b6100e561016b3660046108db565b610388565b6100e561017e3660046108db565b610401565b610196610191366004610904565b610415565b005b6100fa6101a636600461086e565b610444565b61019661046f565b6060600380546101c290610c30565b80601f01602080910402602001604051908101604052809291908181526020018280546101ee90610c30565b801561023b5780601f106102105761010080835404028352916020019161023b565b820191906000526020600020905b81548152906001019060200180831161021e57829003601f168201915b5050505050905090565b6000610259610252610566565b848461056a565b50600192915050565b60025490565b600061027584848461061e565b6001600160a01b038416600090815260016020526040812081610296610566565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050828110156102e25760405162461bcd60e51b81526004016102d990610aa8565b60405180910390fd5b6102f6856102ee610566565b85840361056a565b506001949350505050565b601290565b6000610259610313610566565b848460016000610321610566565b6001600160a01b03908116825260208083019390935260409182016000908120918b16815292529020546103559190610c0c565b61056a565b6001600160a01b0381166000908152602081905260409020545b919050565b6060600480546101c290610c30565b60008060016000610397610566565b6001600160a01b03908116825260208083019390935260409182016000908120918816815292529020549050828110156103e35760405162461bcd60e51b81526004016102d990610b79565b6103f76103ee610566565b8585840361056a565b5060019392505050565b600061025961040e610566565b848461061e565b60055461010090046001600160a01b0316331461043157600080fd5b6005805460ff1916911515919091179055565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60055460ff1661047e57600080fd5b61049033678ac7230489e80000610748565b565b6104d5816040516024016104a6919061097a565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052610810565b50565b61051d82826040516024016104ee92919061098d565b60408051601f198184030181529190526020810180516001600160e01b0316634b5c427760e01b179052610810565b5050565b61051d82826040516024016105379291906109bb565b60408051601f198184030181529190526020810180516001600160e01b03166309710a9d60e41b179052610810565b3390565b6001600160a01b0383166105905760405162461bcd60e51b81526004016102d990610b35565b6001600160a01b0382166105b65760405162461bcd60e51b81526004016102d990610a20565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610611908590610bf5565b60405180910390a3505050565b6001600160a01b0383166106445760405162461bcd60e51b81526004016102d990610af0565b6001600160a01b03821661066a5760405162461bcd60e51b81526004016102d9906109dd565b610675838383610831565b6001600160a01b038316600090815260208190526040902054818110156106ae5760405162461bcd60e51b81526004016102d990610a62565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106e5908490610c0c565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161072f9190610bf5565b60405180910390a3610742848484610831565b50505050565b6001600160a01b03821661076e5760405162461bcd60e51b81526004016102d990610bbe565b61077a60008383610831565b806002600082825461078c9190610c0c565b90915550506001600160a01b038216600090815260208190526040812080548392906107b9908490610c0c565b90915550506040516001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906107fc908590610bf5565b60405180910390a361051d60008383610831565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b505050565b80356001600160a01b038116811461037457600080fd5b60006020828403121561085e578081fd5b61086782610836565b9392505050565b60008060408385031215610880578081fd5b61088983610836565b915061089760208401610836565b90509250929050565b6000806000606084860312156108b4578081fd5b6108bd84610836565b92506108cb60208501610836565b9150604084013590509250925092565b600080604083850312156108ed578182fd5b6108f683610836565b946020939093013593505050565b600060208284031215610915578081fd5b81358015158114610867578182fd5b60008151808452815b818110156109495760208185018101518683018201520161092d565b8181111561095a5782602083870101525b50601f01601f19169290920160200192915050565b901515815260200190565b6000602082526108676020830184610924565b6000604082526109a06040830185610924565b82810360208401526109b28185610924565b95945050505050565b6000604082526109ce6040830185610924565b90508260208301529392505050565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b60208082526026908201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604082015265616c616e636560d01b606082015260800190565b60208082526028908201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616040820152676c6c6f77616e636560c01b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526025908201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604082015264207a65726f60d81b606082015260800190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b60ff91909116815260200190565b60008219821115610c2b57634e487b7160e01b81526011600452602481fd5b500190565b600281046001821680610c4457607f821691505b60208210811415610c6557634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220b60c38db7e37acfec398ecda9cff3af76211b69919a5e58687c1f114757d655d64736f6c63430008000033";