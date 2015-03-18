function solve(args){
	/**
	 * --
	 * The Hipster solution :)
	 * --
	 */
	
	console.log(args);
	console.log('\n');
	args =	args
				.map(function(student){
					student.score += student.score * 10 / 100; 
					student.hasPassed = student.score >= 100;
					return student;
				})
				.filter(function(student){
					return student.hasPassed;
				})
				.sort(function(student, nextStudent){
					return student.name > nextStudent.name;
				});

	console.log(args);

	/**
	 * --
	 * The oldschool solution
	 * Uncomment to try it out.
	 * --
	 *
	
	// Modify the score; add hasScore prop
	for(var student in args){
		args[student].score += args[student].score * 10 / 100;
		args[student].hasPassed = args[student].score >= 100;
	}

	// Filter students with hasPassed = false
	args = args.filter(function(student){
		return student.hasPassed;
	});

	// Sort those bitches!
	args = args.sort(function(student, nextStudent){
		return student.name > nextStudent.name;
	});

	// Print
	console.log(args);
	
	 *
	 *
	 * 
	 */
}

var args = [
	{
        'name' : 'Пешо',
        'score' : 91
    },
    {
        'name' : 'Лилия',
        'score' : 290
    },
    {
        'name' : 'Алекс',
        'score' : 343
    },
    {
        'name' : 'Габриела',
        'score' : 400
    },
    {
        'name' : 'Жичка',
        'score' : 70
    }
];
solve(args);