import math


def shortest_distance_node(distances, visited):
    shortest = None

    for node in distances:
        current_is_shortest = shortest is None or (distances.get(shortest) is not None and distances.get(node) is not None and distances.get(node) < distances.get(shortest))
        if current_is_shortest and node not in visited:
            shortest = node
    return shortest


def find_shortest_path(graph, start_node, end_node):
    # establish object for recording distances from the start node
    distances = {}
    distances[end_node] = math.inf
    distances = {**distances, **graph.get(start_node)}

    # track paths
    parents = {'end_node': None}
    for child in graph.get(start_node):
        parents[child] = start_node

    # track nodes that have already been visited
    visited = []

    # find the nearest node
    node = shortest_distance_node(distances, visited)

    # for that node
    while node:
        # find its distance from the start node & its child nodes
        distance = distances.get(node)
        children = graph.get(node)
        # for each of those child nodes
        for child in children:
            # make sure each child node is not the start node
            if str(child) == str(start_node):
                continue
            # save the distance from the start node to the child node
            new_distance = distance + children.get(child)
            # if there's no recorded distance from the start node to the child node in the distances object
            # or if the recorded distance is shorter than the previously stored distance from the start node to the child node
            # save the distance to the object
            # record the path
            if distances.get(child) is None or (distances.get(child) is not None and distances.get(child) > new_distance):
                distances[child] = new_distance
                parents[child] = node
        # move the node to the visited set
        visited = [*visited, node]
        # move to the nearest neighbor node
        node = shortest_distance_node(distances, visited)

    # using the stored paths from start node to end node
    # record the shortest path
    shortest_path = [end_node]
    parent = parents.get(end_node)
    while parent:
        shortest_path = [*shortest_path, parent]
        parent = parents.get(parent)

    shortest_path_copy = [*shortest_path]
    shortest_path_copy.reverse()
    shortest_path = shortest_path_copy

    # return the shortest path from start node to end node & its distance
    results = {
        'distance': distances.get(end_node),
        'path': shortest_path,
    }

    return results


graph = {
    'A': {'B': 4, 'C': 2, },
    'B': {'C': 3, 'D': 2, 'E': 3, },
    'C': {'B': 1, 'D': 4, 'E': 5, },
    'D': {},
    'E': {'D': 1, },
}

result = find_shortest_path(graph, 'A', 'E')
print('result:', result)
# result: {'distance': 6, 'path': ['A', 'C', 'B', 'E']}
