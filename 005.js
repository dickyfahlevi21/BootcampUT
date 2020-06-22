// leapYear
let firstYear = 2003; //Input your number
let secondYear = 2004; //Input your number
let checkKabisat = (year) => {
    if ((year % 100 != 0 || year % 400 == 0) && (year % 4 == 0)){
        console.log(year = "Kabisat!");
    } else {
        console.log(year = "Bukan Kabisat!");
    }        
}

checkKabisat(firstYear)
checkKabisat(secondYear)