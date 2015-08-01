app.service('tvCharService', function($q){
var oldTvChar = [
        {
    name: 'Michael Knight',
    age: 55,
    gender: 'Male',
    TVshow: 'Knight Rider',
    },
        {
    name: 'Laverne De Fazio',
    age: 65,
    gender: 'Female',
    TVshow: 'Laverne & Shirley',
    },
        {
    name: 'Al Bundy',
    age: 55,
    gender: 'Male',
    TVshow: 'Married with Children',
    },
        {
    name: 'Allie Lowell',
    age: 45,
    gender: 'Female',
    TVshow: 'Kate & Allie',
    },
        {
    name: 'Murphy Brown',
    age: 48,
    gender: 'Female',
    TVshow: 'Murphy Brown',
    },
        {
    name: 'Gordon Shumway aka Alf',
    age: 235,
    gender: 'Unknown',
    TVshow: 'Alf',
    },
        {
    name: 'Andrew Squiggy Squigman',
    age: 60,
    gender: 'Male',
    TVshow: 'Laverne & Shirley',
    },
        {
    name: 'Angus MacGyver',
    age: 45 ,
    gender: 'Male',
    TVshow: 'MacGyver',
    },
        {
    name: 'Daisy Duke',
    age: 33,
    gender: 'Female',
    TVshow: 'The Dukes of Hazzard',
    },
        {
    name: 'Blair Warner',
    age: 45,
    gender: 'Female',
    TVshow: 'The Facts of Life',
    },
	 
	];

	this.getData = function() { 
    //THIS MAKES IT ASYNCRONOUS
        var defer = $q.defer();
		defer.resolve(oldTvChar);
        return defer.promise;
	};

});