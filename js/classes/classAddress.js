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


var venueAddresses = []

venueAddresses.push(new Address("V1", "louisiana@mail.com", 81818181, "Norrebrogade 22", 2200, "København", "Denmark", 5555));
venueAddresses.push(new Address("V2", "kunsthalchar@mail.com", 6565656, "Osterbrogade 33", 3300, "København", "Denmark", 6666));
venueAddresses.push(new Address("V3", "vone@mail.com", 32323232, "Vesterbrogade 44", 4400, "København", "Denmark", 7777));