/*
*   Find the first recurring char of a string.
*   For example, ABCDAB should return "A".
*/
export class FirstRecurringChar {

    /*
    *   This is O(n^2) 
    */
    static slow(input: string): string | null {

        for (let i = 0; i < input.length; i++) {
            for (let j = i + 1; j < input.length; j++) {
                if (input[i] === input[j]) {
                    return input[i];
                }
            }
        }

        return null;
    }

    /*
    *   This is O(n)
    */
    static faster(input: string): string | null {

        let index: Map = {};

        for (let i = 0; i < input.length; i++) {
            if (index[input[i]] !== undefined) {
                return input[i];
            } else {
                index[input[i]] = true;
            }
        }

        return null;
    }
}

interface Map {
    [char: string]: boolean
}