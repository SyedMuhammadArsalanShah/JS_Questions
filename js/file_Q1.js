for (let i = 1; i <= 10; i++) {

    var num = parseInt(prompt(`Enter Your Number${i}`));
    if (num > 0) {

        document.write(num + "Positive <br>")
    } else {
        document.write(num + "Negative <br>")
    }


}