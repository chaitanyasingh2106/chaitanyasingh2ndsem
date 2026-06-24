function calculateResult() {

    let s1 = Number(document.getElementById("s1").value);
    let s2 = Number(document.getElementById("s2").value);
    let s3 = Number(document.getElementById("s3").value);
    let s4 = Number(document.getElementById("s4").value);
    let s5 = Number(document.getElementById("s5").value);

    let total = s1 + s2 + s3 + s4 + s5;
    let percentage = total / 5;

    let result;

    if (percentage >= 75) {
        result = "Distinction";
    }
    else if (percentage >= 60) {
        result = "First Class";
    }
    else if (percentage >= 40) {
        result = "Second Class";
    }
    else {
        result = "Fail";
    }

    document.getElementById("result").innerHTML =
        "Total Marks = " + total +
        "<br>Percentage = " + percentage + "%" +
        "<br>Result = " + result;
}