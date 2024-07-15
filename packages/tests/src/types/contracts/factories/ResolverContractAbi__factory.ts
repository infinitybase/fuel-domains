/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.90.0
  Forc version: 0.60.0
  Fuel-Core version: 0.30.0
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot } from "fuels";
import type { ResolverContractAbi, ResolverContractAbiInterface } from "../ResolverContractAbi";

const _abi = {
  "encoding": "1",
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        4
      ]
    },
    {
      "typeId": 3,
      "type": "enum ResolverContractError",
      "components": [
        {
          "name": "AlreadyInitialized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "StorageNotInitialized",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "struct Bytes",
      "components": [
        {
          "name": "buf",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "len",
          "type": 10,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "struct ContractId",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "struct RawBytes",
      "components": [
        {
          "name": "ptr",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 10,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "struct String",
      "components": [
        {
          "name": "bytes",
          "type": 6,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "storage_id",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "constructor",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "name",
          "type": 9,
          "typeArguments": null
        }
      ],
      "name": "owner",
      "output": {
        "name": "",
        "type": 2,
        "typeArguments": [
          {
            "name": "",
            "type": 1,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "name",
          "type": 9,
          "typeArguments": null
        }
      ],
      "name": "resolver",
      "output": {
        "name": "",
        "type": 2,
        "typeArguments": [
          {
            "name": "",
            "type": 1,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "address",
          "type": 1,
          "typeArguments": null
        }
      ],
      "name": "name",
      "output": {
        "name": "",
        "type": 9,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": "16258305334599345639",
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "8ecd865d933483a43363a1a3babfd71cbc3ade9a24d8d98b7c62fdcf4f5fdbce",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "8ecd865d933483a43363a1a3babfd71cbc3ade9a24d8d98b7c62fdcf4f5fdbcf",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "b61e266e75c64ac989315805e532e6125db4ee10ad42b2038897cf0ff4ec740a",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export const ResolverContractAbi__factory = {
  abi: _abi,

  storageSlots: _storageSlots,

  createInterface(): ResolverContractAbiInterface {
    return new Interface(_abi) as unknown as ResolverContractAbiInterface
  },

  connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): ResolverContractAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as ResolverContractAbi
  },

  async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<ResolverContractAbi> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    const contract = await factory.deployContract({
      storageSlots: _storageSlots,
      ...options,
    });

    return contract as unknown as ResolverContractAbi;
  }
}
