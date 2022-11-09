function ordenAsc(arr) {
    if (arr.length === 1) return true;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i+1] < arr[i]) return false;
    }

    return true;
}


ordenAsc([1,2,3,6,7,19])     //true

ordenAsc([12,2,9,6,7,19])    //false

ordenAsc([4])                //true