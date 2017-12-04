export class MergeSort {

    static sort<T>(arr: Array<T>): Array<T> {
        if (arr.length < 2) {
            return arr;
        }

        let pivotValue = arr[arr.length - 1];
        let lesser: Array<T> = [];
        let greater: Array<T> = [];

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivotValue) {
                lesser.push(arr[i]);
            } else {
                greater.push(arr[i]);
            }
        }

        let combined: Array<T> = [];

        combined = this.sort(lesser)
            .concat([pivotValue])
            .concat(this.sort(greater));

        return combined;
    }
}