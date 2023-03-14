def breadth_first_search(tree, root_node, search_value):
    # make a queue array
    queue = [root_node]
    path = []

    # search the queue until it is empty
    while len(queue) > 0:
        # assign the top of the queue to variable current_node
        current_node = queue[0]
        path = [*path, current_node.get('value')]

        # if current_node is the node we're searching for, break & alert
        if current_node.get('value') == search_value:
            return {'path': path}

        # if current_node has a left child node, add it to the queue.
        if current_node.get('left') is not None:
            queue = [*queue, tree.get(current_node.get('left'))]

        # if current_node has a right child node, add it to the queue.
        if current_node.get('right') is not None:
            queue = [*queue, tree.get(current_node.get('right'))]

        # remove the current_node from the queue.
        queue_copy = [*queue]
        queue_copy.pop(0)
        queue = queue_copy

    return 'sorry, no such node found.'


'''
binary tree represented by the tree object

         10
       /    \
      4      17
     / \   /   \
    1 	9 12   18	
'''

# javascript object representation of the above tree
TREE = {
    '10': {'value': '10', 'left': '4', 'right': '17', },
    '4': {'value': '4', 'left': '1', 'right': '9', },
    '17': {'value': '17', 'left': '12', 'right': '18', },
    '1': {'value': '1', 'left': None, 'right': None, },
    '9': {'value': '9', 'left': None, 'right': None, },
    '12': {'value': '12', 'left': None, 'right': None, },
    '18': {'value': '18', 'left': None, 'right': None, },
}

output = breadth_first_search(TREE, TREE['10'], '12')
print('output:', output)
# output: {'path': ['10', '4', '17', '1', '9', '12']}
