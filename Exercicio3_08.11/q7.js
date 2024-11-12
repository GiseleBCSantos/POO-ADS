function main() {
    var lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    console.log(filterEven(lista));
}
var filterEven = function (lista) {
    var newArray = [];
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        item % 2 === 0 && newArray.push(item);
    }
    return newArray;
};
main();
