let numberAsInput = parseInt(prompt("Number Of Inputs"));

counterpos = 0;
counterneg = 0;
counterzero = 0;

for (let i = 1; i <= numberAsInput; i++) {
    var num = parseInt(prompt(`Enter Your Number${i}`));
    if (num == 10) {
        counterzero++;
        document.write(num + "its zero <br>")
    }
    else if (num >= 0) {
        counterpos++;
        document.write(num + "Positive <br>")
    } else {
        counterneg++;
        document.write(num + "Negative <br>")
    }
}
document.write("Total Positive Numbers:" + counterpos)
document.write("Total Negative Numbers:" + counterneg)
document.write("Total Zero Numbers:" + counterzero)