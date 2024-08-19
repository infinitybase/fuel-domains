/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.92.0
  Forc version: 0.61.2
  Fuel-Core version: 0.31.0
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot, DeployContractResult } from "fuels";
import type { AttestationContractAbi, AttestationContractAbiInterface } from "../AttestationContractAbi";

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
      "type": "enum AttestationContractError",
      "components": [
        {
          "name": "AttesterNotSet",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "AttesterMismatch",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "OnlyAttester",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "AttestationContractAlreadyInitialized",
          "type": 0,
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
          "type": 4,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        4
      ]
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
      "type": "struct Address",
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
      "typeId": 7,
      "type": "struct AttestationInput",
      "components": [
        {
          "name": "id",
          "type": 10,
          "typeArguments": null
        },
        {
          "name": "app",
          "type": 10,
          "typeArguments": null
        },
        {
          "name": "handle",
          "type": 10,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "struct Bytes",
      "components": [
        {
          "name": "buf",
          "type": 9,
          "typeArguments": null
        },
        {
          "name": "len",
          "type": 11,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "struct RawBytes",
      "components": [
        {
          "name": "ptr",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 11,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "struct String",
      "components": [
        {
          "name": "bytes",
          "type": 8,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "u64",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "input",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "attest",
      "output": {
        "name": "",
        "type": 1,
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
          "name": "attestation_key",
          "type": 1,
          "typeArguments": null
        }
      ],
      "name": "verify",
      "output": {
        "name": "",
        "type": 3,
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
      "inputs": [],
      "name": "attester",
      "output": {
        "name": "",
        "type": 6,
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
    },
    {
      "inputs": [
        {
          "name": "attester",
          "type": 6,
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
          "name": "attester",
          "type": 6,
          "typeArguments": null
        }
      ],
      "name": "set_attester",
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
    }
  ],
  "loggedTypes": [
    {
      "logId": "1004671090548225413",
      "loggedType": {
        "name": "",
        "type": 2,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "fd388485549fa81ed8a7f4bc1bb92f727835a30950371be0cabd903ba1bfad12",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export const AttestationContractAbi__factory = {
  abi: _abi,

  storageSlots: _storageSlots,

  createInterface(): AttestationContractAbiInterface {
    return new Interface(_abi) as unknown as AttestationContractAbiInterface
  },

  connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): AttestationContractAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as AttestationContractAbi
  },

  async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<AttestationContractAbi>> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    return factory.deployContract<AttestationContractAbi>({
      storageSlots: _storageSlots,
      ...options,
    });
  },
}
