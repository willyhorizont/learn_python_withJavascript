import math

graph = {
    'vertices': ['A', 'B', 'C', 'D', 'E'],
    'edges': [
        {'u': 'A', 'v': 'B', 'w': 4},
        {'u': 'A', 'v': 'C', 'w': 2},
        {'u': 'B', 'v': 'C', 'w': 3},
        {'u': 'B', 'v': 'D', 'w': 2},
        {'u': 'B', 'v': 'E', 'w': 3},
        {'u': 'C', 'v': 'B', 'w': 1},
        {'u': 'C', 'v': 'D', 'w': 4},
        {'u': 'C', 'v': 'E', 'w': 5},
        {'u': 'E', 'v': 'D', 'w': -5}
    ],
}


def bellman_ford(vertices, edges, source):
    distance = {}
    predecessor = {}

    for v in vertices:
        distance[v] = math.inf
        predecessor[v] = None

    distance[source] = 0

    for _ in vertices:
        for edge in edges:
            u = edge.get('u')
            v = edge.get('v')
            w = edge.get('w')
            if distance.get(u) + w < distance.get(v):
                distance[v] = distance.get(u) + w
                predecessor[v] = u

    for edge in edges:
        u = edge.get('u')
        v = edge.get('v')
        w = edge.get('w')
        if (distance.get(u) + w < distance.get(v)):
            return 'Graph contains a negative-weight cycle.'

    return {'distance': distance, 'predecessor': predecessor}


output = bellman_ford(graph['vertices'], graph['edges'], 'A')
print('output:', output)
# output: {
#     'distance': {'A': 0, 'B': 3, 'C': 2, 'D': 1, 'E': 6},
#     'predecessor': {'A': None, 'B': 'C', 'C': 'A', 'D': 'E', 'E': 'B'}
# }
