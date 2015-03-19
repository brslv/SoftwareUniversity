function findYoungestPerson(people){
	var minAge = Number.MAX_VALUE, 
		result = '';
	
	people.forEach(function(p){
		if(p.hasSmartphone && p.age < minAge){
			result = "The youngest person with a smartphone is " + p.firstname + " " + p.lastname;
			minAge = p.age;
		}
	});	
	
	console.log(result);		
}

var people = [
  { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false }, 
  { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
  { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
  { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }
];

findYoungestPerson(people);
