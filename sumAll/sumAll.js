const sumAll = function(...args) {
    let min, max;
    let sum=0;

    if(args.length!==2) return 'ERROR';

    for(let i=0; i<args.length; i++) {
        if(typeof args[i]!=='number' || args[i]<0)
            return 'ERROR';
    }

    [min, max] = args;
    if(min>max) 
        [min, max] = [max, min];

    for(let i=min; i<=max; i++)
        sum+=i;
    
    return sum;
};

module.exports = sumAll;
