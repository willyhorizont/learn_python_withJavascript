const javascriptDeepCloneV4 = (obj) => {
    if (typeof obj !== 'object' || obj === null || obj === undefined) return obj;

    const newObj = Array.isArray(obj) ? [] : {}; // Create a new object or array

    const stack = [{ src: obj, target: newObj }]; // Create a stack to keep track of objects to clone

    while (stack.length) {
        const { src, target } = stack.pop(); // Get the next object to clone
        Object.entries(src).forEach(([key, value]) => {
            if (typeof value !== 'object' || value === null || value === undefined) {
                target[key] = value; // Clone primitive values directly
                return;
            }
            const newValue = Array.isArray(value) ? [] : {}; // Create a new object or array for the cloned value
            target[key] = newValue;
            stack.push({ src: value, target: newValue }); // Add the object to the stack to be cloned
        })
    }

    return newObj;
}

module.exports = javascriptDeepCloneV4;
