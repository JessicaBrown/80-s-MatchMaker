app.service('tvCharService', function () {
    var oldTvChar = [
        {
            name: 'Michael Knight',
            routeName: 'michael_knight',
            age: 55,
            gender: 'Male',
            TVshow: 'Knight Rider',
            url: 'images/KR.jpeg',
    },
        {
            name: 'Laverne De Fazio',
            routeName: 'laverne_defazio',
            age: 65,
            gender: 'Female',
            TVshow: 'Laverne & Shirley',
            url: 'images/Laverne.jpeg',
    },
        {
            name: 'Al Bundy',
            routeName: 'al_bundy',
            age: 55,
            gender: 'Male',
            TVshow: 'Married with Children',
            url: 'images/alBundy.jpeg',
    },
        {
            name: 'Murphy Brown',
            routeName: 'murphy_brown' ,
            age: 48,
            gender: 'Female',
            TVshow: 'Murphy Brown',
            url: 'images/murph.jpg'
    },
        {
            name: 'Mike Seaver',
            routeName: 'mike_seaver',
            age: 45,
            gender: 'Male',
            TVshow: 'Growing Pains',
            url: 'images/Mike.jpeg',
    },
        {
            name: 'Angus MacGyver',
            routeName: 'angus_macgyver',
            age: 45,
            gender: 'Male',
            TVshow: 'MacGyver',
            url: 'images/Mac.jpeg',
    },
        {
            name: 'Daisy Duke',
            routeName:'daisy_duke' ,
            age: 33,
            gender: 'Female',
            TVshow: 'The Dukes of Hazzard',
            url: 'images/DD.jpg',
    },
        {
            name: 'Blair Warner',
            routeName: 'blair_warner',
            age: 45,
            gender: 'Female',
            TVshow: 'The Facts of Life',
            url: 'images/BlairW.jpg',
    },
        {
            name: 'Rose Nylund',
            routeName: 'rose_nylund',
            age: 65,
            gender: 'Female',
            TVshow: 'The Golden Girls',
            url: 'images/Rosie.jpeg',
    },
        {
            name: 'Alex P. Keaton',
            routeName: 'alex_keaton',
            age: 55,
            gender: 'Male',
            TVshow: 'The Facts of Life',
            url: 'images/AlexK.jpeg',
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
    this.getConnectionChar = function(Char){
    for(var i = 0; i < oldTvChar.length; i++){
        if(Char === oldTvChar[i].routeName){
        return oldTvChar[i];
        }
    }
    }

});
