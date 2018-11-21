class Address {
    constructor(ownerID, email, phone, street, postalCode, city, country, geolocation) {
        this.ownerID = ownerID;
        this.email = email;
        this.phone = phone;
        this.street = street;
        this.postalCode = postalCode;
        this.city = city;
        this.country = country;
        this.geolocation = geolocation; 
    }

}

// set the addresses with ownerID
// I propose: "V..." as ID for venues; "U..." as ID for users
// a string as ID is not ideal, but it will be nice to have V or U in the beginning of the ID to identfy directly if the address belongs to a venue or a user
var addresses = []
addresses.push(new Address("V1", "louisiana@mail.com", 81818181, "Norrebrogade 22", 2200, "København", "Denmark", 5555))
addresses.push(new Address("V2", "kunsthalchar@mail.com", 6565656, "Osterbrogade 33", 3300, "København", "Denmark", 6666))
addresses.push(new Address("V3", "vone@mail.com", 32323232, "Vesterbrogade 44", 4400, "København", "Denmark", 7777))
