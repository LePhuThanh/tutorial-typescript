//lesson 20
let name1234: string = '';

//convert to Boolean => Boolean(age)
if (name1234) {
    console.log("You can watch JAV...")
}
else {
    console.log("Oops >>> You can watch Cartoon...")
}



let discountIf: number;
let itemCount1 = 11;

if (itemCount1 > 0 && itemCount1 <= 5) {
    discountIf = 5;  // 5% discountIf
} else if (itemCount1 > 5 && itemCount1 <= 10) {
    discountIf = 10; // 10% discountIf 
}
else if (itemCount1 > 10 && itemCount1 <= 15) {
    discountIf = 20;
}

else {
    discountIf = 15; // 15%
}

console.log(`You got ${discountIf}% discountIf. `);
