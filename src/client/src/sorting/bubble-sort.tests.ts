import { assert } from "chai";
import { BubbleSorter } from "./bubble-sort";

describe("Bubble sort", () => {

    it("Should be able to sort an array of unique numbers", () => {
        let input = [5, 6, 3, 1, 2, 7, 4];
        let output = BubbleSorter.sort(input);

        assert.includeOrderedMembers(output, [1, 2, 3, 4, 5, 6, 7]);
    });

    it("Should be able to sort an array of non-unique numbers", () => {
        let input = [5, 6, 3, 1, 2, 2, 7, 4, 4];
        let output = BubbleSorter.sort(input);

        assert.includeOrderedMembers(output, [1, 2, 2, 3, 4, 4, 5, 6, 7]);
    });

})