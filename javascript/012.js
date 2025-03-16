/*
* RGB
*
* 255,255,255 => FFFFFF
* 255,255,300 => FFFFFF
* 0,0,0 => 000000
* */

const rgb = (r, g, b) => {
    const toHex = n => {
        n = n < 1 ? 0 : n;
        n = n > 255 ? 255 : n;
        let hex = n.toString(16).toUpperCase();
        return hex.length === 1 ? `0${hex}` : `${hex}`;
    }
    return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}

console.log(rgb(255,255,255));
console.log(rgb(0,0,0));