const breadthFirstSearch = (tree, rootNode, searchValue) => {
    // make a queue array
    let queue = [rootNode];
    let path = [];

    // search the queue until it is empty
    while (queue.length > 0) {
        // assign the top of the queue to variable currentNode
        let currentNode = queue[0];
        path = [...path, currentNode.value];

        // if currentNode is the node we're searching for, break & alert
        if (currentNode.value === searchValue) return { path };

        // if currentNode has a left child node, add it to the queue.
        if (currentNode.left !== null) queue = [...queue, tree[currentNode.left]];

        // if currentNode has a right child node, add it to the queue.
        if (currentNode.right !== null) queue = [...queue, tree[currentNode.right]]

        // remove the currentNode from the queue.
        const queueCopy = [...queue];
        queueCopy.shift();
        queue = queueCopy;
    }

    return 'sorry, no such node found.';
};

/* 
binary tree represented by the tree object

         10
       /    \
      4      17
     / \   /   \
    1 	9 12   18	
*/

// javascript object representation of the above tree
const TREE = {
    '10': { value: '10', left: '4', right: '17', },
    '4': { value: '4', left: '1', right: '9', },
    '17': { value: '17', left: '12', right: '18', },
    '1': { value: '1', left: null, right: null, },
    '9': { value: '9', left: null, right: null, },
    '12': { value: '12', left: null, right: null, },
    '18': { value: '18', left: null, right: null, },
};

const output = breadthFirstSearch(TREE, TREE['10'], '12');
console.log('output:', output);
// output: { path: [ '10', '4', '17', '1', '9', '12' ] }
