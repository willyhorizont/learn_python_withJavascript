const javascriptDeepCloneV3 = (obj) => {
    // handle non-object types
    if (typeof obj !== 'object' || obj === null || obj === undefined) return obj;

    // create a new object or array to store cloned values
    const newObj = Array.isArray(obj) ? [] : {};

    // create a stack to keep track of objects to clone
    const stack = [{ src: obj, target: newObj }];

    while (stack.length) {
        // pop the next object from the stack to clone
        const { src, target } = stack.pop();

        // copy all properties of the object to clone
        for (let key in src) {
            if (Object.prototype.hasOwnProperty.call(src, key)) {
                const val = src[key];

                // clone nested objects and arrays
                if (val !== null && typeof val === "object") {
                    target[key] = Array.isArray(val) ? [] : {};
                    stack.push({ src: val, target: target[key] });
                } else {
                    // copy non-object values directly
                    target[key] = val;
                }
            }
        }
    }

    return newObj;
}

module.exports = javascriptDeepCloneV3;
