// Get User's name to use throughout

const prompt = require('prompt-sync')({ sigint: true });
const name = prompt("Hello Soldier! What is your name: ");
// Story and Instructions

console.log("   ");
console.log("Hello Specialist ", name, " and Welcome to Wally World. You have just woken up from an all night binger in the changing room at Wally World.");
console.log("   ");


console.log("There are many people of Wally World lurking about as well as your entire chain of command. You probably don't want to run into them or you might catch some extra duty(You're supposed to be at a Dental Appointment).");
console.log("   ");
console.log("Be careful on your search for greasy food and gatorade. Oh and the building is surrounded. If you exit the confines of Wally World you will be immediately met with... let's just say not good consequences.")
console.log("   ");
console.log("Specialist ", name, " your starting position is 0, 0");
console.log("   ");
console.log("You can navigate Wally World by typing these commands, one at a time");
console.log("   ");
console.log(" UP  DOWN  LEFT  RIGHT ");
console.log("   ");

// Defined input changes with let and defined movement with constants
let positionX = 0;
let positionY = 0;


// Get input on movement



// Winning Poistion is 2, 2 
while (!(positionX === 2 && positionY === 2)) {
    let userInput = prompt("Specialist " + name + " , your current position is " + positionX + "," + positionY + " would you like to go  UP  DOWN  LEFT  or  RIGHT? ");
    console.log("   ");
    // Movement Defined
    if (userInput === "up") {
        positionY = positionY + 1
    } else if (userInput === "down") {
        positionY = positionY - 1
    } else if (userInput === "left") {
        positionX = positionX - 1
    } else if (userInput === "right") {
        positionX = positionX + 1
    }

    // Winning path
    if (positionX === 0 && positionY === 1) {
        console.log("You have reached the ladies clothing section. You see an exit sign above you though.");
        console.log("   ");

    } if (positionX === 0 && positionY === 2) {
        console.log("You are now in the pet section. To your right you see the exit. ");
        console.log("   ");

    } if (positionX === 1 && positionY === 2) {
        console.log("You are now in the electronics section. To your right you see the exit through the automotive section. ");
        console.log("   ");

        // Consequence paths        

    } if (positionX === 1 && positionY === 1) {
        console.log("You are in the food area. You hear your CSM in the next aisle over and your 1SG down the aisle from you. I'd go back in the way you came. ");
        console.log("   ");

    } if (positionX === 0 && positionY === -1) {
        console.log("You are surrounded by the people of Wally World! Turn around in the direction you came!.");
        console.log("   ");

    } if (positionX === -1 && positionY === 0) {
        console.log("You see Corporal Imanncotoo on the other side of a clothing rack. Play it cool and turn around in the direction you came! ");
        console.log("   ");

    } if (positionX === 1 && positionY === 0) {
        console.log("SSG Twentyursheetbahg see's your out of regs haircut but can't see your face. Turn around in the direction you came! ");
        console.log("   ");

    } if (positionX === -1 && positionY === 1){
        console.log("You feel lost like an LT during land nav. Turn around!");
        console.log("   ")

    } if (positionX === -1 && positionY === -1){
        console.log("You feel lost like an LT during land nav. Turn around!");
        console.log("   ")

    } if (positionX === 1 && positionY === -1){
        console.log("You feel lost like an LT during land nav. Turn around!");
        console.log("   ")

    }

// Return to start paths
if (positionX === 2 && positionY === 1) {
    console.log("You got busted!!!. Wait, that was just a dream. You wake back up in the changing room. ");
    console.log("   ");
    positionX = 0
    positionY = 0
} if (positionX === -2 && positionY === 0) {
    console.log("The Corp got ya!. Wait, that was just a dream. You wake back up in the changing room. ");
    console.log("   ");
    positionX = 0
    positionY = 0
} if (positionX === 0 && positionY === -2) {
    console.log("The people of Wally World got you hooked on Meth and now you're homeless. Wait, that was just a dream. You wake back up in the changing room. ");
    console.log("   ");
    positionX = 0
    positionY = 0
} if (positionX === 2 && positionY === 0) {
    console.log("SSG found you and told you to go AWOL to get away. Wait, that was just a dream. You wake back up in the changing room. ");
    console.log("   ");
    positionX = 0
    positionY = 0
} if (positionX === -2 && positionY === -2) {
    console.log("You left the confines of Wally World! You were somehow able to sneak back into the changing rooms though.  ");
    console.log("   ");
    positionX = 0
    positionY = 0
} if (positionX === -2 && positionY === -1) {
    console.log("You left the confines of Wally World! You were somehow able to sneak back into the changing rooms though. ");
    console.log("   ");
    positionX = 0
    positionY = 0
} if (positionX === 2 && positionY === -1) {
    console.log("You left the confines of Wally World! You were somehow able to sneak back into the changing rooms though. ");
    console.log("   ");
    positionX = 0
    positionY = 0
} if (positionX === 1 && positionY === -2) {
    console.log("You left the confines of Wally World! You were somehow able to sneak back into the changing rooms though.  ");
    console.log("   ");
    positionX = 0
    positionY = 0
} if (positionX === - 1 && positionY === 2) {
    console.log("You left the confines of Wally World! You were somehow able to sneak back into the changing rooms though. ");
    console.log("   ");
    positionX = 0
    positionY = 0
} if (positionX === -1 && positionY === -2) {
    console.log("You left the confines of Wally World! You were somehow able to sneak back into the changing rooms though. ");
    console.log("   ");
    positionX = 0
    positionY = 0
} if (positionX === -2 && positionY === 3) {
    console.log("You left the confines of Wally World! You were somehow able to sneak back into the changing rooms though. ");
    console.log("   ");
    positionX = 0
    positionY = 0
} if (positionX === -1 && positionY === 3) {
    console.log("You left the confines of Wally World! You were somehow able to sneak back into the changing rooms though ");
    console.log("   ");
    positionX = 0
    positionY = 0
} if (positionX === 0 && positionY === 3) {
    console.log("You left the confines of Wally World! You were somehow able to sneak back into the changing rooms though.  ");
    console.log("   ");
    positionX = 0
    positionY = 0
} if (positionX ===  1 && positionY === 3) {
    console.log("You left the confines of Wally World! You were somehow able to sneak back into the changing rooms though. ");
    console.log("   ");
    positionX = 0
    positionY = 0
} if (positionX === 2 && positionY === 3) {
    console.log("You left the confines of Wally World! You were somehow able to sneak back into the changing rooms though. ");
    console.log("   ");
    positionX = 0
    positionY = 0
}     
                                 
     




}

//Program termination. Winning message.
console.log("        .---------------------------------.")
console.log("       /        ___________________        \ ")
console.log("     ,|________/  _______________  \________|,")
console.log("      | .---. |  /               \  | .---. |")
console.log("      | |   | | |                 |'%,|   | |")
console.log("      | |   | | |                 | | |   | |")
console.log(",---, | |   | | |                 | | |   | |")
console.log("`---'\| `---' | `-----------------' | `---' |/'---'")
console.log("     ,'-------|  ___                |-------`,")
console.log("     |        | /__,|              '%,       |")
console.log("     |  (o)   | `---'               |   (o)  |")
console.log("     |  (o)   |       .-----.       |   (o)  |")
console.log("     |.------.|       |  O  |       |        |")
console.log("     |" + name + "|       | O O |       |        |")
console.log("     |`------'|       `-----'      '%,       |")
console.log("     |________|_____________________|________|")
console.log("     ~~~~'----------,_________,----------'~~~~")
console.log("      | \~/ |                         | \~/ |")
console.log("      |_____|                         |_____|")
console.log("Specialist ", name, " Jump in your brand new Bronco that you can't afford but got for a steal with a 26% interest rate.");
console.log("Congratulations Specialist " + name + " you have successfully escaped Wally World!");


