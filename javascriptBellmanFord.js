const graph = {
    vertices: ['A', 'B', 'C', 'D', 'E'],
    edges: [
        { u: 'A', v: 'B', w: 4 },
        { u: 'A', v: 'C', w: 2 },
        { u: 'B', v: 'C', w: 3 },
        { u: 'B', v: 'D', w: 2 },
        { u: 'B', v: 'E', w: 3 },
        { u: 'C', v: 'B', w: 1 },
        { u: 'C', v: 'D', w: 4 },
        { u: 'C', v: 'E', w: 5 },
        { u: 'E', v: 'D', w: -5 }
    ]
};

const bellmanFord = (vertices, edges, source) => {
    let distance = {};
    let predecessor = {};

    vertices.forEach((v) => {
        distance[v] = Infinity;
        predecessor[v] = null;
    });

    distance[source] = 0;

    vertices.forEach(() => {
        edges.forEach(({ u, v, w }) => {
            if (distance?.[u] + w < distance?.[v]) {
                distance[v] = distance?.[u] + w;
                predecessor[v] = u;
            }
        });
    });

    edges.forEach(({ u, v, w }) => {
        if (distance?.[u] + w < distance?.[v]) return 'Graph contains a negative-weight cycle.';
    });

    return { distance, predecessor };
}

const output = bellmanFord(graph.vertices, graph.edges, 'A');
console.log('output:', output);
// output: {
//     distance: { A: 0, B: 3, C: 2, D: 1, E: 6 },
//     predecessor: { A: null, B: 'C', C: 'A', D: 'E', E: 'B' }
// }
