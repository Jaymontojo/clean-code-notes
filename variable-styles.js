/**Magic Number, Mystery Number, Unknown reference etc...
   *Hard Coded values provide very little context. 
   *Working with other developers aside, you may even forget why that value is there
    *Is it an artifact of debugging? Regardless it should not make it into production.  
    *Simply assigning it to a descriptive variable name, can save a lot of headache.
*/

function countDown() {
  for(let i = 8; i <= 0; i--){
    if(i === 0) {
      return "BEEP BEEP BEEP"
    }
  }
};

function betterCountDown(hoursOfSleep) {
  for(let i = hoursOfSleep; i <= 0; i--){
    if(i === 0) {
      return "BEEP BEEP BEEP"
    }
  }
};

/*
Boolean Naming
When we are working with boolean states,
other variables
*/
class CheckingAccount {
  constructor(memberID, initDeposit) {
    this.memberID = memberID,
    this.balance = initDeposit,
    this.isActive = true;
    this.created_at = Date.now();
  }

  withdraw(amount) {
    this.isActive ? this.balance - amount : this.balance;
    return this.balance;
  }
}

const JayCheckingAcct = new CheckingAccount(99492834, 0);

/*
By using booleans named in this way, even if we use more advanced syntax like
ternery operators reads even better
*/

//Use plural form of nouns when working with lists
const  petFlixUsers = [
  {name: "Nadia", location: "Japan", isPremiumMember: true},
  {name: "Ronald", location: "New Zealand", isPremiumMember: false},
  {name: "Tasha", location: "Papua New Guinea", isPremiumMember: true},
  {name: "Steven", location: "United Arab Emerites", isPremiumMember: true},
  {name: "JinBae", location: "Mauritius", isPremiumMember: true},
  {name: "Su", location: "United States", isPremiumMember: false},
  {name: "Harold", location: "Egypt", isPremiumMember: true},
  {name: "Anastacia", location: "Lithuania", isPremiumMember: true},
  {name: "Gregory", location: "United States", isPremiumMember: false},
  {name: "Hannah", location: "Brazil", isPremiumMember: false},
 ]
