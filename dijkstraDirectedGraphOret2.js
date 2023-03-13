const nodes = {
    A: 'A',
    B: 'B',
    C: 'C',
    D: 'D',
    E: 'E',
}

const graph = {
    A: {
        B: 4,
        C: 2,
    },
    B: {
        C: 3,
        D: 2,
        E: 3,
    },
    C: {
        B: 1,
        D: 4,
        E: 5,
    },
    D: null,
    E: {
        D: 1,
    },
}

// const unvisitedNodes = {
//     A: false,
//     B: false,
//     C: false,
//     D: false,
//     E: false,
// };
// const unvisitedNodesNew = Object.fromEntries(Object.entries(unvisitedNodes).map(([key, value]) => (key === startingNode ? [key, true] : [key, value])));

const unvisitedNodes = new Map([
    [nodes.A, { visited: false }],
    [nodes.B, { visited: false }],
    [nodes.C, { visited: false }],
    [nodes.D, { visited: false }],
    [nodes.E, { visited: false }],
]);

// first iteration
const startingNode = nodes.A

// console.log('unvisitedNodes', Object.entries(Object.fromEntries(unvisitedNodes)).map(([key, value]) => (key === startingNode ? [key, true] : [key, value])));
// console.log('unvisitedNodes', unvisitedNodes);
unvisitedNodes.set(startingNode, { visited: true });
// console.log('unvisitedNodes', unvisitedNodes);

// const trackedDistances = {
//     nodes.A: 0,
//     nodes.B: Infinity,
//     nodes.C: Infinity,
//     nodes.D: Infinity,
//     nodes.E: Infinity,
// }

const trackedDistances = new Map([
    [nodes.A, 0],
    [nodes.B, Infinity],
    [nodes.C, Infinity],
    [nodes.D, Infinity],
    [nodes.E, Infinity],
]);

// examine edges leaving A
// console.log(Object.fromEntries(Object.entries(graph[startingNode])))

Object.entries(graph[startingNode]).forEach(([key, value]) => {
    trackedDistances.set(key, value);
});

console.log('trackedDistances', trackedDistances);
// pick the smallest edge of which the vertex hasn't been chosen

// console.log(Object.fromEntries(Object.entries(graph[startingNode])))
const smallestEdge = Object.entries(graph[startingNode]).reduce((smallest, [key, value]) => {
    if (smallest === null) return [key, value];
    if (smallest[1] > value) return [key, value];
    return smallest;
}, null);

console.log('smallestEdge', smallestEdge);
