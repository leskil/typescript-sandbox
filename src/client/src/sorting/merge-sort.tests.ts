import { assert } from "chai";
import { MergeSort } from "./merge-sort";

describe("Merge sort", () => {

    it("Should sort a list of unique numbers", () => {
        let input = [5, 6, 3, 1, 2, 7, 4];
        let output = MergeSort.sort(input);
        assert.includeOrderedMembers(output, [1, 2, 3, 4, 5, 6, 7])
    });

    it("Should sort a list of non-unique numbers", () => {
        let input = [5, 6, 3, 1, 2, 2, 7, 4, 4];
        let output = MergeSort.sort(input);

        assert.includeOrderedMembers(output, [1, 2, 2, 3, 4, 4, 5, 6, 7]);
    });

});