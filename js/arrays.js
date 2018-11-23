// this file contains all the global variables

// create users array
var users = (localStorage.getItem("Users") !== null) ? JSON.parse(localStorage.getItem("Users")) : [];
var userAddresses = (localStorage.getItem("UserAddresses") !== null) ? JSON.parse(localStorage.getItem("UserAddresses")) : [];

// list of venues
var venues = []

venues.push(new Venue("V1", "Louisiana Museum Of Modern Art", "museum", "Mo-Fr 10-20, Sa-So 10-18"))
venues.push(new Venue("V2", "Kunsthal Charlottenborg", "museum", "Mo-Fr 9-19, Sa-So 10-16"))
venues.push(new Venue("V3", "V1 Gallery", "gallery", "Mo-Fr 12-20, Sa-So 10-20"))

// list of venueAddresses
var venueAddresses = []

venueAddresses.push(new Address("V1", "louisiana@mail.com", 81818181, "Norrebrogade 22", 2200, "København", "Denmark", 5555));
venueAddresses.push(new Address("V2", "kunsthalchar@mail.com", 6565656, "Osterbrogade 33", 3300, "København", "Denmark", 6666));
venueAddresses.push(new Address("V3", "vone@mail.com", 32323232, "Vesterbrogade 44", 4400, "København", "Denmark", 7777));

// list of exhibitions
var exhibitions = []

exhibitions.push(new Exhibition(
    /* exhibitionID */              "E1"                                
    /* venueID */                   , "V2"                                 
    /* name */                      , "Luca Tombolini Exhibition"
    /* type */                      , "#photography"
    /* artStyle */                  , "#contemporary"
    /* description */               , "A photoseries shot in the US. Based in Milan, Luca studied communication sciences and Italian cinema, picking up a camera while at university. Since 2011 he’s focused on large-format film photography, lugging his kit (plus essentials like food and camping equipment) to some of the most untouched and desolate places on earth, often for weeks at a time. Luca first scouts locations using Google Earth and, once he’s found a place that appeals to him, spends considerable time on travel logistics. “I like the whole story of being there to photograph,” says Luca. “The journey, the arrival, the fact I’m camping and living in the area for some days and the time spent alone and far away from everyday life. While doing so, I also like to try to get a different perspective on the landscape, relying more on the feelings rather than pure aesthetics.”"
    /* startDate */                 , "22 Jan 2018"
    /* endDate */                   , "14 Mar 2018"));

exhibitions.push(new Exhibition(
    /* exhibitionID */              "E2"                                
    /* venueID */                   , "V1"                                 
    /* name */                      , "Frida Kahlo Exhibition"
    /* type */                      , "#painting"
    /* artStyle */                  , "#colonial"
    /* description */               , "Frida Kahlo de Rivera was a Mexican artist who painted many portraits, self-portraits and works inspired by the nature and artifacts of Mexico. Inspired by the country's popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class and race in Mexican society. Her paintings often had strong autobiographical elements and mixed realism with fantasy. In addition to belonging to the post-revolutionary Mexicayotl movement, which sought to define a Mexican identity, Kahlo has been described as a surrealist or magical realist. Born to a German father and a mestiza mother, Kahlo spent most of her childhood and adult life at her family home in Coyoacán, La Casa Azul, now known and publicly accessible as the Frida Kahlo Museum. She was disabled by polio as a child. Until a traffic accident at age eighteen caused lifelong pain and medical problems, she had been a promising student headed for medical school. During her recovery, she returned to her childhood hobby of art with the idea of becoming an artist."
    /* startDate */                 , "12 Sep 2018"
    /* endDate */                   , "23 Nov 2018")); 


exhibitions.push(new Exhibition(
    /* exhibitionID */              "E3"                                
    /* venueID */                   , "V3"                                 
    /* name */                      , "Lee Woodman Exhibition"
    /* type */                      , "#sculptures"
    /* artStyle */                  , "#contemporary"
    /* description */               , "A creative director working 3D. I am a creative who works in various media including steel, wood, concrete, paper, pencil, acrylic, ink and charcoal. Visit each sub page to see works in charcoal and pencil on paper, also acrylic on canvas and constructed objects. Go to exhibitions tab to see my installations, to see a chronological blog of my works on paper visit my Tumblr. I am open to gallery and exhibition invites and currently do not have any dealer gallery representing my work."
    /* startDate */                 , "05 May 2018"
    /* endDate */                   , "07 Jul 2018")); 
    
exhibitions.push(new Exhibition(
    /* exhibitionID */              "E4"                                
    /* venueID */                   , "V3"                                 
    /* name */                      , "Luca Tombolini Exhibition"
    /* type */                      , "#sculptures"
    /* artStyle */                  , "#contemporary"
    /* description */               , "Sculptures Test. A photoseries shot in the US. Based in Milan, Luca studied communication sciences and Italian cinema, picking up a camera while at university. Since 2011 he’s focused on large-format film photography, lugging his kit (plus essentials like food and camping equipment) to some of the most untouched and desolate places on earth, often for weeks at a time. Luca first scouts locations using Google Earth and, once he’s found a place that appeals to him, spends considerable time on travel logistics. “I like the whole story of being there to photograph,” says Luca. “The journey, the arrival, the fact I’m camping and living in the area for some days and the time spent alone and far away from everyday life. While doing so, I also like to try to get a different perspective on the landscape, relying more on the feelings rather than pure aesthetics.”"
    /* startDate */                 , "22 Jan 2018"
    /* endDate */                   , "14 Mar 2018"));