const repeatString = function(inputString, times) {
    let result = ''

    if(times<0) return 'ERROR';

    for(let i=0; i<times; i++) {
        result+=inputString;
    }

    return result;
};

module.exports = repeatString;
