// დავალება 1

for (let i = 0; i <= 50; i++) {
    console.log(i);
  }



// დავალება 2

let i = 0;
while (i <= 20) {
  console.log(i);
  i++;
}

// დავალება 3

let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 30);


// დავალება 4

const numbers = [1,2,5,7,8,10,23,24,26];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }

}

// დავალება 5


const currentDay = new Date().getDay();

switch(currentDay) {
    case 0 : console.log("კვირა");
    break;
    case 1 : console.log("ორშაბათი");
    break;
    case 2 : comsole.log("სამშაბათი");
    break;
    case 3 : console.log("ოთხშაბათი");
    break;
    case 4 : console.log("ხუთშაბათი");
    break;
    case 5: console.log("პარასკევი");
    break;
    case 6 : console.log("შაბათი");
    break;
    


}

