# product_list_dict = [
#     {id: 'id1', 'price': 30_000},
#     {id: 'id2', 'price': 233_000},
#     {id: 'id3', 'price': 5_000},
#     {id: 'id4', 'price': 499_000}
# ]

# product_dict_new = {id: 'id5', 'price': 686_868}
# product_dict_new_2 = {id: 'id6', 'price': 274_345}

# print([*product_list_dict, { id: 'id5', 'price': 696969 } ])
# print([*product_list_dict, { **product_dict_new_2 } ])
# print({ **product_dict_new_2 })
# print({**product_dict_new, **product_dict_new_2})

# product_dict_new_2_copy = { **product_dict_new_2 }
# print(product_dict_new_2_copy['price'])

# obyek = { 'a': 1, 'b': 2, 'c': 3 }

# # for property in obyek:
# #   print(property)
# obyek['d'] = '4'
# print(obyek)

# print(obyek.get('e'))

# import math

# def shortest_distance_node(distances, visited):
#     shortest = None

#     print('distances', distances)
#     print('visited', visited)
#     for node in distances:
#         # const currentIsShortest = shortest === null || distances[node] < distances[shortest]
#         currentIsShortest = shortest is None or (distances.get(shortest) is not None and distances.get(node) is not None and distances.get(node) < distances.get(shortest))
#         if currentIsShortest or node not in visited:
#             shortest = node
#     print('shortest', shortest)
#     return shortest

# visited = []
# distances = { 'E': math.inf, 'B': 4, 'C': 2 }
# shortest_distance_node(distances, visited)


# array1 = [1, 2, 3]
# print('array1', array1)

# first_element = array1.pop(0)

# print('first_element', first_element)
# print('array1', array1)

# import math

# graph = [
#     [0, 3, math.inf, 5],
#     [2, 0, math.inf, 4],
#     [math.inf, 1, 0, math.inf],
#     [math.inf, math.inf, 2, 0]
# ]

# def map_callback_1(j):
#     return j
# def map_callback_2(i):
#     return list(map(map_callback_1, i))
    
# # distance = list(map(lambda i: list(map(lambda j: j, i)), gh))
# distance = list(map(map_callback_2, graph))
# print('distance', distance)

# from math import inf

# print('inf', inf)

# edges = { 'B': 4, 'C': 2 }

# for edge in edges:
#     print(edges[edge])

# graph = {
#     'A': { 'B': 4, 'C': 2 },
#     'B': { 'A': 4, 'C': 1, 'D': 5 },
#     'C': { 'A': 2, 'B': 1, 'D': 8, 'E': 10 },
#     'D': { 'B': 5, 'C': 8, 'E': 2 },
#     'E': { 'C': 10, 'D': 2 }
# }

# startVertex = [gh for gh in graph]
# # print(startVertex)

MST = set()
print(MST)
MST.add('A')
print(MST)

# MST = {}
# MST.add
