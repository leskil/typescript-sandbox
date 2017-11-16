/*
* Sorts an array using selection sort.
* Complexity is O(n^2)
*/
export class SelectionSorter {
    
    static sort<T>(items: T[]): T[] {
        for (let i = 0; i < items.length - 1; i++) {
            let upperBound = items.length - (i+1);
            let largestIndex = this.indexOfLargest(items, upperBound);
            let temp = items[upperBound]
            items[upperBound] = items[largestIndex];
            items[largestIndex] = temp;
        }

        return items;
    }

    private static indexOfLargest<T>(items: T[], upperBound: number): number {
        let largestItem: T | undefined;
        let largestIndex: number = 0;

        for (let i = 0; i <= upperBound; i++) {
            if (largestItem == undefined || items[i] >= largestItem) {
                largestItem = items[i];                    
                largestIndex = i;
            }
        }

        return largestIndex;
    }

}