// Define a graph as an adjacent list
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 1, 'D': 5 },
    'C': { 'A': 2, 'B': 1, 'D': 8, 'E': 10 },
    'D': { 'B': 5, 'C': 8, 'E': 2 },
    'E': { 'C': 10, 'D': 2 }
};

// Find the minimum edge in the edge list
const findMinEdge = (edges) => {
    let minEdge = null;
    let minWeight = Infinity;
    Object.entries(edges).forEach(([v, weight]) => {
        if (weight < minWeight) {
            minEdge = v;
            minWeight = weight;
        }
    });
    return [minEdge, minWeight];
};

// Find the minimum spanning tree using Prim's algorithm
const prim = (gh) => {
    // Initialize an empty set to hold the vertices in the Minimum Spanning Tree
    const MST = new Set();

    // Select the first vertex to start the tree
    const startVertex = Object.keys(gh)[0];
    MST.add(startVertex);

    // Initialize the set of edges to consider
    let edges = gh[startVertex];

    // Iterate over the graph object until all vertices are in the Minimum Spanning Tree
    while (MST.size < Object.keys(gh).length) {
        // Find the minimum edge in the set of edges
        const [minEdge, minWeight] = findMinEdge(edges);

        // Add the vertex to the Minimum Spanning Tree
        MST.add(minEdge);

        // Add the edges connected to the vertex to the set of edges to consider
        Object.entries(gh[minEdge]).forEach(([v, weight]) => {
            if (MST.has(v) === false) edges[v] = weight;
        });
        
        // Remove the minimum edge from the set of edges to consider
        delete edges[minEdge];
    }

    // Return the Minimum Spanning Tree as an array
    return Array.from(MST);
};

const output = prim(graph);
console.log('output:', output);
// output: ['A', 'C', 'B', 'D', 'E']