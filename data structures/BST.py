class Node:
	def __init__(self, data):
		self.data = data
		self.left = None
		self.right = None

class BST:
	def __init__(self):
		self.root = None

	def __preorder_print(self, ref):
		if ref:
			print(ref.data, end=' ')
			self.__preorder_print(ref.left)
			self.__preorder_print(ref.right)

	def preorder_print(self):
		ref = self.root
		self.__preorder_print(ref)

	def iterative_insert(self, value):
		new_node = Node(value)
		if self.root == None:
			self.root = new_node
		else:
			ref = self.root
			while ref != None:
				if new_node.data < ref.data:
					if ref.left == None:
						ref.left = new_node
						break
					else:
						ref = ref.left
				else:
					if ref.right == None:
						ref.right = new_node
						break
					else:
						ref = ref.right

	def __recursive_insert(self, new_node, ref):
		if new_node.data < ref.data:
			if ref.left == None:
				ref.left = new_node
			else:
				self.__recursive_insert(new_node, ref.left)
		else:
			if ref.right == None:
				ref.right = new_node
			else:
				self.__recursive_insert(new_node, ref.right)

	def recursive_insert(self, value):
		new_node = Node(value)
		if self.root == None:
			self.root = new_node
		else:
			ref = self.root
			self.__recursive_insert(new_node, ref)

	def iterative_search(self, value):
		if self.root.data == value:
			return 'Found'
		ref = self.root
		while ref != None:
			if value < ref.data:
				ref = ref.left
				if ref == None:
					return 'Not Found'
				elif ref.data == value:
					return 'Found'
			else:
				ref = ref.right
				if ref == None:
					return 'Not Found'
				elif ref.data == value:
					return 'Found'
		return 'Not found'

	def __recursive_search(self, value, ref):
		if ref == None:
			print('Not Found')
			return
		if value == ref.data:
			print('Found')
			return
		elif value < ref.data:
			self.__recursive_search(value, ref.left)
		else:
			self.__recursive_search(value, ref.right)

	def recursive_search(self, value):
		ref = self.root
		self.__recursive_search(value, ref)

	def height(self):

		def __height(root):
			if root == None: # base case -> 1 + (-1) = 0
				return -1
			return 1 + max(__height(root.left), __height(root.right))

		root = self.root
		return __height(root)

	def iterative_size(self):
		if self.root is None:
			return 0
		stack = []
		stack.append(self.root) # stack push
		size = 1
		while stack:
			last_node = stack.pop()
			if last_node.left:
				size += 1
				stack.append(last_node.left)
			if last_node.right:
				size += 1
				stack.append(last_node.right)
		return size

	def recursive_size(self):
		if self.root == None:
			return 0
		
		def __recursive_size(root):
			if root is None:
				return 0
			return 1 + __recursive_size(root.left) + __recursive_size(root.right)

		return __recursive_size(self.root)

	def invert(self):
		if self.root == None:
			return None

		def __invert(self, root):
			# swap
			temp = root.left
			root.left = root.right
			root.right = temp

			# traverse left & right subtree
			__invert(root.left)
			__invert(root.right)

			return root

def __is_bst(root, left, right):
	if root == None:
		return True

	if not (root.data > left and root.data < right): # fails bst property
		return False

	is_left_subtree_valid = __is_bst(root.left, left, root.data)
	is_right_subtree_valid = __is_bst(root.right, root.data, right)

	return (is_left_subtree_valid and is_right_subtree_valid)

def is_bst(root):
	return __is_bst(root, float("-inf"), float("inf")) # as the root value can be anything



bst = BST()
bst.recursive_insert(4)
bst.recursive_insert(1)
bst.recursive_insert(2)
bst.recursive_insert(6)
bst.recursive_insert(10)
bst.preorder_print()
print()
bst.recursive_search(0)
bst.recursive_search(4)
bst.recursive_search(1)
bst.recursive_search(2)
bst.recursive_search(6)
bst.recursive_search(10)
bst.recursive_search(69)
print('height: ', bst.height())
print('recursive size: ', bst.recursive_size())
print('iterative size: ', bst.iterative_size())

# check if a tree is a BST?
t1 = BST()
t1.root = Node(8)
t1.root.left = Node(3)
t1.root.right = Node(10)
t1.root.left.left = Node(1)
t1.root.left.right = Node(2)
t1.root.right.left = Node(9)
t1.root.right.right = Node(11)
print(f'is bst? => {is_bst(t1.root)}') # false

t2 = BST()
t2.root = Node(8)
t2.root.left = Node(3)
t2.root.right = Node(10)
t2.root.left.left = Node(1)
t2.root.left.right = Node(6)
t2.root.right.left = Node(9)
t2.root.right.right = Node(11)
print(f'is bst? => {is_bst(t2.root)}') # true -> 1,3,6,8,9,10,11

t3 = BST()
t3.root = Node(12)
t3.root.left = Node(3)
t3.root.right = Node(14)
t3.root.left.left = Node(1)
t3.root.left.right = Node(13)
t3.root.right.left = Node(11)
t3.root.right.right = Node(15)
print(f'is bst? => {is_bst(t3.root)}') # false