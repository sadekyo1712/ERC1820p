# ERC1820 Pseudo-introspection Registry Contract (Quorum Version)
[![Solidity version](https://img.shields.io/badge/Solidity-v0.5.3-ff69b4.svg?style=flat-square&maxAge=3600)](https://solidity.readthedocs.io/en/v0.5.3/installing-solidity.html)
[![EIP](https://img.shields.io/badge/EIP-1820-lightgrey.svg?style=flat-square&maxAge=3600)](https://eips.ethereum.org/EIPS/eip-1820)

*Universal registry smart contract where any address (contract or regular account) can register which interface it supports and which smart contract is responsible for its implementation.*

> :information_source: **[ERC1820] has superseded [ERC820].** :information_source:  
> [ERC1820] fixes the incompatibility in the [ERC165] logic which was introduced by the Solidty 0.5 update.  
> Have a look at the [official announcement][erc1820-annoucement], and the comments about the [bug][erc820-bug] and the [fix][erc820-fix].  
> Apart from this fix, [ERC1820] is functionally equivalent to [ERC820].
>
> :warning: [ERC1820] MUST be used in lieu of [ERC820]. :warning:

## Proposal
The official proposal can be found at: [eips.ethereum.org/EIPS/eip-1820][ERC1820].

## ERC1820 Registry

This repository contains the official implementation of the [ERC1820 registry] as defined in the [standard][ERC1820].

The address of the registry on **all Quorum chains** (is contract has been deployed) is:

<h4><pre>0x1820D439E9cd08c54A455184186401dE5f9241ee</pre></h4>

## ERC1820 Implementer

The [ERC1820 implementer interface] is the interface any contract MUST implement if said contract implements an interface on behalf of another address via ERC1820.

## Compilation & Verification

> :warning: The `solc` compiler version `0.5.17+commit.d19bba13.Darwin.appleclang` must be present on the build machine. ([More info on installing solc][solc-install].)

The registry can be compiled from the source code using:

``` shell
npm run build
```

This will write the json artifacts for the registry in the `artifacts` folder and the standard output in the `build` folder.

### Verification

The address of the account creating the registry, the address of the registry and the raw signed transaction can be generated with:

``` shell
$ npm run info
> node js/info.js

RawTx:  0xf909608080830c35008080b90912608060405234801561001057600080fd5b506108f2806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a41e7d511161005b578063a41e7d51146101b7578063aabbb8ca146101ed578063b705676514610219578063f712f3e81461026357610088565b806329965a1d1461008d5780633d584063146100c55780635df8122f1461010757806365ba36c114610135575b600080fd5b6100c3600480360360608110156100a357600080fd5b506001600160a01b03813581169160208101359160409091013516610299565b005b6100eb600480360360208110156100db57600080fd5b50356001600160a01b031661050a565b604080516001600160a01b039092168252519081900360200190f35b6100c36004803603604081101561011d57600080fd5b506001600160a01b0381358116916020013516610554565b6101a56004803603602081101561014b57600080fd5b81019060208101813564010000000081111561016657600080fd5b82018360208201111561017857600080fd5b8035906020019184600183028401116401000000008311171561019a57600080fd5b50909250905061062d565b60408051918252519081900360200190f35b6100c3600480360360408110156101cd57600080fd5b5080356001600160a01b031690602001356001600160e01b031916610668565b6100eb6004803603604081101561020357600080fd5b506001600160a01b0381351690602001356106e5565b61024f6004803603604081101561022f57600080fd5b5080356001600160a01b031690602001356001600160e01b03191661075c565b604080519115158252519081900360200190f35b61024f6004803603604081101561027957600080fd5b5080356001600160a01b031690602001356001600160e01b0319166107fe565b60006001600160a01b038416156102b057836102b2565b335b9050336102be8261050a565b6001600160a01b03161461030b576040805162461bcd60e51b815260206004820152600f60248201526e2737ba103a34329036b0b730b3b2b960891b604482015290519081900360640190fd5b6103148361087c565b15610366576040805162461bcd60e51b815260206004820152601a60248201527f4d757374206e6f7420626520616e204552433136352068617368000000000000604482015290519081900360640190fd5b6001600160a01b0382161580159061038757506001600160a01b0382163314155b156104a657604051602001808073455243313832305f4143434550545f4d4147494360601b815250601401905060405160208183030381529060405280519060200120826001600160a01b031663249cb3fa85846040518363ffffffff1660e01b815260040180838152602001826001600160a01b03166001600160a01b031681526020019250505060206040518083038186803b15801561042857600080fd5b505afa15801561043c573d6000803e3d6000fd5b505050506040513d602081101561045257600080fd5b5051146104a6576040805162461bcd60e51b815260206004820181905260248201527f446f6573206e6f7420696d706c656d656e742074686520696e74657266616365604482015290519081900360640190fd5b6001600160a01b0381811660008181526020818152604080832088845290915280822080546001600160a01b0319169487169485179055518692917f93baa6efbd2244243bfee6ce4cfdd1d04fc4c0e9a786abd3a41313bd352db15391a450505050565b6001600160a01b0381811660009081526001602052604081205490911661053257508061054f565b506001600160a01b03808216600090815260016020526040902054165b919050565b3361055e8361050a565b6001600160a01b0316146105ab576040805162461bcd60e51b815260206004820152600f60248201526e2737ba103a34329036b0b730b3b2b960891b604482015290519081900360640190fd5b816001600160a01b0316816001600160a01b0316146105ca57806105cd565b60005b6001600160a01b0383811660008181526001602052604080822080546001600160a01b0319169585169590951790945592519184169290917f605c2dbf762e5f7d60a546d42e7205dcb1b011ebc62a61736a57c9089d3a43509190a35050565b600082826040516020018083838082843780830192505050925050506040516020818303038152906040528051906020012090505b92915050565b610672828261075c565b61067d57600061067f565b815b6001600160a01b039283166000818152602081815260408083206001600160e01b03199690961680845295825280832080546001600160a01b0319169590971694909417909555908152600284528181209281529190925220805460ff19166001179055565b6000806001600160a01b038416156106fd57836106ff565b335b905061070a8361087c565b15610730578261071a82826107fe565b610725576000610727565b815b92505050610662565b6001600160a01b0390811660009081526020818152604080832086845290915290205416905092915050565b60008080610771856301ffc9a760e01b610889565b9092509050811580610781575080155b1561079157600092505050610662565b6107a3856001600160e01b0319610889565b90925090508115806107b457508015155b156107c457600092505050610662565b6107ce8585610889565b90925090506001821480156107e35750806001145b156107f357600192505050610662565b506000949350505050565b6001600160a01b03821660009081526002602090815260408083206001600160e01b03198516845290915281205460ff166108445761083d838361075c565b9050610662565b506001600160a01b038083166000818152602081815260408083206001600160e01b0319871684529091529020549091161492915050565b6001600160e01b03161590565b6040516301ffc9a760e01b8082526004820183905260009182919060208160248189617530fa90519096909550935050505056fea265627a7a72315820d659070f37e229750a8d58b6901663b152856d3263b521f8283573e275016d2364736f6c634300051100321ba01820182018201820182018201820182018201820182018201820182018201820a01820182018201820182018201820182018201820182018201820182018201820
Sender:  0xf0039cFc4f72BDBffA9244FBbc09F19B3Aa8481a
Contract: 0x1820D439E9cd08c54A455184186401dE5f9241ee
```

Those values can be compared with the values in the [ERC1820 standard][ERC1820].

### Metadata

The metadata---for the registry only---can be extrated using:

``` shell
node scripts/extract_metadata.js
```

This metadata can also be compared with the formated version in the [ERC1820 standard][ERC1820].

### Vanity address

The vanity address of the registry---starting with `0x1820`---has been generated using the [`scripts/vanitygen.sh`] and [`scripts/vanitygen-info.js`] scripts.

## Original Authors
 - Jordi Baylina [@jbaylina][jbaylina]
 - Jacques Dafflon [@0xjac][0xjac]
 - Hung Bui [@sadekyo1712]

## License

> The [ERC1820 registry] is part of the  [ERC1820 standard][ERC1820] and is therefore in the public domain via [CC0].

The authors waive all copyright and related or neighboring rights for the rest of this repository's content via [CC0]. A copy of the [CC0] waiver is included in the [LICENSE] file.


[ERC165]: https://eips.ethereum.org/EIPS/eip-165
[ERC820]: https://eips.ethereum.org/EIPS/eip-820
[ERC1820]: https://eips.ethereum.org/EIPS/eip-1820
[ERC1820 registry]: https://github.com/0xjac/ERC1820/blob/master/contracts/ERC1820Registry.sol
[ERC1820 implementer interface]: https://github.com/0xjac/erc1820/blob/master/contracts/ERC1820ImplementerInterface.sol
[`scripts/vanitygen.sh`]: https://github.com/0xjac/erc1820/blob/master/scripts/vanitygen.sh
[`scripts/vanitygen-info.js`]: https://github.com/0xjac/erc1820/blob/master/scripts/vanitygen-info.js
[jbaylina]: https://github.com/jbaylina
[0xjac]: https://github.com/0xjac
[CC0]: http://creativecommons.org/publicdomain/zero/1.0/
[LICENSE]: https://github.com/0xjac/erc1820/blob/master/LICENSE
[solc-install]: https://solidity.readthedocs.io/en/v0.5.4/installing-solidity.html
[erc1820-annoucement]: https://github.com/ethereum/EIPs/issues/820#issuecomment-464109166
[erc820-bug]: https://github.com/ethereum/EIPs/issues/820#issuecomment-452465748
[erc820-fix]: https://github.com/ethereum/EIPs/issues/820#issuecomment-454021564

