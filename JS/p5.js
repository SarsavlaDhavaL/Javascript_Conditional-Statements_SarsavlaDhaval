// Write a JAVASCRIPT Program to Classify Age Group.


let Age=14;

if(Age>=0 && Age<=12)
{
    document.write("The Age " +Age + " => Child..!!");
}else if(Age>=13 && Age<=19)
{
    document.write("The Age " +Age + " => Teenager..!!");
}else if(Age>=20 && Age<=35)
{
    document.write("The Age " +Age + " => Young Adult..!!");
}else if(Age>=36 && Age<=60)
{
    document.write("The Age " +Age + " => Adult..!!");
}else if(Age>60 && Age<=150)
{
    document.write("The Age " +Age + " => Senior Citizen..!!");
}else{
    document.write("Enter Valid Age..!! ");
}