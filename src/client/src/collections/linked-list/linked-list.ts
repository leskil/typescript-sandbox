export class LinkedList<T> {

    first: ListNode<T>;

    count: number = 0;

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
}

export class ListNode<T> {

    next: ListNode<T>;

    constructor(public item: T) {

    }

}