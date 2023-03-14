// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(property)
// }

// let visited = []
// let distances = {}
// let shortest = null
// distances { E: Infinity, B: 4, C: 2 }
// visited []
// shortest C
// distances { E: 7, B: 3, C: 2, D: 6 }
// visited [ 'C' ]
// shortest B
// distances { E: 6, B: 3, C: 2, D: 5 }
// visited [ 'C', 'B' ]
// shortest D
// distances { E: 6, B: 3, C: 2, D: 5 }
// visited [ 'C', 'B', 'D' ]
// shortest E
// distances { E: 6, B: 3, C: 2, D: 5 }
// visited [ 'C', 'B', 'D', 'E' ]
// shortest null

// const array1 = [1, 2, 3];
// console.log('array1', array1);

// const firstElement = array1.shift();

// console.log('firstElement', firstElement);
// console.log('array1', array1);

// let i = 0
// console.log('i', i);
// i += 1
// console.log('i', i);

// const graph = [
//     [0, 3, Infinity, 5],
//     [2, 0, Infinity, 4],
//     [Infinity, 1, 0, Infinity],
//     [Infinity, Infinity, 2, 0]
// ];

// const distance = [...graph];

// console.log('distance', distance);

[...Array(10).keys()].forEach((i) => {
    console.log('i', i);
});

