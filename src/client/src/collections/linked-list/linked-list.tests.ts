import { assert } from "chai";
import { LinkedList, ListNode } from "./linked-list";

describe("Linked list", () => {

    it("Should initialize with zero items", () => {
        let subject = new LinkedList<string>();
        assert.equal(subject.count, 0);
    });

    it("Should return -1 as lastIndex, if the list is empty", () => {
        let subject = new LinkedList<number>();
        assert.equal(subject.lastIndexOf(42), -1);
    });

    it("Should return -1 as lastIndex, if the item does not exist", () => {
        let subject = new LinkedList<number>();
        subject.add(42);
        assert.equal(subject.lastIndexOf(50), -1);
    });

    it("Should add new nodes without a next specified, to the end of the list", () => {
        let subject = new LinkedList<string>();
        subject.add("First");
        subject.add("Second");
        subject.add("Third");
        assert.equal(subject.lastIndexOf("Third"), 2);        
    });

    it("Should be able to return the root node as the first node", () => {
        let subject = new LinkedList<number>();
        subject.add(1);
        subject.add(2);
        subject.add(3);
        assert.equal(subject.first.item, 1);
    });

    it("Should insert node in middle correctly", () => {
        let subject = new LinkedList<number>();
        subject.add(1);
        subject.add(2);
        subject.add(3);

        let middleNode = subject.first.next;
        subject.add(4, middleNode);

        assert.equal(subject.lastIndexOf(4), 2)
        assert.equal(subject.lastIndexOf(3), 3)
    });

    it("Should be able to delete the only node in the list", () => {
        let subject = new LinkedList<number>();
        subject.add(1);

        let node = subject.first;
        subject.remove(node);

        assert.equal(subject.count, 0);
    });

    it("Should make second node the first, if the first is removed", () => {
        let subject = new LinkedList<number>();
        subject.add(1);
        subject.add(2);

        subject.remove(subject.first);
        assert.equal(subject.first.item, 2);
    });

    it("Should be able to delete middle node", () => {
        let subject = new LinkedList<number>();
        subject.add(1);
        subject.add(2);
        subject.add(3);

        subject.remove(subject.first.next);

        assert.equal(subject.count, 2);
        assert.equal(subject.lastIndexOf(1), 0);
        assert.equal(subject.lastIndexOf(3), 1);
        assert.equal(subject.lastIndexOf(2), -1);
    });

    it("Should be able to delete last node", () => {
        let subject = new LinkedList<number>();
        subject.add(1);
        subject.add(2);
        subject.add(3);

        subject.remove(subject.first.next.next);

        assert.equal(subject.count, 2);
        assert.equal(subject.lastIndexOf(1), 0);
        assert.equal(subject.lastIndexOf(2), 1);
    });

    it("Should return element as specified index", () => {
        let subject = new LinkedList<number>();
        subject.add(1);
        subject.add(2);
        subject.add(3);

        let result = subject.elementAt(1);
        assert.equal(result.item, 2);
    });

    it("Should throw when getting index out of bounds", () => {
        let subject = new LinkedList<number>();
        subject.add(1);
        subject.add(2);
        subject.add(3);

        assert.throws(() => subject.elementAt(4), "Index out of bounds");
    });

});