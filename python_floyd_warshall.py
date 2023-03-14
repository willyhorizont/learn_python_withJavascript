import math

n_vertices = 4


def print_solution(distance):
    for i in range(n_vertices):
        for j in range(n_vertices):
            print(distance[i][j], end='  ')
        print(' ')


def floyd_warshall(gh):
    distance = list(map(lambda i: list(map(lambda j: j, i)), gh))

    # Adding vertices individually
    for k in range(n_vertices):
        for i in range(n_vertices):
            for j in range(n_vertices):
                distance[i][j] = min(distance[i][j], distance[i][k] + distance[k][j])
    print_solution(distance)


graph = [
    [0, 3, math.inf, 5],
    [2, 0, math.inf, 4],
    [math.inf, 1, 0, math.inf],
    [math.inf, math.inf, 2, 0]
]
floyd_warshall(graph)

# output:
# 0  3  7  5
# 2  0  6  4
# 3  1  0  5
# 5  3  2  0
