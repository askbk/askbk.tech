// Class for building and randomly traversing a graph.
export class MarkovChain {
    constructor(states = {}) {
        this.states = states;
    }

    addTransition(v, w) {
        if (!this.states.hasOwnProperty(v)) {
            this.states[v] = [w];

            if (!this.states.hasOwnProperty(w)) {
                this.states[w] = [];
            }
        } else {
            this.states[v].push(w);
        }
    }

    next(v) {
        const transitionCount = this.states[v].length;
        const n =  Math.floor(Math.random() * transitionCount);

        return this.states[v][n]
    }
}

// Class for generating text based on Markov chains.
export class TextGenerator {
    constructor(inputText = "", wordMode = false, k = 1, M = 30) {
        this.inputText = inputText;
        this.inputWords = inputText.split(" ");
        this.markovChain = new MarkovChain();
        this.wordMode = wordMode;
        this.k = k;
        this.M = M;

        this.build(k)
    }

    build(k) {
        let prevState = undefined, currState;

        if (this.wordMode) {
            for (let i = 0; i < this.inputWords.length; i++) {
                currState = this.inputWords[i];

                this.markovChain.addTransition(prevState, currState);

                prevState = currState;
            }

            this.markovChain.addTransition(currState, this.inputWords[0]);

            return;
        }

        for (let i = k; i < this.inputText.length; i++) {
            currState = this.inputText.substring(i - k, i);

            this.markovChain.addTransition(prevState, currState);

            prevState = currState;
        }

        this.markovChain.addTransition(currState, this.inputText.substring(0, k))
    }

    generate() {
        let outputText = "";

        while (outputText.length < this.k) {
            const wordIndex = Math.floor(Math.random() * Object.keys(this.inputWords).length);
            const word = this.inputWords[wordIndex];
            if (outputText.length === 0) {
                outputText = this.capitalizeWord(word)
            } else {
                outputText += " " + word;
            }
        }

        let prevState = outputText.slice(-this.k);
        console.log(outputText, prevState);

        for (let i = 0; i < this.M; i++) {
            prevState = this.markovChain.next(prevState);

            if (this.wordMode) {
                outputText += prevState + " ";
            } else {
                outputText += prevState[prevState.length - 1];
            }
        }

        return outputText;
    }

    capitalizeWord(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}
