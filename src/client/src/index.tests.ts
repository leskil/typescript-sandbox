import { assert } from "chai"
import { HelloWorld } from "./index"

describe("HelloWorld", () => {
    it("Should return \"Hello \" plus the passed message", () => {
        let subject = new HelloWorld()
        let result = subject.SayHello("Lasse")

        assert.equal(result, "Hello Lasse")
    })

    it("Should throw when passed null", () => {
        let subject = new HelloWorld()
        
        assert.throws(subject.SayHello)
    })
})
