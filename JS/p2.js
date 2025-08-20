// Write a JAVASCRIPT Program to print season according user input using switch case. (e.g. 1 to 4 for "Winter", 5 to 8 for "Summer", 9 to 12 "Monsoon" then add any number print "Invalid season" etc.)

let month = 7;
let season;

switch (true) {
    case (month >= 1 && month <= 4):
        season = "Winter";
        break;

    case (month >= 5 && month <= 8):
        season = "Summer";
        break;

    case (month >= 9 && month <= 12):
        season = "Monsoon";
        break;

    default:
        document.write("Invalid Choice..");
        break;
}

document.write("The Month " + month + " Season Is => " + season);