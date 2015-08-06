app.service('tvCharService', function () {
    var oldTvChar = [
        {
            name: 'Michael Knight',
            routeName: 'michael_knight',
            age: 63,
            gender: 'Male',
            TVshow: 'Knight Rider',
            url: 'images/MichaelKnight.jpg',
    },
        {
            name: 'Laverne De Fazio',
            routeName: 'laverne_defazio',
            age: 71,
            gender: 'Female',
            TVshow: 'Laverne & Shirley',
            url: 'images/Laverneeeee.jpeg',
    },
        {
            name: 'Al Bundy',
            routeName: 'al_bundy',
            age: 69,
            gender: 'Male',
            TVshow: 'Married with Children',
            url: 'images/alllll.jpg',
    },
        {
            name: 'Murphy Brown',
            routeName: 'murphy_brown' ,
            age: 69,
            gender: 'Female',
            TVshow: 'Murphy Brown',
            url: 'images/murph.jpg'
    },
        {
            name: 'Mike Seaver',
            routeName: 'mike_seaver',
            age: 44,
            gender: 'Male',
            TVshow: 'Growing Pains',
            url: 'images/mike-seaver.jpg',
    },
        {
            name: 'Angus MacGyver',
            routeName: 'angus_macgyver',
            age: 65,
            gender: 'Male',
            TVshow: 'MacGyver',
            url: 'images/MACMAN.jpg',
    },
        {
            name: 'Daisy Duke',
            routeName:'daisy_duke' ,
            age: 61,
            gender: 'Female',
            TVshow: 'The Dukes of Hazzard',
            url: 'images/fffdais.jpg',
    },
        {
            name: 'Blair Warner',
            routeName: 'blair_warner',
            age: 52,
            gender: 'Female',
            TVshow: 'The Facts of Life',
            url: 'images/blllair.jpg',
    },
        {
            name: 'Rose Nylund',
            routeName: 'rose_nylund',
            age: 93,
            gender: 'Female',
            TVshow: 'The Golden Girls',
            url: 'images/RRosie.jpg',
    },
        {
            name: 'Alex P. Keaton',
            routeName: 'alex_keaton',
            age: 54,
            gender: 'Male',
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
