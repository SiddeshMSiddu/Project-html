function countXX(s) {
    let count = 0;
    let stor = "";
    let words = s.split(" ");
    
    for (let str of words) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "x") {
                stor += str[i];
            }
        }
        if (stor.length > 1) {
            for (let i = 0; i < stor.length - 1; i++) {
                if (stor.at(i) === stor.at(i + 1)) {
                    count++;
                }
            }
        }
        stor=``
    }

    return count;

}

let a = `Hexxo Thxxe`;
console.log(countXX(a))