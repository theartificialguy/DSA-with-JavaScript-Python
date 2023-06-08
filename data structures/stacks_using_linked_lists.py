class Node:
	def __init__(self, data):
		self.data = data
		self.next = None

class Stack:
	def __init__(self):
		self.top = None
		self.n = 0

	# size
	def __len__(self):
		return self.n

	def size(self):
		return self.n

	def isEmpty(self):
		return self.top == None

	def peek(self):
		if self.isEmpty():
			return None
		else: return self.top.data

	# traverse
	def __str__(self):
		if self.top == None:
			print('stack is empty!')
			return ''

		result = ''
		curr = self.top
		while curr != None:
			result = result + str(curr.data) + ' '
			curr = curr.next
		return result

	# basically insert at head
	def push(self, data):
		new_node = Node(data)
		new_node.next = self.top
		self.top = new_node
		self.n += 1

	# basically remove the element at head
	def pop(self):
		if self.isEmpty():
			# stack is empty
			print('stack is empty!')
			return
		popped_item = self.top.data
		self.top = self.top.next
		self.n -= 1
		return popped_item

	# string reversal using stack
	def reverse_string(self, stack):
		'''
		input: Hello
		output: olleH
		use: stack data structure
		Time complexity: O(n)
		Space complexity: O(n) -> storing n nodes
		result: Stack is not an optimal solution for string reversal
		'''
		# while popping out, print the data
		while not stack.isEmpty():
			popped_item = stack.pop()
			print(popped_item, end='')

	def text_editor(self, input_stack, history_stack, operation):
		'''
		input: Hello
		operation: uruuu
		output: He
		'''
		for op in operation:
			if op == "u":
				popped_item = input_stack.pop()
				history_stack.push(popped_item)
			elif op == "r" and not history_stack.isEmpty():
				last_popped_item = history_stack.pop()
				input_stack.push(last_popped_item)
		# print(input_stack)
		# for printing stack reverse (not needed though)
		res = ''
		while not input_stack.isEmpty():
			res = input_stack.pop() + res
		print(res)

s = Stack()
# s.isEmpty()
# print(f'is stack empty? {s.isEmpty()}')
# s.push(10)
# s.push(4)
# s.push(26)
# s.push(19)
# print(f'is stack empty? {s.isEmpty()}')
# print(s)
# s.pop()
# print(s)
# s.peek()

#======================================== QUESTION 1 - REVERSE STRING ========================================
# reverse string input
# s2 = Stack()
# s2_inp = "Hello"
# for char in s2_inp:
# 	s2.push(char)
# print(s2)
# s2.reverse_string(s2)

#======================================== QUESTION 2 - UNDRO/REDO ========================================
# text editor - undo/redo
s3 = Stack()
# inp3 = "Hello"
# op3 = "uuur"
inp3 = "Kolkata"
op3 = "uurruru"
history_stack = Stack()
for char in inp3:
	s3.push(char)
s3.text_editor(s3, history_stack, op3)

#======================================== QUESTION 3 - CELEBRITY PROBLEM ========================================
# celebrity problem
L = [
	[0, 0, 1, 1], #0
	[0, 0, 1, 0], #1
	[0, 0, 0, 0], #2 is the celebrity as 013 knows 2 but 2 doesn't know anyone
	[0, 0, 1, 0]  #3
]

def celebrity_problem(L): 
	'''
	celebrity: everyone knows him, but he doesn't know anyone -> cannot be more than 1
	'''
	s = Stack()
	for i in range(len(L)):
		s.push(i)

	while s.size() >= 2:
		i = s.pop() #3
		j = s.pop()	#2
		if L[i][j] == 1:
			s.push(j) # as I knows J, I is not a celebrity, push J back in Stack
		else: s.push(i) # J is not a celebrity, I is a possible celebrity, push I in Stack

	maybe_celeb_index = s.pop()
	for i in range(len(L)):
		if i != maybe_celeb_index and L[i][maybe_celeb_index] == 0:
			return None
	return maybe_celeb_index

print(celebrity_problem(L))

#======================================== QUESTION 4 - BALANCED PARANTHESIS ========================================
# inp4 = "[{(a+b)+(c+d)}]" # output = True
# inp4 = "[[(a+b)]" # output = False
# inp4 = "[{(a+b)+(c+d)]}" # output = False as it is mathematically incorrect
inp4 = "(a+b)(" # output = False

def balanced_paranthesis(inp):
	'''
	logic: push when open, pop when close
	'''
	open_paranthesis = ["(", "{", "["]
	closed_paranthesis = [")", "}", "]"]

	chars_map = {
		"{": "}",
		"(": ")",
		"[": "]"
	}

	s = Stack()
	for char in inp:
		# push closed ones
		if char in open_paranthesis:
			s.push(char)
		elif char in closed_paranthesis:
			if chars_map[s.peek()] == char:
				s.pop()
			else: return False

	if s.size() == 0:
		return True
	return False

print(balanced_paranthesis(inp4))






