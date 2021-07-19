const removeFromArray = function(inputArray, ...toRemove) {
    let resultArray = inputArray.slice();

    toRemove.forEach(function(currValue){
        const indexToRemove = resultArray.indexOf(currValue);
        if(indexToRemove > -1) resultArray.splice(indexToRemove, 1);
    });

    return resultArray
};

module.exports = removeFromArray;
