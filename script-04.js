function oddOrEven(testNum){
    if (testNum == 0){
        alert("this number is zero, chose another number")
    } else if(testNum % 2 == 0){
            alert(testNum + " is an even number")
    } else (testNum % 2 == 1 || testNum % 2 == -1)
        alert(testNum + " is an odd number")
}

oddOrEven(-4)