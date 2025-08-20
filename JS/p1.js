//1. Enter electricity unit and calculate amount to pay
//      For first 50 units, Rs: 1/unit
//      For next 100 units, 2/unit
//      For next 100 units, 3/ units
//      For units above 250, 4/units      
//      For all bills above 150 units additional surcharge of 20%  of total bill amount is added.


let units =270;
let amount=0;

    if(units <= 50)
    {
        amount = units * 1;  //50*1
    }else if(units<=150)
    {
        amount=50*1+(units-50)*2; // 50*1 + 
    }else if(units <= 250)
    {
        amount=50*1+100*2+(units-150)*3;
    }else{
        amount=50*1+100*2+100*3+(units-250)*4;
    }

    if(units>150)
    {
        amount=amount+(amount*0.20);
    }

    document.write("The Electricity Bill Units (" + units + ") : Rs =>  " + amount );
