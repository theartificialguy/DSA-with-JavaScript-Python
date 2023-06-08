class Node:
	def __init__(self, value):
		self.data = value
		self.left = None
		self.right = None

class BinaryTree:
	def __init__(self):
		self.root = None

	def __preorder_print_helper(self, root):
		if root:
			print(root.data, end=' ')
			self.__preorder_print_helper(root.left)
			self.__preorder_print_helper(root.right)

	def preorder_print(self):
		# Root -> Left -> Right
		root = self.root
		self.__preorder_print_helper(root)

	def __inorder_print_helper(self, root):
		if root:
			self.__inorder_print_helper(root.left)
			print(root.data, end=' ')
			self.__inorder_print_helper(root.right)

	def inorder_print(self):
		# Root -> Left -> Right
		root = self.root
		self.__inorder_print_helper(root)

	def __postorder_print_helper(self, root):
		if root:
			self.__postorder_print_helper(root.left)
			self.__postorder_print_helper(root.right)
			print(root.data, end=' ')

	def postorder_print(self):
		# Root -> Left -> Right
		root = self.root
		self.__postorder_print_helper(root)

t = BinaryTree()
# nodes = [5,2,10,7,15,12,20,30,6,8]
# for n in nodes:
# 	t.insert(n)
# t.print_tree()
t.root = Node('F')
t.root.left = Node('B')
t.root.right = Node('G')
t.root.left.left = Node('A')
t.root.left.right = Node('D')
t.root.left.right.left = Node('C')
t.root.left.right.right = Node('E')
t.root.right.right = Node('I')
t.root.right.right.left = Node('H')
t.preorder_print()
print()
t.inorder_print()
print()
t.postorder_print()








