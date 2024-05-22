let numberAsInput=parseInt(prompt("Number Of Inputs"));
counterneg=0;
for (let i = 1; i <= numberAsInput; i++) {

    var num = parseInt(prompt(`Enter Your Number${i}`));
    if (num >= 0) {

       
        document.write(num + "Positive <br>")
    } else {
        counterneg++;
        document.write(num + "Negative <br>")
    }


}


document.write("Total Negative Numbers:"+counterneg)