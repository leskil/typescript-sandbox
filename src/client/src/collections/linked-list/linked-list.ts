export class LinkedList<T> {

    first: ListNode<T>;
    count: number = 0;

    addFirst(item: T): void {
        let newNode = new ListNode<T>(item);
        if (this.first == null) {
            this.first = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        this.count++;
    }

    add(item: T, insertAfter?: ListNode<T>): void {

        this.count++;

        let node = new ListNode<T>(item);

        if (this.first == null) {
            this.first = node;
        } else {
            let lastNode: ListNode<T> | null | undefined;

            if (insertAfter != null) {
                lastNode = insertAfter;
            } else {
                lastNode = this.findLastNode();
            }

            this.insertAfter(node, lastNode);
        }
    }

    remove(node: ListNode<T>): void {
        if (this.first == node) {
            this.first = this.first.next
            this.count--;
            return;
        } 

        let previousNode = this.first;
        let currentNode = this.first.next;

        while (currentNode != null) {
            if (node != currentNode) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            } else {
                previousNode.next = currentNode.next;
                this.count--;
                break;
            }
        }
    }

    elementAt(index: number): ListNode<T> {
        if (index >= this.count)
            throw this.indexOutOfBounds();

        let i = 0;
        let currentNode = this.first;

        while (i <= index) {
            if (currentNode == null)
                throw this.indexOutOfBounds();

            if (i == index)
                return currentNode;

            currentNode = currentNode.next;
            i++;
        }

        throw this.indexOutOfBounds();
    }

    lastIndexOf(item: T): number {
        if (this.first == null) {
            return -1;
        }

        let position = 0;
        let currentNode = this.first;

        while (currentNode != null) {
            if (currentNode.item == item) 
                return position;
            
            currentNode = currentNode.next;
            position++;
        }

        return -1;
    }

    private insertAfter(node: ListNode<T>, insertAfter: ListNode<T>): void {
        if (insertAfter.next == null) {
            insertAfter.next = node;
        } else {
            node.next = insertAfter.next;
            insertAfter.next = node;
        }
    }

    private findLastNode(): ListNode<T> {

        let currentNode: ListNode<T> = this.first;

        while (currentNode.next != null) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    private indexOutOfBounds(): Error {
        return new Error("Index out of bounds");
    }
}

export class ListNode<T> {

    next: ListNode<T>;

    constructor(public item: T) {

    }

}