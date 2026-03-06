/*for(initialExpression; condition; updateExpression) {
    Loop Body
}
*/
for(let x = 0; x < 4; x++) {
    let name = "Alpha Kaggwa";
    console.log("Hi, my name is ${name}")
}
//This one prints even numbers
for(let x = 2; x <=10; x = x + 2) { //You can also use x+=2
    console.log(x)
}
let parkingLot =["UBZ 234F", "UAY 435D", "UBD 234S"]
// console.log(parkingLot.length)

//How to get item in position one, parkingLot[0]
for(let y = 0; y < parkingLot.length; y++) {
    console.log(parkingLot[y])
}

// For of loop for() {}
for(let numberPlate of parkingLot) {
    console.log(numberPlate)
}

//While loops
let x = 0;
while(x <= 5) {
    console.log(x);
    x++;
}

//Do-while loop
let paymentReceived = false;
do {
    console.log("Confirming payment......")
    paymentReceived = true;
} while (!paymentReceived)

let number1 = 0;
do {
    console.log(number1)
    number1++
} while(number1 <=5)
    let parkers = [{
    driverName: "Alpha",
    numberPlate: "UBX 634D",
    vehicleType: "Truck",
    hoursParked: 4,
    fee: 5000,
    isSignedOut: true,
    showDetails() {
        console.log(this.driverName + " " + this.numberPlate)
    },
    signOut() {
        console.log(this.driverName + " has been signed out")
    }
}, {
    driverName: "Ruth",
    numberPlate: "UBX 644D",
    vehicleType: "Taxi",
    hoursParked: 3,
    fee: 4000,
    isSignedOut: false,
    showDetails() {
        console.log(this.driverName + " " + this.numberPlate)
    },
    signOut() {
        console.log(this.driverName + " has been signed out")
    }
}, {
    driverName: "Elizabeth",
    numberPlate: "UBX 664D",
    vehicleType: "Boda Boda",
    hoursParked: 2,
    fee: 6000,
    isSignedOut: false,
    showDetails() {
        console.log(this.driverName + " " + this.numberPlate)
    },
    signOut() {
        console.log(this.driverName + " has been signed out")
    }
}]
//This is the one in the Data structures file