const javascriptDeepCloneV2 = (input) => {
    if (typeof input !== 'object' || input === null || input === undefined) return input;

    const stack = [{ source: input, target: Array.isArray(input) ? [] : {} }];

    while (stack.length) {
        const { source, target } = stack.pop();

        for (const key in source) {
            const value = source[key];

            if (typeof value === 'object' && value !== null) {
                target[key] = Array.isArray(value) ? [] : {};
                stack.push({ source: value, target: target[key] });
            } else {
                target[key] = value;
            }
        }
    }

    return stack[0]?.target;
};

module.exports = javascriptDeepCloneV2;
