import { assert } from "chai";
import { SelectionSorter } from "./selection-sort";

describe("Selection sort", () => {

    it("Should sort an array of unique numbers", () => {
        let input = [4, 6, 3, 2, 1, 5];
        let output = SelectionSorter.sort(input);

        assert.includeOrderedMembers(input, [1, 2, 3, 4, 5, 6])
    });

    it("Should sort an array of non-unique numbers", () => {
        let input = [4, 6, 6, 3, 3, 2, 1, 5];
        let output = SelectionSorter.sort(input);

        assert.includeOrderedMembers(input, [1, 2, 3, 3, 4, 5, 6, 6])
    });

});