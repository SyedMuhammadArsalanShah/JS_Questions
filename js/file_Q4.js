let numberAsInput=parseInt(prompt("Number Of Inputs"));
counterpos=0;
for (let i = 1; i <= numberAsInput; i++) {

    var num = parseInt(prompt(`Enter Your Number${i}`));
    if (num >= 0) {

        counterpos++;
        document.write(num + "Positive <br>")
    } else {
        document.write(num + "Negative <br>")
    }


}
document.write("Total Positive Numbers:"+counterpos)
