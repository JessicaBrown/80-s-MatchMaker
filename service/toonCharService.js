app.service('toonCharService', function () {
    var oldToonChar = [
        {
            name: 'Rainbow Brite',
            age: 43,
            gender: 'Female',
            TVshow: 'Rainbow Brite',
            url: 'images/RainbowB.jpeg',
    },
        {
            name: 'He-Man',
            age: 64,
            gender: 'Male',
            TVshow: 'Masters of the Universe',
            url: 'images/HeMan.jpeg',
    },
        {
            name: 'Cheetara',
            age: 45,
            gender: 'Female',
            TVshow: 'ThunderCats',
            url: 'images/Cheetara.jpeg',
    },
        {
            name: 'Lion-O',
            age: 42,
            gender: 'Male',
            TVshow: 'ThunderCats',
            url: 'images/LionO.jpeg',
    },
        {
            name: 'Shaggy',
            age: 45,
            gender: 'Male',
            TVshow: 'Scooby Doo',
            url: 'images/shag.jpeg',
    },
        {
            name: 'Smurfette',
            age: 65,
            gender: 'Female',
            TVshow: 'The Smurfs',
            url: 'images/smurfette2.jpg',
    },
        {
            name: 'She-Ra',
            age: 42,
            gender: 'Female',
            TVshow: 'Princess of Power',
            url: 'images/SheRa.jpg',
    },
        {
            name: 'Velma',
            age: 48,
            gender: 'Female',
            TVshow: 'Scooby Doo',
            url: 'images/Velma.jpeg',
    },
        {
            name: 'Arcee',
            age: 'Robots do not age!',
            gender: 'Female',
            TVshow: 'The Transformers',
            url: 'images/Arcee.jpg',
    },
        {
            name: 'Papa Smurf',
            age: 246,
            gender: 'Male',
            TVshow: 'The Smurfs',
            url: 'images/papaSmurf.jpeg',
    },
        {
            name: 'Jem',
            age: 34,
            gender: 'Female',
            TVshow: 'Jem and the Holograms',
            url: 'images/jem.jpeg',
    },
        {
            name: 'John Brown',
            age: 39,
            gender: 'Male',
            TVshow: 'Inspector Gadget',
            url: 'images/IG.jpeg',
    },
];


    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.getToon = function () {
        var max = oldToonChar.length - 1;
        var randomChar = oldToonChar[getRandomNumber(0, max)];
        console.log(randomChar);
        return randomChar;  
    }
});



