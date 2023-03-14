import math

# Define a graph as an adjacent list
graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 1, 'D': 5 },
    'C': { 'A': 2, 'B': 1, 'D': 8, 'E': 10 },
    'D': { 'B': 5, 'C': 8, 'E': 2 },
    'E': { 'C': 10, 'D': 2 }
}

# Find the minimum edge in the edge list
def find_min_edge(edges):
    min_edge = None
    min_weight = math.inf
    for v in edges:
        weight = edges[v]
        if weight < min_weight:
            min_edge = v
            min_weight = weight
    return [min_edge, min_weight]

# Find the minimum spanning tree using Prim's algorithm
def prim(gh):
    # Initialize an empty set to hold the vertices in the Minimum Spanning Tree
    MST = list()

    # Select the first vertex to start the tree
    startVertex = [gh_item for gh_item in gh][0]
    MST.append(startVertex)

    # Initialize the set of edges to consider
    edges = gh.get(startVertex)

    # Iterate over the graph object until all vertices are in the Minimum Spanning Tree
    while len(MST) < len([gh_item for gh_item in gh]):
        # Find the minimum edge in the set of edges
        [min_edge, min_weight] = find_min_edge(edges)

        # Add the vertex to the Minimum Spanning Tree
        MST.append(min_edge)

        # Add the edges connected to the vertex to the set of edges to consider
        for v in gh.get(min_edge):
            if v not in MST: edges[v] = gh.get(min_edge).get(v)

        # Remove the minimum edge from the set of edges to consider
        del edges[min_edge]

    # Return the Minimum Spanning Tree as an array
    return MST

output = prim(graph)
print('output:', output)
# output: ['A', 'C', 'B', 'D', 'E']