import { assert } from "chai";
import { FirstRecurringChar } from "./first-recurring-char";

describe("First recurring character, O(n^2)", () => {

    it("Should return A as the first recurring char", () => {
        let input = "ABCA";
        let result = FirstRecurringChar.slow(input);

        assert.equal(result, "A");
    });

    it("Should return B as the first recurring char", () => {
        let input = "DBCABA";
        let result = FirstRecurringChar.slow(input);

        assert.equal(result, "B");
    });

    it("Should return null, if no recurring chars exists", () => {
        let input = "ABC";
        let result = FirstRecurringChar.slow(input);

        assert.equal(result, null);
    });

});

describe("First recurring character, O(n)", () => {
    
        it("Should return A as the first recurring char", () => {
            let input = "ABCA";
            let result = FirstRecurringChar.faster(input);
    
            assert.equal(result, "A");
        });
    
        it("Should return B as the first recurring char", () => {
            let input = "DBCABA";
            let result = FirstRecurringChar.faster(input);
    
            assert.equal(result, "B");
        });
    
        it("Should return null, if no recurring chars exists", () => {
            let input = "ABC";
            let result = FirstRecurringChar.faster(input);
    
            assert.equal(result, null);
        });
    
    });