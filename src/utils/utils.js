export function updateTitle(string) {
    const newString = string.split('-').join(' ').toUpperCase();

    return newString;
}

export function updateTopics(arr) {
    const newArr = arr.toString().split(',').join(', ');

    return newArr;
}