(function(){
    
    var input = [
                { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false }, 
                { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
                { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
                { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }
    ];
  
    console.log( findYoungestPerson(input) );
  
    function findYoungestPerson(){
        var minAge = Number.MAX_VALUE,
            result;
        
        input.forEach( function( p ) {
            if( p.hasSmartphone && p.age < minAge ) {
                minAge = p.age;
                result = "The youngest person is " + p.firstname + " " + p.lastname;
            }
        } );
        
        return result;
    }
    
}());