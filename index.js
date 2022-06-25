// // Code your solution here

function findMatching(drivers, str) {
    return drivers.filter(function (driver){
        return driver.toLowerCase() === str.toLowerCase()})
    }

    function fuzzyMatch(drivers, str){
        return drivers.filter(function (driver) {return driver.toLowerCase().substring(0, str.length) === str.toLowerCase() })
    }
    
    function matchName(drivers, attribute) {
        return drivers.filter(function(drivers) {return drivers.name === attribute})
    }