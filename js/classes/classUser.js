class User {
// The constructor for our class, which will allow us to create new objects of our class
  constructor (firstname, lastname, gender, email, cpr, password) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.gender = gender;
  this.email = email;
  // this.adress = this.setAdress();
  this.cpr = cpr;
  this.password = this.hashPassword(password);
  // this.lastAccess = this.setLastAccess();
  }

  // not sure here yet
  setAddress() {
    this.address = new Address(this.phone, this.street, this.postalCode, this.city, this.geolocation);
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
    } else {
      // If the password is not valid, we'll throw and error we're able to catch
      throw new Error("The password supplied is not valid");
    }
      return String(a);
  }
}

// }

// setLastAccess() {
//     this.lastAccess = Date.now();  
// }

// addPick() {
//     document.getElementsByClassName 
// }