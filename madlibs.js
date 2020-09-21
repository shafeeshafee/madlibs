const madlibs = () => {
    const selectStory = prompt('Would you like Story One or Story Two?').toLowerCase();

    // story one package
    const storyOne = () => {
        console.log(`You chose story number ${selectStory}`);

        let adjective = prompt("type an adjective");
        let place = prompt("type a general place");
        let car = prompt("type a vehicle name (plural)");
        let game = prompt("type the name of a game");
        let pluralNoun = prompt("type a plural noun");
        let ingVerb = prompt("type an 'ing' verb");
        let ingVerbTwo = prompt("type another 'ing' verb");
        let food = prompt("type a food name (plural)");
        let sport = prompt("type the name of a sport");
        let ingVerbThree = prompt("type another 'ing' verb");
        let emotion = prompt("type an emotion");
        let num = prompt("type a number");

        // print everything out
        console.log(`A vacation is when you take a trip to some ${adjective} place near an amazing ${place}. A good vacation place is one where you can ride ${car} or play ${game} or go hunting for ${pluralNoun}. I like to spend my time ${ingVerb} or ${ingVerbTwo}. When parents go on a vacation, they spend their time eating three ${food} a day. Usually, fathers play ${sport}, and mothers spend their time ${ingVerbThree}. Adults need vacations more than kids because adults are always very ${emotion} because they have to work ${num} hours every day all year just to afford their vacations!`);
    }

    // story two package
    const storyTwo = () => {
        console.log(`You chose story number ${selectStory}`);

        let adjective = prompt("type an adjective");
        let famousPlace = prompt("type a famous place");
        let pluralNoun = prompt("type a plural noun");
        let adjectiveTwo = prompt("type another adjective");
        let food = prompt("type a food (plural)");
        let emotion = prompt("type an emotion");
        let ingVerb = prompt("type an 'ing' verb");
        let commonPlace = prompt("type a common place");
        let adjectiveThree = prompt("type another adjective");
        let noun = prompt("type a noun");
        let adjectiveFour = prompt("type another adjective");
        let anotherNoun = prompt("type another noun");
        let familyMember = prompt("type a family member");
        let adjectiveFive = prompt("type another adjective");

        // print everything out
        console.log(`Today we took a ${adjective} fieldtrip to ${famousPlace}. They're famous for making ${pluralNoun} and for cooking ${adjectiveTwo} ${food}. Eating all that food made me feel ${emotion}. Next we enjoyed the local tradition of ${ingVerb} in the middle of the ${commonPlace}! Finally, we went shopping for souvenirs. I bought a ${adjectiveThree} ${noun} for myself, and a ${adjectiveFour} ${anotherNoun} for my favorite ${familyMember}. I'll definitely never forget this ${adjectiveFive} trip!`);
    }

    // player selection - used ternary operator for practice
    (selectStory == "one" || selectStory === "1") ? storyOne() :
        (selectStory == "two" || selectStory === "2") ? storyTwo() :
            (alert("Enter a valid story"), madlibs());
}

madlibs();