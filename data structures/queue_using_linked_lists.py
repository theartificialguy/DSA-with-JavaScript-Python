class Node:
	def __init__(self, data):
		self.data = data
		self.next = None

class Queue:
	def __init__(self):
		self.front = None
		self.rear = None
		self.n = 0

	def __len__(self):
		return self.n

	def traverse(self):
		front = self.front
		while front != None:
			print(front.data, end=' ')
			front = front.next

	def enqueue(self, value):
		new_node = Node(value)
		if self.front == None: # if queue is empty
			self.front = new_node
			self.rear = self.front
		else:
			self.rear.next = new_node
			self.rear = new_node
			self.n += 1

	def dequeue(self):
		if self.front == None: # if queue is empty
			return 'Empty'
		else:
			front = self.front.data
			self.front = self.front.next
			self.n -= 1
			return front

q = Queue()
q.enqueue(4)
q.traverse()
q.enqueue(2)
q.enqueue(6)
q.enqueue(8)
q.traverse()
print()
print(f'{q.dequeue()} dequeued')
q.traverse()
print()
print(f'{q.dequeue()} dequeued')
print(f'{q.dequeue()} dequeued')
print(f'{q.dequeue()} dequeued')
print(f'{q.dequeue()} dequeued')
q.traverse()