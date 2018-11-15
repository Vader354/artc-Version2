class Users {

    // The constructor for our class, which will allow us to create new objects of our class
    constructor (firstname, lastname, gender, email, cpr, password) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.gender = gender;
      this.email = email;
    //   this.adress = this.setAdress();
      this.cpr = cpr;
      this.password = password;
      this.lastAccess = this.setLastAccess();
    }

    // not sure here yet
    setAddress() {
        this.address = new Address(this.phone, this.street, this.postalCode, this.city, this.geolocation);
    }

    // hashPwd() {

    // }

    setLastAccess() {
        this.lastAccess = Date.now();  
    }

    addPick() {
        document.getElementsByClassName 
    }

}

// add some users