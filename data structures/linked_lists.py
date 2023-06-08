class Node:
	def __init__(self, value):
		self.data = value
		self.next = None

class LinkedList:
	def __init__(self):
		self.head = None
		self.count = 0

	def __len__(self):
		return self.count

	def insert_at_head(self, value):
		new_node = Node(value)
		new_node.next = self.head
		self.head = new_node
		self.count = self.count + 1

	def __str__(self):
		if self.count == 0:
			return 'Linked List is empty. Cannot traverse.'
		if self.count == 1:
			return str(self.head.data)
		# otherwise, traverse each element in LL
		else:
			result = ''
			head = self.head
			while head != None:
				result = result + str(head.data) #+ '->'
				head = head.next
			return result#[:-2] # exclude last 2 string characters

	# insert at tail
	def append(self, value):
		new_node = Node(value)
		# check empty LL condition
		if self.head == None:
			self.head = new_node
			self.count = self.count + 1
			return
		# find last node i.e. tail node
		head = self.head
		while head.next != None:
			head = head.next
		head.next = new_node
		self.count = self.count + 1

	def insert_after_position(self, value, index):
		new_node = Node(value)
		# check empty LL condition
		if self.head == None:
			self.head = new_node
		# middle = self.count // 2
		head = self.head
		i = 1
		while i < index:
			head = head.next
			i += 1
		# mid_plus_one = head.next # to track mid+1'th node
		# head.next = new_node
		# new_node.next = mid_plus_one
		if head != None:
			new_node.next = head.next
			head.next = new_node
			self.count = self.count + 1
		else:
			print('Position not found!')

	def insert_after_value(self, value, after):
		new_node = Node(value)
		# check empty LL condition
		if self.head == None:
			self.head = new_node
		head = self.head
		while head != None:
			if head.data == after:
				break
			head = head.next
		if head != None:
			new_node.next = head.next
			head.next = new_node
			self.count = self.count + 1
		else:
			print('Item not found!')

	def clear(self):
		self.head = None
		self.count = 0

	def delete_head(self):
		if self.head != None:
			self.head = self.head.next
			self.count = self.count - 1
		else:
			print('Cannot delete from head!')

	# delete from tail
	def pop(self):
		if self.head == None: # check for empty LL
			return 'Empty LL'
		if self.head.next == None: # check for LL having only 1 node
			self.delete_head()
			return
		curr = self.head
		while curr.next.next != None:
			curr = curr.next
		curr.next = None
		self.count = self.count - 1

	def delete_by_value(self, value):
		# if LL is empty
		if self.head == None:
			return 'Empty LL'
		# if first value is the value to be deleted
		if self.head.data == value:
			return self.delete_head()
		curr = self.head
		# find the node to be deleted
		while curr.next != None:
			if curr.next.data == value:
				break
			curr = curr.next
		if curr.next == None:
			return 'Value not found!'
		else:
			curr.next = curr.next.next
			self.count = self.count - 1

	def search(self, item):
		curr = self.head
		while curr != None:
			if curr.data == item:
				print('Item found!')
				return
			curr = curr.next
		if curr == None:
			print('Item not found!')

	def max(self):
		_max = 0 # initialise with the smallest number -> just considering whole numbers for now
		curr = self.head
		while curr != None:
			if curr.data > _max:
				_max = curr.data
			curr = curr.next
		if _max > 0:
			return _max
		else: return 0

	def replace_max(self, value):
		# replacing the NODE itself
		_max = 0 # initialise with the smallest number -> just considering whole numbers for now
		curr = self.head
		
		#1 find the max value in LL
		while curr != None:
			if curr.data > _max:
				_max = curr.data
			curr = curr.next
		
		#2 replace the max value with new value node
		new_node = Node(value)
		#2.1 case 1: if max was HEAD node
		if _max == self.head.data:
			new_node = self.head.next
			self.head = new_node
			return
		#2.2 case 2: if max was not HEAD node
		curr = self.head
		while curr.next != None:
			if curr.next.data == _max:
				break
			curr = curr.next
		new_node.next = curr.next.next
		curr.next = new_node

	def replace(self, value):
		# replacing the value of max node
		_max = self.head
		curr = self.head
		while curr != None:
			if curr.data > _max:
				_max = curr
			curr = curr.next
		_max.data = data

	def sum_odd_positions(self):
		_sum = 0
		i = 0
		curr = self.head
		while curr != None:
			if i%2 != 0:
				_sum += curr.data
			curr = curr.next
			i += 1
		return _sum

	def inplace_reversal(self):
		prev = None # starting from head
		curr = self.head
		while curr != None:
			next_node = curr.next # saving next connection
			curr.next = prev # rewriting next connection
			prev = curr
			curr = next_node
		self.head = prev

	def string_patter_problem(self):
		'''
		s: input linked list => A,n,*,/,a,p,p,l,e,*,a,/,d,a,y,*,*,k,e,e,p,s,/,*,a,/,/,d,o,c,t,o,r,*,A,w,a,y
		rules: 1) replace single occurrence of * or / by a single space
			   2) replace consecutive occurrence of * or / eg: */,**,//,/*, by space and capitalize next char 
		'''
		curr = self.head
		while curr != None:
			if curr.data == '*' or curr.data == '/':
				curr.data = ' '
				if curr.next.data == '*' or curr.next.data == '/':
					curr.next.next.data = curr.next.next.data.upper()
					curr.next = curr.next.next # skipping the 2nd char
			curr = curr.next


# ll = LinkedList()
# ll.insert_at_head(4)
# ll.insert_at_head(3)
# ll.insert_at_head(2)
# ll.insert_at_head(1)
# print('Size of my Linked List', len(ll))
# print('Traversing...')
# print(ll)
# ll.append(5)
# ll.append(6)
# print('Size of my Linked List', len(ll))
# print(ll)
# ll.insert_after_position(50, 2)
# print(ll)
# ll.insert_after_value(60, 50)
# print(ll)
# ll.insert_after_value(69, 4)
# print(ll)
# # ll.clear()
# # print(ll)
# # ll.delete_head()
# # print(ll)
# ll.pop()
# print(ll)
# ll.delete_by_value(3)
# print(ll)
# ll.search(69)
# print(ll.max())
# ll.append(100)
# print(ll)
# ll.replace_max(112)
# print(ll)
# print(ll.max())
# print(ll.sum_odd_positions())
# ll.inplace_reversal()
# print(ll)

ll2 = LinkedList()
pattern = ['A','n','*','/','a','p','p','l','e','*','a','/','d','a','y','*','*',
		   'k','e','e','p','s','/','*','a','/','/','d','o','c','t','o','r','*','A','w','a','y']
for char in pattern:
	ll2.append(char)

print(ll2)
ll2.string_patter_problem()
print(ll2)
