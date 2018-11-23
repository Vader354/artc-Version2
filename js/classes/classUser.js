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
  // this.lastAccess = this.setLastAccess();
  }

  getAddress() {
    for (var i = 0; i < userAddresses.length; i++) {
      if (this.email == userAddresses[i].ownerID) {
          return userAddresses[i];
      } 
    }
  }

  hi() {
    console.log("hi");
  }

  // Need to figure out how this works hehe, Henrik is a sneaky, smart man
  hashPassword(password) {
    var a = 1, c = 0, h, o;
    if (password) {
      a = 0;
      /*jshint plusplus:false bitwise:false*/
      for (h = password.length - 1; h >= 0; h--) {
        o = password.charCodeAt(h);
        a = (a<<6&268435455) + o + (o<<14);
        c = a & 266338304;
        a = c!==0?a^c>>21:a;
      }
    }
      return String(a);
  }
}

// setLastAccess() {
//     this.lastAccess = Date.now();  
// }

// pick() {
//     document.getElementsByClassName 
// }