function quicksort(array) {
    if (array.length <= 1) return array;

    stack = [];
    stack.push(0);
    stack.push(array.length - 1);


    while (stack.length > 0) {
        end = stack.pop();
        start = stack.pop();

        pivot = partition(array, start, end);

        if (pivot - 1 > start) {
            stack.push(start);
            stack.push(pivot - 1);
        }

        if (pivot + 1 < end) {
            stack.push(pivot + 1);
            stack.push(end);
        }

    }

    return array;
}


function partition(array, low, high) {
    pivot = array[high];
    i = low - 1;
    for (j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}