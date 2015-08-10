app.service('toonCharService', function () {
    var oldToonChar = [
        {
            name: 'Rainbow Brite',
            age: 43,
            gender: 'Female',
            TVshow: 'Rainbow Brite',
            bio: 'I love clouds and all the colors of the rainbow!',
            url: 'images/RainbowB.jpeg',
    },
        {
            name: 'He-Man',
            age: 64,
            gender: 'Male',
            TVshow: 'Masters of the Universe',
            bio: 'I like pina coladas and getting caught in the rain.',
            url: 'images/HeMan.jpeg',
    },
        {
            name: 'Cheetara',
            age: 45,
            gender: 'Female',
            TVshow: 'ThunderCats',
            bio: 'I am very fast and love to race!',
            url: 'images/Cheetara.jpeg',
    },
        {
            name: 'Lion-O',
            age: 42,
            gender: 'Male',
            TVshow: 'ThunderCats',
            bio: 'ThunderCat... ThunderCat... Hooo!!',
            url: 'images/LionO.jpeg',
    },
        {
            name: 'Shaggy',
            age: 45,
            gender: 'Male',
            TVshow: 'Scooby Doo',
            bio: 'What is for dinner? I am always hungry!',
            url: 'images/shag.jpeg',
    },
        {
            name: 'Smurfette',
            age: 65,
            gender: 'Female',
            TVshow: 'The Smurfs',
            bio: 'I love my Mushroom house and playing with Gargamel.',
            url: 'images/smurfette2.jpg',
    },
        {
            name: 'She-Ra',
            age: 42,
            gender: 'Female',
            TVshow: 'Princess of Power',
            bio: 'I feel Princess of Power pretty much sums it up.',
            url: 'images/SheRa.jpg',
    },
        {
            name: 'Velma',
            age: 48,
            gender: 'Female',
            TVshow: 'Scooby Doo',
            bio: 'I love books and solving mysteries.',
            url: 'images/Velma.jpeg',
    },
        {
            name: 'Arcee',
            age: 'Robots do not age!',
            gender: 'Female',
            TVshow: 'The Transformers',
            bio: 'I am the only girl robot I know and am still single.',
            url: 'images/Arcee.jpg',
    },
        {
            name: 'Papa Smurf',
            age: 246,
            gender: 'Male',
            TVshow: 'The Smurfs',
            bio: 'I like potions and running through the woods.',
            url: 'images/papaSmurf.jpeg',
    },
        {
            name: 'Jem',
            age: 34,
            gender: 'Female',
            TVshow: 'Jem and the Holograms',
            bio: 'I love all things that are fabulous!!',
            url: 'images/jem.jpeg',
    },
        {
            name: 'John Brown',
            age: 39,
            gender: 'Male',
            TVshow: 'Inspector Gadget',
            bio: 'My favorite past time is flying using my hat.',
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



