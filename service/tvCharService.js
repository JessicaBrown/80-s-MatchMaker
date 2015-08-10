app.service('tvCharService', function () {
    var oldTvChar = [
        {
            name: 'Michael Knight',
            routeName: 'michael_knight',
            age: 63,
            gender: 'Male',
            TVshow: 'Knight Rider',
            bio: 'I love my car named kit and singing in german!',
            url: 'images/MichaelKnight.jpg',
    },
        {
            name: 'Laverne De Fazio',
            routeName: 'laverne_defazio',
            age: 71,
            gender: 'Female',
            TVshow: 'Laverne & Shirley',
            bio: 'I really enjoy working in the packaging plant and skipping.',
            url: 'images/Laverneeeee.jpeg',
    },
        {
            name: 'Al Bundy',
            routeName: 'al_bundy',
            age: 69,
            gender: 'Male',
            TVshow: 'Married with Children',
            bio: 'I hate everything. Espcially people with wide feet!',
            url: 'images/alllll.jpg',
    },
        {
            name: 'Mr. T',
            routeName: 'mr_t' ,
            age: 69,
            gender: 'Male',
            TVshow: 'A-Team',
            bio: 'I pitty the fool. All the fools. Everywhere!',
            url: 'images/mrtlc.jpeg'
    },
        {
            name: 'Mike Seaver',
            routeName: 'mike_seaver',
            age: 44,
            gender: 'Male',
            TVshow: 'Growing Pains',
            bio: 'I like causing trouble and making fun of my family.', 
            url: 'images/mike-seaver.jpg',
    },
        {
            name: 'Angus MacGyver',
            routeName: 'angus_macgyver',
            age: 65,
            gender: 'Male',
            TVshow: 'MacGyver',
            bio: 'I like loud things that go BOOM!',
            url: 'images/MACMAN.jpg',
    },
        {
            name: 'Daisy Duke',
            routeName:'daisy_duke' ,
            age: 61,
            gender: 'Female',
            TVshow: 'The Dukes of Hazzard',
            bio: 'My favorite pastime is staring into space.',
            url: 'images/fffdais.jpg',
    },
        {
            name: 'Blair Warner',
            routeName: 'blair_warner',
            age: 52,
            gender: 'Female',
            TVshow: 'The Facts of Life',
            bio: 'You take the good, you take the bad...!',
            url: 'images/blllair.jpg',
    },
        {
            name: 'Rose Nylund',
            routeName: 'rose_nylund',
            age: 93,
            gender: 'Female',
            TVshow: 'The Golden Girls',
            bio: 'In Saint Olaf I ran with the goats.',
            url: 'images/RRosie.jpg',
    },
        {
            name: 'Alex P. Keaton',
            routeName: 'alex_keaton',
            age: 54,
            gender: 'Male',
            bio: 'Alex P. Keaton for president!',
            TVshow: 'The Facts of Life',
            url: 'images/alexxx.jpeg',
    },
];

    this.getData = function () {
        //*******************************        
        //  THIS MAKES IT ASYNCRONOUS  **
        //*******************************
        //   var defer = $q.defer();
        //	 defer.resolve(oldTvChar);
        //   return defer.promise;
        return oldTvChar;
    };
    //************************************
    //        connects tvChar data 
    //************************************
    this.getConnectionChar = function(Char){
    for(var i = 0; i < oldTvChar.length; i++){
        if(Char === oldTvChar[i].routeName){
        return oldTvChar[i];
        }
    }
    }

});
