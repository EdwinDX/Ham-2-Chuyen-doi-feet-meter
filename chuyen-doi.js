function footToMeter(foot) {
    let meter = 0.305 * foot;
    return meter
}
function meterToFoot(meter) {
    let foot = 3.279 * meter;
    return foot;
}
let a = +prompt('Nhập meter');
let b = +prompt('Nhập foot');

document.write(`${a} meter = ${meterToFoot(a)} foot<br>${b} foot = ${footToMeter(b)} meter`);


