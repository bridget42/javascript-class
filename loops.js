/* for(intialExpression; condition; updateExpression){
loop body
}
 */
for(let x=0; x<$;x++){
    let name ="Alpha Kaggwa";
    console.log("Hi, my name is ${name}")
}

//this one prints even numbers
for(let x=2; x< 10; x=x+2){
    console.log(X) //you can use x+=2
}
 let parkingLot =["UBZ 234F", "UAY 435D", "UBD 234S"]
 //console.log(parkingLot.Length)
 //How to get item in position one, parkingLot[0]
  
 for(let y=0; y< parkingLot.length; y++){
    console.log(parkingLot[y])
 }
 //for of loop for(){}
 for(let numberPlate of parkingLot){
    console.log(numberPlate)
 }
 //while loops
 let x=0;
 while(x < 5){
    console.log(x);
    x++;
 }
 //do-while loop
 let paymentRecieved =false;
 do{
    console.log("confirming payment.......")
    paymentRecieved = true;
 } while(!paymentRecieved)

    let number1 =0;
    do{
        console.log(number1)
        number1++
    }while(number1 <5)

        let parkers = [{
            driverName:"alpha",
            numberPlate:"UBX 634D",
            vehicleType:"truck",
            hoursPacked:4,
            fee:5000,
            isSignedOut: true,
            showDetails(){
                console.log(this.driverName +""+
                    this.numberPlate)
            },
            signOut(){
                console.log(this.driverName +"has been signed out")
            }
        },{
             driverName:"ruth",
            numberPlate:"UBX 644D",
            vehicleType:"taxi",
            hoursPacked:3,
            fee:4000,
            isSignedOut: false,
            showDetails(){
                console.log(this.driverName +""+
                    this.numberPlate)
            },
             signOut(){
                console.log(this.driverName +"has been signed out")
            }
         },{
             driverName:"elizabeth",
            numberPlate:"UBX 642D",
            vehicleType:"boda boda",
            hoursPacked:2,
            fee:6000,
            isSignedOut: false,
            showDetails(){
                console.log(this.driverName +""+
                    this.numberPlate)
            },
             signOut(){
                console.log(this.driverName +"has been signed out")
            }
        }]