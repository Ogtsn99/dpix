/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DPixNFT } from "../DPixNFT";

export class DPixNFT__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): Promise<DPixNFT> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<DPixNFT>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  attach(address: string): DPixNFT {
    return super.attach(address) as DPixNFT;
  }
  connect(signer: Signer): DPixNFT__factory {
    return super.connect(signer) as DPixNFT__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DPixNFT {
    return new Contract(address, _abi, signerOrProvider) as DPixNFT;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "SetCreator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
    ],
    name: "SetTokenURI",
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
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "creatorOf",
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
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenURI_",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [],
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
    inputs: [],
    name: "tokenCount",
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
        name: "_tokenId",
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
  "0x608060405260006006553480156200001657600080fd5b5060405162001862380380620018628339810160408190526200003991620001c4565b8151829082906200005290600090602085019062000073565b5080516200006890600190602084019062000073565b50505050506200027e565b82805462000081906200022b565b90600052602060002090601f016020900481019282620000a55760008555620000f0565b82601f10620000c057805160ff1916838001178555620000f0565b82800160010185558215620000f0579182015b82811115620000f0578251825591602001919060010190620000d3565b50620000fe92915062000102565b5090565b5b80821115620000fe576000815560010162000103565b600082601f8301126200012a578081fd5b81516001600160401b038082111562000147576200014762000268565b6040516020601f8401601f19168201810183811183821017156200016f576200016f62000268565b604052838252858401810187101562000186578485fd5b8492505b83831015620001a957858301810151828401820152918201916200018a565b83831115620001ba57848185840101525b5095945050505050565b60008060408385031215620001d7578182fd5b82516001600160401b0380821115620001ee578384fd5b620001fc8683870162000119565b9350602085015191508082111562000212578283fd5b50620002218582860162000119565b9150509250929050565b6002810460018216806200024057607f821691505b602082108114156200026257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6115d4806200028e6000396000f3fe608060405234801561001057600080fd5b50600436106100e05760003560e01c806370a082311161008757806370a08231146101a457806395d89b41146101c45780639f181b5e146101cc578063a22cb465146101d4578063b88d4fde146101e7578063c87b56dd146101fa578063d0def5211461020d578063e985e9c514610220576100e0565b806301ffc9a7146100e557806306fdde031461010e578063081812fc14610123578063095ea7b31461014357806323b872dd1461015857806342842e0e1461016b578063589a17431461017e5780636352211e14610191575b600080fd5b6100f86100f3366004610f32565b610233565b60405161010591906110ae565b60405180910390f35b61011661027b565b60405161010591906110b9565b610136610131366004610f6a565b61030d565b604051610105919061105d565b610156610151366004610f09565b610359565b005b610156610166366004610dbc565b6103f1565b610156610179366004610dbc565b610429565b61013661018c366004610f6a565b610444565b61013661019f366004610f6a565b61045f565b6101b76101b2366004610d70565b610494565b60405161010591906114ae565b6101166104d8565b6101b76104e7565b6101566101e2366004610e70565b6104ed565b6101566101f5366004610df7565b6105bb565b610116610208366004610f6a565b6105fa565b61015661021b366004610eaa565b610687565b6100f861022e366004610d8a565b61070a565b60006001600160e01b031982166380ac58cd60e01b148061026457506001600160e01b03198216635b5e139f60e01b145b80610273575061027382610738565b90505b919050565b60606000805461028a9061151e565b80601f01602080910402602001604051908101604052809291908181526020018280546102b69061151e565b80156103035780601f106102d857610100808354040283529160200191610303565b820191906000526020600020905b8154815290600101906020018083116102e657829003601f168201915b5050505050905090565b600061031882610751565b61033d5760405162461bcd60e51b815260040161033490611338565b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006103648261045f565b9050806001600160a01b0316836001600160a01b031614156103985760405162461bcd60e51b81526004016103349061141c565b806001600160a01b03166103aa61076e565b6001600160a01b031614806103c657506103c68161022e61076e565b6103e25760405162461bcd60e51b815260040161033490611218565b6103ec8383610772565b505050565b6104026103fc61076e565b826107e0565b61041e5760405162461bcd60e51b81526004016103349061145d565b6103ec838383610865565b6103ec838383604051806020016040528060008152506105bb565b6000908152600760205260409020546001600160a01b031690565b6000818152600260205260408120546001600160a01b0316806102735760405162461bcd60e51b8152600401610334906112ba565b60006001600160a01b0382166104bc5760405162461bcd60e51b815260040161033490611270565b506001600160a01b031660009081526003602052604090205490565b60606001805461028a9061151e565b60065481565b6104f561076e565b6001600160a01b0316826001600160a01b031614156105265760405162461bcd60e51b815260040161033490611199565b806005600061053361076e565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff19169215159290921790915561057761076e565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516105af91906110ae565b60405180910390a35050565b6105cc6105c661076e565b836107e0565b6105e85760405162461bcd60e51b81526004016103349061145d565b6105f484848484610992565b50505050565b606061060582610751565b6106215760405162461bcd60e51b8152600401610334906113cd565b600061062b6109c5565b9050600081511161064b5760405180602001604052806000815250610680565b8060086000858152602001908152602001600020604051602001610670929190610fae565b6040516020818303038152906040525b9392505050565b610693826006546109f4565b61069f60065482610ad3565b6006805460009081526007602052604080822080546001600160a01b031916339081179091559254905190917f02df56823aeec019d75f2c2396e2a9c68868b26ccc5a4cd9412b2a78f8602f7391a360016006600082825461070191906114c3565b90915550505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6001600160e01b031981166301ffc9a760e01b14919050565b6000908152600260205260409020546001600160a01b0316151590565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906107a78261045f565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006107eb82610751565b6108075760405162461bcd60e51b8152600401610334906111cc565b60006108128361045f565b9050806001600160a01b0316846001600160a01b0316148061084d5750836001600160a01b03166108428461030d565b6001600160a01b0316145b8061085d575061085d818561070a565b949350505050565b826001600160a01b03166108788261045f565b6001600160a01b03161461089e5760405162461bcd60e51b815260040161033490611384565b6001600160a01b0382166108c45760405162461bcd60e51b815260040161033490611155565b6108cf8383836103ec565b6108da600082610772565b6001600160a01b03831660009081526003602052604081208054600192906109039084906114db565b90915550506001600160a01b03821660009081526003602052604081208054600192906109319084906114c3565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b61099d848484610865565b6109a984848484610b2f565b6105f45760405162461bcd60e51b8152600401610334906110cc565b60408051808201909152601581527468747470733a2f2f697066732e696f2f697066732f60581b602082015290565b6001600160a01b038216610a1a5760405162461bcd60e51b815260040161033490611303565b610a2381610751565b15610a405760405162461bcd60e51b81526004016103349061111e565b610a4c600083836103ec565b6001600160a01b0382166000908152600360205260408120805460019290610a759084906114c3565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60008281526008602090815260409091208251610af292840190610c50565b50817fd2d827dddfc9c9a02afc5fc68d3251684b36e213a7999ebd90a861f25df4077e82604051610b2391906110b9565b60405180910390a25050565b6000610b43846001600160a01b0316610c4a565b15610c3f57836001600160a01b031663150b7a02610b5f61076e565b8786866040518563ffffffff1660e01b8152600401610b819493929190611071565b602060405180830381600087803b158015610b9b57600080fd5b505af1925050508015610bcb575060408051601f3d908101601f19168201909252610bc891810190610f4e565b60015b610c25573d808015610bf9576040519150601f19603f3d011682016040523d82523d6000602084013e610bfe565b606091505b508051610c1d5760405162461bcd60e51b8152600401610334906110cc565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061085d565b506001949350505050565b3b151590565b828054610c5c9061151e565b90600052602060002090601f016020900481019282610c7e5760008555610cc4565b82601f10610c9757805160ff1916838001178555610cc4565b82800160010185558215610cc4579182015b82811115610cc4578251825591602001919060010190610ca9565b50610cd0929150610cd4565b5090565b5b80821115610cd05760008155600101610cd5565b600067ffffffffffffffff80841115610d0457610d0461156f565b604051601f8501601f191681016020018281118282101715610d2857610d2861156f565b604052848152915081838501861015610d4057600080fd5b8484602083013760006020868301015250509392505050565b80356001600160a01b038116811461027657600080fd5b600060208284031215610d81578081fd5b61068082610d59565b60008060408385031215610d9c578081fd5b610da583610d59565b9150610db360208401610d59565b90509250929050565b600080600060608486031215610dd0578081fd5b610dd984610d59565b9250610de760208501610d59565b9150604084013590509250925092565b60008060008060808587031215610e0c578081fd5b610e1585610d59565b9350610e2360208601610d59565b925060408501359150606085013567ffffffffffffffff811115610e45578182fd5b8501601f81018713610e55578182fd5b610e6487823560208401610ce9565b91505092959194509250565b60008060408385031215610e82578182fd5b610e8b83610d59565b915060208301358015158114610e9f578182fd5b809150509250929050565b60008060408385031215610ebc578182fd5b610ec583610d59565b9150602083013567ffffffffffffffff811115610ee0578182fd5b8301601f81018513610ef0578182fd5b610eff85823560208401610ce9565b9150509250929050565b60008060408385031215610f1b578182fd5b610f2483610d59565b946020939093013593505050565b600060208284031215610f43578081fd5b813561068081611585565b600060208284031215610f5f578081fd5b815161068081611585565b600060208284031215610f7b578081fd5b5035919050565b60008151808452610f9a8160208601602086016114f2565b601f01601f19169290920160200192915050565b600083516020610fc182858389016114f2565b845491840191839060028104600180831680610fde57607f831692505b858310811415610ffc57634e487b7160e01b88526022600452602488fd5b80801561101057600181146110215761104d565b60ff1985168852838801955061104d565b61102a8b6114b7565b895b858110156110455781548a82015290840190880161102c565b505083880195505b50939a9950505050505050505050565b6001600160a01b0391909116815260200190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906110a490830184610f82565b9695505050505050565b901515815260200190565b6000602082526106806020830184610f82565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252601c908201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604082015260600190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526019908201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776040820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604082015269726f206164647265737360b01b606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201526832b73a103a37b5b2b760b91b606082015260800190565b6020808252818101527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260600190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526029908201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960408201526839903737ba1037bbb760b91b606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201526e3732bc34b9ba32b73a103a37b5b2b760891b606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656040820152603960f91b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b90815260200190565b60009081526020902090565b600082198211156114d6576114d6611559565b500190565b6000828210156114ed576114ed611559565b500390565b60005b8381101561150d5781810151838201526020016114f5565b838111156105f45750506000910152565b60028104600182168061153257607f821691505b6020821081141561155357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461159b57600080fd5b5056fea264697066735822122068b41cf67f7227567f7b2d75896096112aac14ade0efa45ac5a63f5eda35c31364736f6c63430008000033";