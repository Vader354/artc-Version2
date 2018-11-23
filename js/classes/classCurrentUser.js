class CurrentUser {
    constructor (email) {
        this.email = email;
    }

    getInformation() {
        for (var i = 0; i < users.length; i++) {
            if (this.email == users[i].email) {
                return users[i];
            } 
        }
    }
}
