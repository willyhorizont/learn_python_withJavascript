const javascriptDeepCloneV1 = (input) => {
    if (typeof input !== 'object' || input === null || input === undefined) return input;

    const newInput = Array.isArray(input) ? [] : {};

    Object.keys(input).forEach((key) => {
        newInput[key] = javascriptDeepCloneV1(input[key]);
    });

    return newInput;
};

module.exports = javascriptDeepCloneV1;
