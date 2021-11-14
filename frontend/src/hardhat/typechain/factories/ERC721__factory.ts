/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC721 } from "../ERC721";

export class ERC721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001559380380620015598339810160408190526200003491620001b9565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b50505062000273565b828054620000769062000220565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b600082601f8301126200011f578081fd5b81516001600160401b03808211156200013c576200013c6200025d565b6040516020601f8401601f19168201810183811183821017156200016457620001646200025d565b60405283825285840181018710156200017b578485fd5b8492505b838310156200019e57858301810151828401820152918201916200017f565b83831115620001af57848185840101525b5095945050505050565b60008060408385031215620001cc578182fd5b82516001600160401b0380821115620001e3578384fd5b620001f1868387016200010e565b9350602085015191508082111562000207578283fd5b5062000216858286016200010e565b9150509250929050565b6002810460018216806200023557607f821691505b602082108114156200025757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6112d680620002836000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c806301ffc9a7146100b457806306fdde03146100dd578063081812fc146100f2578063095ea7b31461011257806323b872dd1461012757806342842e0e1461013a5780636352211e1461014d57806370a082311461016057806395d89b4114610180578063a22cb46514610188578063b88d4fde1461019b578063c87b56dd146101ae578063e985e9c5146101c1575b600080fd5b6100c76100c2366004610cd3565b6101d4565b6040516100d49190610dcf565b60405180910390f35b6100e561021c565b6040516100d49190610dda565b610105610100366004610d0b565b6102ae565b6040516100d49190610d7e565b610125610120366004610caa565b6102fa565b005b610125610135366004610b69565b610392565b610125610148366004610b69565b6103ca565b61010561015b366004610d0b565b6103e5565b61017361016e366004610b1d565b61041a565b6040516100d49190611163565b6100e561045e565b610125610196366004610c70565b61046d565b6101256101a9366004610ba4565b61053b565b6100e56101bc366004610d0b565b61057a565b6100c76101cf366004610b37565b6105fd565b60006001600160e01b031982166380ac58cd60e01b148061020557506001600160e01b03198216635b5e139f60e01b145b8061021457506102148261062b565b90505b919050565b60606000805461022b906111db565b80601f0160208091040260200160405190810160405280929190818152602001828054610257906111db565b80156102a45780601f10610279576101008083540402835291602001916102a4565b820191906000526020600020905b81548152906001019060200180831161028757829003601f168201915b5050505050905090565b60006102b982610644565b6102de5760405162461bcd60e51b81526004016102d590610fed565b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b6000610305826103e5565b9050806001600160a01b0316836001600160a01b031614156103395760405162461bcd60e51b81526004016102d5906110d1565b806001600160a01b031661034b610661565b6001600160a01b031614806103675750610367816101cf610661565b6103835760405162461bcd60e51b81526004016102d590610f02565b61038d8383610665565b505050565b6103a361039d610661565b826106d3565b6103bf5760405162461bcd60e51b81526004016102d590611112565b61038d838383610758565b61038d8383836040518060200160405280600081525061053b565b6000818152600260205260408120546001600160a01b0316806102145760405162461bcd60e51b81526004016102d590610fa4565b60006001600160a01b0382166104425760405162461bcd60e51b81526004016102d590610f5a565b506001600160a01b031660009081526003602052604090205490565b60606001805461022b906111db565b610475610661565b6001600160a01b0316826001600160a01b031614156104a65760405162461bcd60e51b81526004016102d590610e83565b80600560006104b3610661565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff1916921515929092179091556104f7610661565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161052f9190610dcf565b60405180910390a35050565b61054c610546610661565b836106d3565b6105685760405162461bcd60e51b81526004016102d590611112565b61057484848484610885565b50505050565b606061058582610644565b6105a15760405162461bcd60e51b81526004016102d590611082565b60006105ab6108b8565b905060008151116105cb57604051806020016040528060008152506105f6565b806105d5846108ca565b6040516020016105e6929190610d4f565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6001600160e01b031981166301ffc9a760e01b14919050565b6000908152600260205260409020546001600160a01b0316151590565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061069a826103e5565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006106de82610644565b6106fa5760405162461bcd60e51b81526004016102d590610eb6565b6000610705836103e5565b9050806001600160a01b0316846001600160a01b031614806107405750836001600160a01b0316610735846102ae565b6001600160a01b0316145b80610750575061075081856105fd565b949350505050565b826001600160a01b031661076b826103e5565b6001600160a01b0316146107915760405162461bcd60e51b81526004016102d590611039565b6001600160a01b0382166107b75760405162461bcd60e51b81526004016102d590610e3f565b6107c283838361038d565b6107cd600082610665565b6001600160a01b03831660009081526003602052604081208054600192906107f6908490611198565b90915550506001600160a01b038216600090815260036020526040812080546001929061082490849061116c565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610890848484610758565b61089c848484846109e5565b6105745760405162461bcd60e51b81526004016102d590610ded565b60408051602081019091526000815290565b6060816108ef57506040805180820190915260018152600360fc1b6020820152610217565b8160005b8115610919578061090381611216565b91506109129050600a83611184565b91506108f3565b60008167ffffffffffffffff81111561094257634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561096c576020820181803683370190505b5090505b841561075057610981600183611198565b915061098e600a86611231565b61099990603061116c565b60f81b8183815181106109bc57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506109de600a86611184565b9450610970565b60006109f9846001600160a01b0316610b00565b15610af557836001600160a01b031663150b7a02610a15610661565b8786866040518563ffffffff1660e01b8152600401610a379493929190610d92565b602060405180830381600087803b158015610a5157600080fd5b505af1925050508015610a81575060408051601f3d908101601f19168201909252610a7e91810190610cef565b60015b610adb573d808015610aaf576040519150601f19603f3d011682016040523d82523d6000602084013e610ab4565b606091505b508051610ad35760405162461bcd60e51b81526004016102d590610ded565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610750565b506001949350505050565b3b151590565b80356001600160a01b038116811461021757600080fd5b600060208284031215610b2e578081fd5b6105f682610b06565b60008060408385031215610b49578081fd5b610b5283610b06565b9150610b6060208401610b06565b90509250929050565b600080600060608486031215610b7d578081fd5b610b8684610b06565b9250610b9460208501610b06565b9150604084013590509250925092565b60008060008060808587031215610bb9578081fd5b610bc285610b06565b93506020610bd1818701610b06565b935060408601359250606086013567ffffffffffffffff80821115610bf4578384fd5b818801915088601f830112610c07578384fd5b813581811115610c1957610c19611271565b604051601f8201601f1916810185018381118282101715610c3c57610c3c611271565b60405281815283820185018b1015610c52578586fd5b81858501868301379081019093019390935250939692955090935050565b60008060408385031215610c82578182fd5b610c8b83610b06565b915060208301358015158114610c9f578182fd5b809150509250929050565b60008060408385031215610cbc578182fd5b610cc583610b06565b946020939093013593505050565b600060208284031215610ce4578081fd5b81356105f681611287565b600060208284031215610d00578081fd5b81516105f681611287565b600060208284031215610d1c578081fd5b5035919050565b60008151808452610d3b8160208601602086016111af565b601f01601f19169290920160200192915050565b60008351610d618184602088016111af565b835190830190610d758183602088016111af565b01949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090610dc590830184610d23565b9695505050505050565b901515815260200190565b6000602082526105f66020830184610d23565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526019908201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776040820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604082015269726f206164647265737360b01b606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201526832b73a103a37b5b2b760b91b606082015260800190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526029908201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960408201526839903737ba1037bbb760b91b606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201526e3732bc34b9ba32b73a103a37b5b2b760891b606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656040820152603960f91b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b90815260200190565b6000821982111561117f5761117f611245565b500190565b6000826111935761119361125b565b500490565b6000828210156111aa576111aa611245565b500390565b60005b838110156111ca5781810151838201526020016111b2565b838111156105745750506000910152565b6002810460018216806111ef57607f821691505b6020821081141561121057634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561122a5761122a611245565b5060010190565b6000826112405761124061125b565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461129d57600080fd5b5056fea264697066735822122052c2c58b5a1cdb0134b187e4c4ff57ef500d4ef9f9c01d05ad0f7530da06470364736f6c63430008000033";
