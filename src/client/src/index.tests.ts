import { assert } from "chai";
import { HelloWorld } from "./index";

describe("HelloWorld", () => {

    it("Should return \"Hello \" plus the passed message", () => {
        let subject: HelloWorld = new HelloWorld();
        let result: string = subject.SayHello("Lasse");

        assert.equal(result, "Hello Lasse");
    });

    it("Should throw when passed null", () => {
        let subject: HelloWorld = new HelloWorld();

        assert.throws(subject.SayHello);
    });
});
