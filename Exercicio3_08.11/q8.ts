function main(){
    const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    doubleMap(array)
    console.log(array);
    console.log(sumReduce(array));
    
    
}

const doubleMap = (list: number[]) => {
    for (let i = 0; i<list.length; i++){
        list[i] *= 2
    }
}

const sumReduce = (list: number[]) => {
    let amount:number = 0;
    for (let item of list){
        amount += item;
    }
    return amount
}



main()