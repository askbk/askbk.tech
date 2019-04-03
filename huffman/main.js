import { PriorityQueue, HuffmanNode } from './huffman.js';

const text = document.getElementById("input"),
    output = document.getElementById("output"),
    outputTable = document.getElementById("outputTable");

const buildFrequencyTable = sequence => {
    const frequencies = {}

    for (let i = 0; i < sequence.length; i++) {
        if (frequencies[sequence[i]]) {
            ++frequencies[sequence[i]];
        } else {
            frequencies[sequence[i]] = 1;
        }
    }

    return frequencies;
}

const createHuffmanTree = prique => {
    while (prique.length() > 1) {
        const n1 = prique.pop();
        const n2 = prique.pop();

        prique.push(new HuffmanNode(null, null, n1, n2));
    }

    return prique.pop();
}

const setHuffmanCodes = (rootNode, encodingTable, prevDirection = "") => {
    if (rootNode.left) {
        setHuffmanCodes(rootNode.left, encodingTable, prevDirection + "1");
    }

    if (rootNode.right) {
        setHuffmanCodes(rootNode.right, encodingTable, prevDirection + "0");
    }

    if (rootNode.value.length === 1) {
        encodingTable[rootNode.value] = prevDirection;
    }
}

document.getElementById("generateButton").addEventListener("click", () => {
    const input = text.value;

    const frequencies = buildFrequencyTable(input);

    const prique = new PriorityQueue();

    Object.keys(frequencies).forEach(char => {
        const node = new HuffmanNode(char, frequencies[char]);
        prique.push(node);
    });

    const rootNode = createHuffmanTree(prique);

    const encodingTable = {};

    setHuffmanCodes(rootNode, encodingTable);

    console.log(encodingTable);

    let encodedString = "";

    for (var i = 0; i < input.length; i++) {
        encodedString += encodingTable[input[i]];
    }

    output.innerHTML = encodedString;

    let outputEncoding = ""

    Object.keys(encodingTable).forEach(char => {
        outputEncoding += char + ":&emsp;" + encodingTable[char] + "<br>";
    })

    outputTable.innerHTML = outputEncoding;
});
