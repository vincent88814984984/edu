export const personContractAddress = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";
export const personContractABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "Person",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "userName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "college",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "department",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "major",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "class",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "personID",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "userName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "college",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "department",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "major",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "class",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "personID",
                        "type": "string"
                    }
                ],
                "internalType": "struct person.PersonStruct",
                "name": "p",
                "type": "tuple"
            }
        ],
        "name": "add",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_college",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_userName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_class",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_major",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_department",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_personID",
                "type": "string"
            }
        ],
        "name": "addPerson",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_college",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_userName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_class",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_major",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_department",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_personID",
                "type": "string"
            }
        ],
        "name": "changePerson",
        "outputs": [],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "deletePerson",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPerson",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "userName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "college",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "department",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "major",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "class",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "personID",
                        "type": "string"
                    }
                ],
                "internalType": "struct person.PersonStruct",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];