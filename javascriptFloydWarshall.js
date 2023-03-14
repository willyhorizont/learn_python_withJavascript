const nVertices = 4;

const printSolution = (distance) => [...Array(nVertices).keys()].forEach((i) => console.log([...Array(nVertices).keys()].map((j) => distance[i][j]).join('  ')));

const floydWarshall = (gh) => {
    let distance = [...gh];

    // Adding vertices individually
    [...Array(nVertices).keys()].forEach((k) => {
        [...Array(nVertices).keys()].forEach((i) => {
            [...Array(nVertices).keys()].forEach((j) => {
                distance[i][j] = Math.min(distance[i][j], distance[i][k] + distance[k][j])
            });
        });
    });
    printSolution(distance)
}

const graph = [
    [0, 3, Infinity, 5],
    [2, 0, Infinity, 4],
    [Infinity, 1, 0, Infinity],
    [Infinity, Infinity, 2, 0]
]

floydWarshall(graph)

// output:
// 0  3  7  5
// 2  0  6  4
// 3  1  0  5
// 5  3  2  0
