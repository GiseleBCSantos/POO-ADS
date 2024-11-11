function formatNumber(array: number[]): String{
    let gh: string = ""
    array.forEach(item => gh +=  item + '-')

    return gh.substring(0, (array.length * 2)-1 )
}

let array: number[] = [1,2,3,4,5]
console.log(formatNumber(array))