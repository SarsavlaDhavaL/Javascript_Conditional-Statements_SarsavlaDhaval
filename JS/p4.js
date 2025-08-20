// Write a JAVASCRIPT Program to check Voting Eligibility.

let age = 17;

if (age >= 18 && age<=150) {
    document.write("Your Age Is "+age +".. You Are Eligible For Voting..!!");
} else if (age < 0 || age >150) {
    document.write("Please Enter A Valid Age..!");
} else {

    document.write(" Your Age Is "+age +".. You Are Not Eligible For Voting..!!");
}