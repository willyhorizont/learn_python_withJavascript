const deepClone = (input) => {
    if (typeof input !== 'object' || input === null || input === undefined) return input;

    const newInput = Array.isArray(input) ? [] : {};

    Object.keys(input).forEach((key) => {
        newInput[key] = deepClone(input[key]);
    });

    return newInput;
};
