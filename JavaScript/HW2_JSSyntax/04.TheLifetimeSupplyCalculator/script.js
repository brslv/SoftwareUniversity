(function(){
    
    function solve(){
        var my = {
            age : 23,
            maxAge : 200,
            food : 'spagetti',
            fpd : 12,
        }

        var calcSupply = function(age, maxAge, food, foodPerDay){
            var foodSupply = (maxAge - age) * (foodPerDay * 365);
            console.log(foodSupply + 'kg of ' + food + ' would be enough until I am ' + maxAge + ' years old.');
        }
        
        calcSupply(my.age, my.maxAge, my.food, my.fpd);
    }
    
    solve();
    
}());