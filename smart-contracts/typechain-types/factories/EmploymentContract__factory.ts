/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  EmploymentContract,
  EmploymentContractInterface,
} from "../EmploymentContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_employer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_employee",
        type: "address",
      },
      {
        internalType: "uint48",
        name: "_startDate",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "_endDate",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "_salaryPerMonth",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "_totalSickDays",
        type: "uint48",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "reciever",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SickLeaveTransaction",
    type: "event",
  },
  {
    inputs: [],
    name: "activateContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "employee",
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
    inputs: [],
    name: "employer",
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
    inputs: [],
    name: "endDate",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "head",
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
    inputs: [],
    name: "isActive",
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
    name: "isContractActive",
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
    name: "paySalary",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_index",
        type: "uint8",
      },
    ],
    name: "paySickLeave",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "_startDate",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "_endDate",
        type: "uint48",
      },
    ],
    name: "requestSickLeave",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "salary",
    outputs: [
      {
        internalType: "uint48",
        name: "salaryPerMonth",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sickLeave",
    outputs: [
      {
        internalType: "uint48",
        name: "totalDays",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "usedDays",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "startDate",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "terminateContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523461003657610020610014610176565b949390939291926109ee565b61002861003b565b611687610ab2823961168790f35b610041565b60405190565b600080fd5b601f801991011690565b634e487b7160e01b600052604160045260246000fd5b9061007090610046565b810190811060018060401b0382111761008857604052565b610050565b906100a061009961003b565b9283610066565b565b600080fd5b60018060a01b031690565b6100bb906100a7565b90565b6100c7816100b2565b036100ce57565b600080fd5b905051906100e0826100be565b565b65ffffffffffff1690565b6100f6816100e2565b036100fd57565b600080fd5b9050519061010f826100ed565b565b909160c0828403126101715761012a83600084016100d3565b9261013881602085016100d3565b926101468260408301610102565b9261016e6101578460608501610102565b936101658160808601610102565b9360a001610102565b90565b6100a2565b610194612139803803806101898161008d565b928339810190610111565b909192939495565b60001b90565b906101b360018060a01b039161019c565b9181191691161790565b90565b6101d46101cf6101d9926100a7565b6101bd565b6100a7565b90565b6101e5906101c0565b90565b6101f1906101dc565b90565b90565b9061020c610207610213926101e8565b6101f4565b82546101a2565b9055565b60a01b90565b9061023165ffffffffffff60a01b91610217565b9181191691161790565b61024f61024a610254926100e2565b6101bd565b6100e2565b90565b90565b9061026f61026a6102769261023b565b610257565b825461021d565b9055565b60d01b90565b9061028f60ff60d01b9161027a565b9181191691161790565b151590565b6102a790610299565b90565b90565b906102c26102bd6102c99261029e565b6102aa565b8254610280565b9055565b606090565b6102dc604061008d565b90565b906102e9906100e2565b9052565b52565b634e487b7160e01b600052600060045260246000fd5b61031090516100e2565b90565b9061032465ffffffffffff9161019c565b9181191691161790565b9061034361033e61034a9261023b565b610257565b8254610313565b9055565b5190565b5490565b90565b634e487b7160e01b600052601160045260246000fd5b61037e61038491939293610356565b92610356565b91610390838202610356565b92818404149015171561039f57565b610359565b60059060018203010490565b600052602060002090565b1b90565b919060086103db9102916103d5600019846103bb565b926103bb565b9181191691161790565b6103f96103f46103fe92610356565b6101bd565b610356565b90565b90565b919061041a610415610422936103e5565b610401565b9083546103bf565b9055565b600090565b61043d91610437610426565b91610404565b565b5b81811061044b575050565b80610459600060019361042b565b01610440565b1c90565b90610477906000199060200360080261045f565b8154169055565b91909182821061048e575b505050565b6006600561049e6104c7956103a4565b6104b06104aa866103a4565b946103b0565b9384019301930602600081116104cf575b5061043f565b388080610489565b6104dc9060018303610463565b386104c1565b9068010000000000000000811161050b578161050061050993610352565b9082815561047e565b565b610050565b5190565b60200190565b9190600861053a91029161053465ffffffffffff846103bb565b926103bb565b9181191691161790565b9061054e81610510565b9060018060401b038211610636576105726105789161056d84866104e2565b610514565b926103b0565b600582049160005b8381106105ec57506005830290036000811161059d575b50505050565b9260009360005b8181106105b957505050015538808080610597565b90919460206105e06001926105d56105d08a610306565b610257565b90856006029061051a565b960191019190916105a4565b6000805b600581106106075750906001918185015501610580565b9590602061062d60019261062261061d86610306565b610257565b908a6006029061051a565b920196016105f0565b610050565b9061064591610544565b565b906106746020600161067a9461066c6000820161066660008801610306565b9061032e565b01920161034e565b9061063b565b565b9061068691610647565b565b606090565b610697606061008d565b90565b90565b6106b16106ac6106b69261069a565b6101bd565b6100e2565b90565b52565b60301b90565b906106d96bffffffffffff000000000000916106bc565b9181191691161790565b906106f86106f36106ff9261023b565b610257565b82546106c2565b9055565b5190565b60200190565b5490565b61071c90600361036f565b90565b600052602060002090565b60026000918280820155610741836001830161042b565b0155565b90600003610758576107569061072a565b565b6102f0565b5b818110610769575050565b806107776000600393610745565b0161075e565b909182811061078c575b505050565b6107aa6107a461079e6107b595610711565b92610711565b9261071f565b91820191019061075d565b388080610787565b906801000000000000000081116107e657816107db6107e49361070d565b9082815561077d565b565b610050565b5190565b5190565b6107fd9051610356565b90565b9061080d6000199161019c565b9181191691161790565b9061082c610827610833926103e5565b610401565b8254610800565b9055565b634e487b7160e01b600052602160045260246000fd5b6003111561085757565b610837565b906108668261084d565b565b610872905161085c565b90565b9061088160ff9161019c565b9181191691161790565b6108949061085c565b90565b90565b906108af6108aa6108b69261088b565b610897565b8254610875565b9055565b906109196060600261091f946108df600082016108d960008801610306565b9061032e565b6108f8600082016108f260208801610306565b906106e3565b6109116001820161090b604088016107f3565b90610817565b019201610868565b9061089a565b565b9061092b916108ba565b565b61095261094c61093c846107eb565b9361094785856107bd565b610707565b9161071f565b6000915b8383106109635750505050565b600360208261097c6109766001956107ef565b86610921565b01920192019190610956565b906109929161092d565b565b906109da604060016109e0946109b9600082016109b360008801610306565b9061032e565b6109d2600082016109cc60208801610306565b906106e3565b019201610703565b90610988565b565b906109ec91610994565b565b92610a26610aaf969593610a1f610a2d94610a18610a6998610a113360006101f7565b60016101f7565b60026101f7565b600261025a565b600061025a565b610a39600160026102ad565b610a62610a446102cd565b610a59610a4f6102d2565b93600085016102df565b602083016102ed565b600361067c565b610aa8610a74610688565b610a9f610a966000610a91610a8761068d565b96600088016102df565b61069d565b602085016102df565b604083016106b9565b60056109e2565b56fe60806040526004361015610013575b6106ad565b61001e6000356100fd565b80630397b652146100f85780630b97bc86146100f357806322f3e2d4146100ee5780632fd949ca146100e95780636e4c5a5b146100e45780638f5949f9146100df5780638f7dcfa3146100da5780638fda356d146100d5578063a0a1a7d7146100d0578063a5708f94146100cb578063ae200e79146100c6578063b2bf849a146100c1578063c24a0f8b146100bc5763cc81a3b30361000e57610677565b6105da565b610596565b61050f565b6104d6565b6104a1565b61045e565b610429565b61037b565b610352565b6102d6565b61029b565b610202565b610193565b60e01c90565b60405190565b600080fd5b600080fd5b600091031261011e57565b61010e565b60001c90565b65ffffffffffff1690565b61014061014591610123565b610129565b90565b6101529054610134565b90565b6101626000600301610148565b90565b65ffffffffffff1690565b61017990610165565b9052565b919061019190600060208501940190610170565b565b346101c3576101a3366004610113565b6101bf6101ae610155565b6101b6610103565b9182918261017d565b0390f35b610109565b1c90565b6101dc9060086101e193026101c8565b610129565b90565b906101ef91546101cc565b90565b6101ff60026014906101e4565b90565b3461023257610212366004610113565b61022e61021d6101f2565b610225610103565b9182918261017d565b0390f35b610109565b60ff1690565b61024d90600861025293026101c8565b610237565b90565b90610260915461023d565b90565b6102706002601a90610255565b90565b151590565b61028190610273565b9052565b919061029990600060208501940190610278565b565b346102cb576102ab366004610113565b6102c76102b6610263565b6102be610103565b91829182610285565b0390f35b610109565b60000190565b34610304576102e6366004610113565b6102ee610811565b6102f6610103565b80610300816102d0565b0390f35b610109565b60ff1690565b61031881610309565b0361031f57565b600080fd5b905035906103318261030f565b565b9060208282031261034d5761034a91600001610324565b90565b61010e565b610365610360366004610333565b610d0e565b61036d610103565b80610377816102d0565b0390f35b346103ab5761038b366004610113565b6103a7610396610d1e565b61039e610103565b91829182610285565b0390f35b610109565b60018060a01b031690565b6103cb9060086103d093026101c8565b6103b0565b90565b906103de91546103bb565b90565b6103ec6000806103d3565b90565b60018060a01b031690565b610403906103ef565b90565b61040f906103fa565b9052565b919061042790600060208501940190610406565b565b3461045957610439366004610113565b6104556104446103e1565b61044c610103565b91829182610413565b0390f35b610109565b3461048c5761046e366004610113565b610476610de3565b61047e610103565b80610488816102d0565b0390f35b610109565b61049e60026000906103d3565b90565b346104d1576104b1366004610113565b6104cd6104bc610491565b6104c4610103565b91829182610413565b0390f35b610109565b6104e1366004610113565b6104e9610f6a565b6104f1610103565b806104fb816102d0565b0390f35b61050c60016000906103d3565b90565b3461053f5761051f366004610113565b61053b61052a6104ff565b610532610103565b91829182610413565b0390f35b610109565b61054d81610165565b0361055457565b600080fd5b9050359061056682610544565b565b9190604083820312610591578061058561058e9260008601610559565b93602001610559565b90565b61010e565b346105c5576105af6105a9366004610568565b90611519565b6105b7610103565b806105c1816102d0565b0390f35b610109565b6105d760006014906101e4565b90565b3461060a576105ea366004610113565b6106066105f56105ca565b6105fd610103565b9182918261017d565b0390f35b610109565b60301c90565b6106216106269161060f565b610129565b90565b6106339054610615565b90565b6005906106506000610649818501610148565b9301610629565b90565b91602061067592949361066e60408201966000830190610170565b0190610170565b565b346106a857610687366004610113565b61068f610636565b906106a461069b610103565b92839283610653565b0390f35b610109565b600080fd5b6106be6106c391610123565b6103b0565b90565b6106d090546106b2565b90565b60209181520190565b60207f697320616374696f6e0000000000000000000000000000000000000000000000917f4f6e6c792074686520656d706c6f7965722063616e20706572666f726d20746860008201520152565b61073760296040926106d3565b610740816106dc565b0190565b61075a906020810190600081830391015261072a565b90565b1561076457565b61076c610103565b62461bcd60e51b81528061078260048201610744565b0390fd5b6107ab336107a561079f61079a60016106c6565b6103fa565b916103fa565b1461075d565b6107b3610803565b565b60d01b90565b906107ca60ff60d01b916107b5565b9181191691161790565b6107dd90610273565b90565b90565b906107f86107f36107ff926107d4565b6107e0565b82546107bb565b9055565b61080f600060026107e3565b565b610819610786565b565b610849906108443361083e61083861083360016106c6565b6103fa565b916103fa565b1461075d565b6108f6565b565b60d01c90565b61085d6108629161084b565b610237565b90565b61086f9054610851565b90565b60007f436f6e7472616374206973206e6f742061637469766500000000000000000000910152565b6108a760166020926106d3565b6108b081610872565b0190565b6108ca906020810190600081830391015261089a565b90565b156108d457565b6108dc610103565b62461bcd60e51b8152806108f2600482016108b4565b0390fd5b6109119061090c6109076002610865565b6108cd565b610c2a565b565b634e487b7160e01b600052603260045260246000fd5b5490565b600052602060002090565b61094181610929565b82101561095c5761095360039161092d565b91020190600090565b610913565b9061096b90610165565b9052565b90565b61097e61098391610123565b61096f565b90565b6109909054610972565b90565b90565b906109a090610993565b9052565b60ff1690565b6109b66109bb91610123565b6109a4565b90565b6109c890546109aa565b90565b634e487b7160e01b600052602160045260246000fd5b600311156109eb57565b6109cb565b906109fa826109e1565b565b90610a06906109f0565b9052565b601f801991011690565b634e487b7160e01b600052604160045260246000fd5b90610a3490610a0a565b810190811067ffffffffffffffff821117610a4e57604052565b610a14565b90610a66610a5f610103565b9283610a2a565b565b610a726080610a53565b90565b90610ade610ad56002610a86610a68565b94610a9f610a9660008301610148565b60008801610961565b610ab7610aae60008301610629565b60208801610961565b610acf610ac660018301610986565b60408801610996565b016109be565b606084016109fc565b565b610ae990610a75565b90565b610af690516109f0565b90565b60007f5369636b206c656176652077696c6c20626520696e2070656e64696e67000000910152565b610b2e601d6020926106d3565b610b3781610af9565b0190565b610b519060208101906000818303910152610b21565b90565b15610b5b57565b610b63610103565b62461bcd60e51b815280610b7960048201610b3b565b0390fd5b90565b610b94610b8f610b99926103ef565b610b7d565b6103ef565b90565b610ba590610b80565b90565b610bb190610b9c565b90565b610bbd90610b80565b90565b610bc990610bb4565b90565b610bd69051610993565b90565b610be1610103565b3d6000823e3d90fd5b610bf390610993565b9052565b604090610c21610c289496959396610c1760608401986000850190610406565b6020830190610406565b0190610bea565b565b610c3b610c41916001600501610938565b50610ae0565b610c69610c5060608301610aec565b610c63610c5d60006109f0565b916109f0565b14610b54565b6000808080610c88610c83610c7e60016106c6565b610ba8565b610bc0565b610c9460408701610bcc565b90828215610d05575bf115610d0057610cad60016106c6565b90610cc46040610cbd60026106c6565b9201610bcc565b91610cfb7f4777c503c13bce5021c03ce8ad65c9acc5614b088498ccdd4f4abdb5981698ff93610cf2610103565b93849384610bf7565b0390a1565b610bd9565b506108fc610c9d565b610d179061081b565b565b600090565b610d26610d19565b50610d316002610865565b90565b610d3d90610bb4565b90565b90565b610d57610d52610d5c92610d40565b610b7d565b610993565b90565b60007f496e73756666696369656e742062616c616e6365000000000000000000000000910152565b610d9460146020926106d3565b610d9d81610d5f565b0190565b610db79060208101906000818303910152610d87565b90565b15610dc157565b610dc9610103565b62461bcd60e51b815280610ddf60048201610da1565b0390fd5b610e0a610def30610d34565b31610e03610dfd60c8610d43565b91610993565b1015610dba565b610e16600160026107e3565b565b610e3d33610e37610e31610e2c60016106c6565b6103fa565b916103fa565b1461075d565b610e45610e47565b565b610e59610e546002610865565b6108cd565b610e61610f03565b565b610e77610e72610e7c92610165565b610b7d565b610993565b90565b60007f496e636f72726563742073616c61727920616d6f756e74000000000000000000910152565b610eb460176020926106d3565b610ebd81610e7f565b0190565b610ed79060208101906000818303910152610ea7565b90565b15610ee157565b610ee9610103565b62461bcd60e51b815280610eff60048201610ec1565b0390fd5b610f2b34610f25610f1f610f1a6000600301610148565b610e63565b91610993565b14610eda565b6000808080610f4a610f45610f4060026106c6565b610ba8565b610bc0565b3490828215610f61575bf115610f5c57565b610bd9565b506108fc610f54565b610f72610e18565b565b634e487b7160e01b600052601160045260246000fd5b610f96610f9c91610165565b91610165565b90039065ffffffffffff8211610fae57565b610f74565b90565b610fca610fc5610fcf92610fb3565b610b7d565b610165565b90565b634e487b7160e01b600052601260045260246000fd5b610ff4610ffa91610165565b91610165565b908115611005570490565b610fd2565b60207f636b206c65617665000000000000000000000000000000000000000000000000917f4f6e6c792074686520656d706c6f7965652063616e207265717565737420736960008201520152565b61106560286040926106d3565b61106e8161100a565b0190565b6110889060208101906000818303910152611058565b90565b1561109257565b61109a610103565b62461bcd60e51b8152806110b060048201611072565b0390fd5b60007f5374617274446174652073686f756c6420626520696e20666561747572650000910152565b6110e9601e6020926106d3565b6110f2816110b4565b0190565b61110c90602081019060008183039101526110dc565b90565b1561111657565b61111e610103565b62461bcd60e51b815280611134600482016110f6565b0390fd5b60207f7461727444617465000000000000000000000000000000000000000000000000917f456e64446174652073686f756c642062652067726561746572207468616e205360008201520152565b61119360286040926106d3565b61119c81611138565b0190565b6111b69060208101906000818303910152611186565b90565b156111c057565b6111c8610103565b62461bcd60e51b8152806111de600482016111a0565b0390fd5b60007f457863656564696e67207369636b206c65617665206461797300000000000000910152565b61121760196020926106d3565b611220816111e2565b0190565b61123a906020810190600081830391015261120a565b90565b1561124457565b61124c610103565b62461bcd60e51b81528061126260048201611224565b0390fd5b90565b61127d61127861128292611266565b610b7d565b610993565b90565b61129461129a91939293610993565b92610993565b916112a6838202610993565b9281840414901517156112b557565b610f74565b6112c46080610a53565b90565b90565b600052602060002090565b5490565b6112e2816112d5565b8210156112fd576112f46003916112ca565b91020190600090565b610913565b634e487b7160e01b600052600060045260246000fd5b6113229051610165565b90565b60001b90565b9061133c65ffffffffffff91611325565b9181191691161790565b61135a61135561135f92610165565b610b7d565b610165565b90565b90565b9061137a61137561138192611346565b611362565b825461132b565b9055565b60301b90565b906113a26bffffffffffff00000000000091611385565b9181191691161790565b906113c16113bc6113c892611346565b611362565b825461138b565b9055565b906113d960001991611325565b9181191691161790565b6113f76113f26113fc92610993565b610b7d565b610993565b90565b90565b9061141761141261141e926113e3565b6113ff565b82546113cc565b9055565b9061142e60ff91611325565b9181191691161790565b611441906109f0565b90565b90565b9061145c61145761146392611438565b611444565b8254611422565b9055565b906114c6606060026114cc9461148c6000820161148660008801611318565b90611365565b6114a56000820161149f60208801611318565b906113ac565b6114be600182016114b860408801610bcc565b90611402565b019201610aec565b90611447565b565b91906114df576114dd91611467565b565b611302565b9081549168010000000000000000831015611514578261150c916001611512950181556112d9565b906114ce565b565b610a14565b9061163d61164f9261163461160761154f61154a611538878690610f8a565b61154462015180610fb6565b90610fe8565b610e63565b926115f661157e6115796115666000600501610148565b6115736000600501610629565b90610f8a565b610e63565b6115a33361159d61159761159260026106c6565b6103fa565b916103fa565b1461108b565b6115c0426115b96115b386610e63565b91610993565b111561110f565b6115dc886115d66115d086610165565b91610165565b116111b9565b6115ef6115e98792610993565b91610993565b111561123d565b94926116026001611269565b611285565b61162b6000936116226116186112ba565b9760008901610961565b60208701610961565b60408501610996565b606083016109fc565b61164a60016005016112c7565b6114e4565b56fea264697066735822122028f93f27dd85ff97680089fbbd6ada7e4cf2a5f7421ce0e4f5123cd67b3e3e7764736f6c634300081c0033";

type EmploymentContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EmploymentContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EmploymentContract__factory extends ContractFactory {
  constructor(...args: EmploymentContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _employer: AddressLike,
    _employee: AddressLike,
    _startDate: BigNumberish,
    _endDate: BigNumberish,
    _salaryPerMonth: BigNumberish,
    _totalSickDays: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _employer,
      _employee,
      _startDate,
      _endDate,
      _salaryPerMonth,
      _totalSickDays,
      overrides || {}
    );
  }
  override deploy(
    _employer: AddressLike,
    _employee: AddressLike,
    _startDate: BigNumberish,
    _endDate: BigNumberish,
    _salaryPerMonth: BigNumberish,
    _totalSickDays: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _employer,
      _employee,
      _startDate,
      _endDate,
      _salaryPerMonth,
      _totalSickDays,
      overrides || {}
    ) as Promise<
      EmploymentContract & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EmploymentContract__factory {
    return super.connect(runner) as EmploymentContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EmploymentContractInterface {
    return new Interface(_abi) as EmploymentContractInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): EmploymentContract {
    return new Contract(address, _abi, runner) as unknown as EmploymentContract;
  }
}
