class User {

    // The constructor for our class, which will allow us to create new objects of our class
    constructor (firstname, lastname, gender, dateOfBirth, password) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.gender = gender;
      this.dateOfBirth = dateOfBirth;
      this.password = this.encryptPwd(password);
      this.lastAccess = null;
    }

    encryptPwd() {

    }

    setLastAccess() {
        this.lastAccess = Date.now();  
    }

    addPick() {

        document.getElementsByClassName 
    }

}