function countTrue(arr) {
	let cont = 0

    for(let i = 0; i < arr.length; i++) {
        if(arr === null) {
            return cont
        }
        if(arr[i] === true) {
            cont++
        }
    }

    return cont
}

const array = [false, false, false, false]

console.log(countTrue(array))