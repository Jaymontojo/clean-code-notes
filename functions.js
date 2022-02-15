/**Function naming convention
 * This one is more of a personal choice
    * I try to stick to a consistant with a naming convention 
    * I use this naming convention especially when I am doing server work.
    *   
 */

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



/**get
 * When I are immediately accessing data
 */
function getUsers() {
  return petFlixUsers;
}

/**classes
 * I try to use classes and constructors to create objects from raw data input
 */
class User{
  constructor(name, location, premiumStatus) {
    this.name = name;
    this.location = location;
    this.premiumStatus = premiumStatus
  };
}

/**post
 * When I want to add new data
 */
function postNewUser(name, location, premiumStatus) {
  return new User(name, location, premiumStatus)
}

/**set
 * When I access a data value and set it to a new value
 */
function setPremiumStatus(user, premiumStatus) {
  
}

/**handle
 * If an event is triggered such as a submit button, this would be the function group
 * that may handle them.
 */
 function handleNewUserSubmit(user, premiumStatus) {
  
}