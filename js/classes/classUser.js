class User {
// The constructor for our class, which will allow us to create new objects of our class
  constructor (firstname, lastname, gender, email, cpr, password) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.gender = gender;
  this.email = email;
  this.cpr = cpr;
  this.password = this.hashPassword(password);
  this.mypicks = [];
  }

  // Method to hash the user registration input for the password. Done to not store input password in clear text
  hashPassword(password) {
    var a = 1, c = 0, h, o;
    if (password) {
      a = 0;
      for (h = password.length - 1; h >= 0; h--) {
        o = password.charCodeAt(h);
        a = (a<<6&268435455) + o + (o<<14);
        c = a & 266338304;
        a = c!==0?a^c>>21:a;
      }
    }
      return String(a);
  }


// doesn't work for our programm because class gets lost after unpacking from local storage
getAddress() {
  for (var i = 0; i < userAddresses.length; i++) {
    if (this.email == userAddresses[i].ownerID) {
        return userAddresses[i];
    } 
  }
}
}
