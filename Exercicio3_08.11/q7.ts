function main(){
    const lista:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    console.log(filterEven(lista));
    
}


const filterEven = (lista) => {
    let newArray:number[] = []
    for (let item of lista){
        item % 2 === 0 && newArray.push(item)
    }

    return newArray
}

main()