function formatNumber(array) {
    var gh = "";
    array.forEach(function (item) { return gh += item + '-'; });
    return gh.substring(0, (array.length * 2) - 1);
}
var array = [1, 2, 3, 4, 5];
console.log(formatNumber(array));
