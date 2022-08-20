/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/
console.log("HEllo");
// Get global access to all inputs / divs here (you'll need them later 😘)
const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const peopleNum = document.getElementById("numberOfPeople");
const perPerson = document.getElementById("perPersonTotal");
// bill input, tip input, number of people div, and per person total div



// Get number of people from number of people div

let person = Number(peopleNum.innerText);
// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number

  const bill = Number(billInput.value);
  
  
  

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPer = Number(tipInput.value)/100;


  // get the total tip amount
  const tip = tipPer*bill;

  // calculate the total (tip amount + bill)
  totalBill = bill+tip;
  

  // calculate the per person total (total divided by number of people)
  
  totalBillPP = totalBill/person;

  // update the pal on DOM & show it to user
  perPerson.innerText = `$${totalBillPP.toFixed(2)}`; 

}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  person++;


  // update the DOM with the new number of people
  numberOfPeople.innerText = person;

  // calculate the bill based on the new number of people
  calculateBill();

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)

  if( person >1){
  // decrement the amount of people
  person--;

  // update the DOM with the new number of people
  numberOfPeople.innerText = person;

  // calculate the bill based on the new number of people
  calculateBill();
  }
}