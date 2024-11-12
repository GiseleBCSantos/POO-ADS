function formatNumber(array: number[]): String{
    let formatedArray: string = ""
    array.forEach(item => formatedArray +=  item + '-')

    return formatedArray.substring(0, (array.length * 2)-1 )
}

let array: number[] = [1,2,3,4,5]
console.log(formatNumber(array))