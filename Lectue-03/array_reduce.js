const numbars = [15,16,17,18,19];

const sum = 
numbars.reduce((accumulator,
    currentValue) => {
        return  accumulator + currentValue;
    }
);

console.log(sum);