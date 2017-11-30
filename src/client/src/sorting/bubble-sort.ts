/*
* Sorts an array using bubble sort.
* Complexity is O(n^2)
*/
export class BubbleSorter {

    static sort<T>(items: T[]): T[] {
        let sorted = false;

        while (!sorted) {
            sorted = true;
            for (let i = 0; i <= items.length - 1; i++) {
                if (items[i] > items[i + 1]) {
                    let temp = items[i + 1];
                    items[i + 1] = items[i];
                    items[i] = temp;
                    sorted = false;
                }
            }
        }

        return items;
    }
}