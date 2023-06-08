class Stack:
	def __init__(self, size):
		self.size = size
		self.stack = [None] * self.size
		self.top = -1 

	def push(self, value):
		if self.top == self.size - 1:
			return 'Stack Overflow'
		else:
			self.top += 1
			self.stack[self.top] = value

	def pop(self):
		if self.top == -1:
			return 'Stack Empty'
		else:
			popped_item = self.stack[self.top]
			self.stack[self.top] = None
			self.top -= 1
			return popped_item

	def __str__(self):
		for i in range(self.top + 1): # as top initialised as -1 
			print(self.stack[i])