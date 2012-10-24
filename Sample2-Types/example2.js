function example2(data) {
    return data.b;
}
var thingData = {
    a: 123,
    b: "Hello Thing",
    c: 4
};
document.getElementById("content").innerHTML = example2(thingData);
