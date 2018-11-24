class CurrentUser {
    constructor (email) {
        this.email = email;
    }

    // doesnt work for our program because class gets lost when unpacking from local storage
    getInformation() {
        for (var i = 0; i < users.length; i++) {
            if (this.email == users[i].email) {
                return users[i];
            } 
        }
    }
}