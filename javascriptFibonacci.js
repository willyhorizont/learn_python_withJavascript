const generateFibonacciUntil = (stopper = 5) => {
    let iterator = 0;
    let fibonacci = [0, 1];
    while (true) {
        if (iterator === stopper) break;
        const lastIndex = fibonacci.length - 1;
        lastNumber = fibonacci[lastIndex];
        secondLastNumber = fibonacci[lastIndex - 1];
        fibonacci = [...fibonacci, lastNumber + secondLastNumber];
        iterator += 1;
    }
    return fibonacci;
};

console.log(JSON.stringify(generateFibonacciUntil(40)).split(',').join(', '));