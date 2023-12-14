const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = insertNode(this.rootNode, data);

    function insertNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (data === node.data) {
        return node;
      }

      if (data < node.data) {
        node.left = insertNode(node.left, data);
      } else {
        node.right = insertNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchInSubtree(this.rootNode, data);

    function searchInSubtree(node, data) {
      if (!node) {
        return false;
      }

      if (data === node.data) {
        return true;
      }

      if (data < node.data) {
        return searchInSubtree(node.left, data);
      } else {
        return searchInSubtree(node.right, data);
      }
    }
  }

  find(data) {
    return findInSubtree(this.rootNode, data);

    function findInSubtree(node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data) {
        return node;
      }

      if (data < node.data) {
        return findInSubtree(node.left, data);
      } else {
        return findInSubtree(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootNode = removeNodeFromSubtree(this.rootNode, data);

    function removeNodeFromSubtree(node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data) {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        node.data = minNode(node.right);
        node.right = removeNodeFromSubtree(node.right, node.data);
        return node;

        function minNode(node) {
          if (!node.left) {
            return node.data;
          }

          return minNode(node.left);
        }
      }

      if (data < node.data) {
        node.left = removeNodeFromSubtree(node.left, data);
      } else {
        node.right = removeNodeFromSubtree(node.right, data);
      }

      return node;
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    return minNode(this.rootNode);

    function minNode(node) {
      if (!node.left) {
        return node.data;
      }

      return minNode(node.left);
    }
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
