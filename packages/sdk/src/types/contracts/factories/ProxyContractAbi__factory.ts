/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.71.1
  Forc version: 0.48.1
  Fuel-Core version: 0.22.0
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot } from "fuels";
import type { ProxyContractAbi, ProxyContractAbiInterface } from "../ProxyContractAbi";

const _abi = {
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
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 10,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 6,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        6
      ]
    },
    {
      "typeId": 4,
      "type": "enum Permission",
      "components": [
        {
          "name": "Authorized",
          "type": 2,
          "typeArguments": null
        },
        {
          "name": "Unauthorized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "NotFound",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "enum StorageContractError",
      "components": [
        {
          "name": "AlreadyInitialized",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "struct Address",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "struct Bytes",
      "components": [
        {
          "name": "buf",
          "type": 11,
          "typeArguments": null
        },
        {
          "name": "len",
          "type": 12,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "struct ContractId",
      "components": [
        {
          "name": "value",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "struct RawBytes",
      "components": [
        {
          "name": "ptr",
          "type": 7,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 12,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 12,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "owner",
          "type": 8,
          "typeArguments": null
        },
        {
          "name": "registry_id",
          "type": 10,
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
          "name": "key",
          "type": 1,
          "typeArguments": null
        }
      ],
      "name": "get",
      "output": {
        "name": "",
        "type": 3,
        "typeArguments": [
          {
            "name": "",
            "type": 9,
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
      "inputs": [],
      "name": "get_implementation",
      "output": {
        "name": "",
        "type": 3,
        "typeArguments": [
          {
            "name": "",
            "type": 10,
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
      "inputs": [],
      "name": "get_owner",
      "output": {
        "name": "",
        "type": 3,
        "typeArguments": [
          {
            "name": "",
            "type": 8,
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
          "name": "key",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "bytes_domain",
          "type": 9,
          "typeArguments": null
        }
      ],
      "name": "set",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "registry_id",
          "type": 10,
          "typeArguments": null
        }
      ],
      "name": "set_implementation",
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
          "name": "owner",
          "type": 8,
          "typeArguments": null
        }
      ],
      "name": "set_owner",
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
    }
  ],
  "loggedTypes": [
    {
      "logId": 0,
      "loggedType": {
        "name": "",
        "type": 5,
        "typeArguments": []
      }
    },
    {
      "logId": 1,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 2,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 3,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 4,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 5,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 6,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": 7,
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "f383b0ce51358be57daa3b725fe44acdb2d880604e367199080b4379c41bb6ed",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export class ProxyContractAbi__factory {
  static readonly abi = _abi;

  static readonly storageSlots = _storageSlots;

  static createInterface(): ProxyContractAbiInterface {
    return new Interface(_abi) as unknown as ProxyContractAbiInterface
  }

  static connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): ProxyContractAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as ProxyContractAbi
  }

  static async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<ProxyContractAbi> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    const { storageSlots } = ProxyContractAbi__factory;

    const contract = await factory.deployContract({
      storageSlots,
      ...options,
    });

    return contract as unknown as ProxyContractAbi;
  }
}
