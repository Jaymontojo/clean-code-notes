/**Function naming convention
 * This one is more of a personal choice
    * I try to stick to a consistant with a naming convention 
    * I use this naming convention especially when I am doing server work.
    *   
 */

/**classes
 * I try to use classes and constructors to create objects from raw data input.
 * this has the added benefit of being able to initialize different instances of
 * the same object, each managing their own state.
 */
 class User{
  constructor(name, location, premiumStatus) {
    this.name = name;
    this.location = location;
    this.isPremiumMember = premiumStatus
  };
}

//VS

const User = {
  name: "Jay",
  location: 'Tokyo, Setagaya-ku',
  isPremiumMember: true
};

/**get
 * When I am immediately accessing data
 */
function getUsers() {
  return petFlixUsers;
};


/**post
 * When I want to add new data
 */
 function postNewUser(name, location, premiumStatus) {
  return new User(name, location, premiumStatus)
};

/**set / update
 * When I access a data value and set it to a new value
 */
function setPremiumStatus(user, premiumStatus) {
    user.isPremiumMember = premiumStatus;
    return "Successfully updated status!"
};

/**handle
 * If an event is triggered such as a submit button, this would be the function group
 * that may handle them.
 */
 function handleNewUserSubmit(user, premiumStatus) {
  return setPremiumStatus(user, premiumStatus);
};

/*
  single responsibility principle.Try to limit the amount of variables
  you are passing in. The more variables a function has to juggle, the more possibilities
  of what may happen and with that more breaking points. Have your function only do
  1 thing but have it do it really really well.
*/

/*
  abstract code where you can. Not only do you save some lines of code,
  but you also create SINGLE SOURCES OF TRUTH. Development teams use architectural design patterns to
  enforce this. 
*/
