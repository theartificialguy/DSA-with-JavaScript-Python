g = {
	'a': ['b', 'c'],
	'b': ['d'],
	'c': ['e'],
	'd': ['f'],
	'e': [],
	'f': []
}

def dfs(g, source):
	# uses STACK data structure
	stack = [source]

	while stack:
		neighbor = stack.pop()
		print(neighbor, end=' ')
		neighbors = g[neighbor]
		for n in neighbors:
			stack.append(n)

def dfs_recursive(g, source):
	# here, although we are not using stack, but the call-stack is being used due to recursion
	print(source, end=' ')
	for n in g[source]:
		dfs_recursive(g, n)

def bfs(g, source):
	# uses QUEUE data structure
	# cannot be done using recursion, if you do so, as recursion uses stack under the hood, queue & stack will fight eachother
	queue = [source]
	
	while queue:
		neighbor = queue.pop(0)
		print(neighbor, end=' ')
		neighbors = g[neighbor]
		for n in neighbors:
			queue.append(n)


# dfs(g, 'a')
# print()
# dfs_recursive(g, 'a')
# print()
# bfs(g, 'a')

########################################################## HAS PATH ##########################################################
# check if there is a path from source node to destination node in a graph

def hasPath(g, src, dst):
	if src == dst:
		return True
	neighbors = g[src]
	for neighbor in neighbors:
		if hasPath(g, neighbor, dst):
			# pass True upwards
			return True
	return False

def iterativeHasPath(g, src, dst):
	# using DFS
	if src == dst:
		return True
	stack = [src]
	while stack:
		lastItem = stack.pop()
		neighbors = g[lastItem]
		for neighbor in neighbors:
			if neighbor == dst:
				return True
			stack.append(neighbor)
	return False

hasPathInputGraph = {
	'f': ['g', 'i'],
	'g': ['h'],
	'h': [],
	'i': ['g', 'k'],
	'j': 'i',
	'k': [],
}

print(hasPath(hasPathInputGraph, 'f', 'k')) # true

########################################################## AVOID CYCLES ##########################################################
# avoid cycles in an undirected graph

def cyclicFreeHasPath(g, src, dst, visited):
	if src == dst:
		return True
	if src in visited:
		return False
	visited.add(src)
	neighbors = g[src]
	for n in neighbors:
		if cyclicFreeHasPath(g, n, dst, visited):
			return True
	return False

cyclicGraph = {
	'i': ['j', 'k'],
	'j': ['i'],
	'k': ['i', 'm', 'l'],
	'm': ['k'],
	'l': ['k'],
	'o': ['n'],
	'n': ['o']
}

visited = set()

print(cyclicFreeHasPath(cyclicGraph, 'j', 'm', visited)) # true

########################################################## CONVERSION ##########################################################
# convert edges to adjacency list for graph traversal

edges = [
	['i', 'j'],
	['k', 'i'],
	['m', 'k'],
	['k', 'l'],
	['o', 'n']
]

def convertEdgesToAdjacencyList(edges):
	graph = {}
	for edge in edges:
		node1, node2 = edge[0], edge[1] # always a pair of nodes
		if node1 not in graph:
			graph[node1] = []
		if node2 not in graph:
			graph[node2] = []
		graph[node1].append(node2)
		graph[node2].append(node1)
	return graph

print(convertEdgesToAdjacencyList(edges))


########################################################## UNION FIND ##########################################################
# UNION FIND -> Find no.of connected components

'''
iterate over every node, apply DFS/BFS on the selected node, after complete traversal increment count.
'''

def unionFind(g):
	visited = set()
	connected_components = 0
	for node in g.keys():
		if node in visited:
			continue
		stack = [node]
		visited.add(node)
		while stack:
			last_node = stack.pop()
			for neighbor in g[last_node]:
				if neighbor not in visited:
					stack.append(neighbor)
					visited.add(neighbor)
		connected_components += 1
	return connected_components

g1 = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
} # 2

g2 = {
  1: [2],
  2: [1,8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2]
} # 1

g3 = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
} # 3

g4 = {
  0: [4,7],
  1: [],
  2: [],
  3: [6],
  4: [0],
  6: [3],
  7: [0],
  8: []
} # 5

g5 = {} # 0

print(unionFind(g1))
print(unionFind(g2))
print(unionFind(g3))
print(unionFind(g4))
print(unionFind(g5))

######################################################## LARGEST COMPONENT ########################################################
# return the size (# nodes) of largest component/island

def largestComponent(g):
	largest = 0 # float(-inf)
	visited = set()
	for node in g.keys():
		if node in visited:
			continue
		visited.add(node)
		stack = [node]
		size = 1
		while stack:
			last_node = stack.pop()
			for n in g[last_node]:
				if n not in visited:
					visited.add(n)
					stack.append(n)
					size += 1
		if size > largest:
			largest = size
	return largest

g1 = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
} # 4

g2 = {
  1: [2],
  2: [1,8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2]
} # 6

g3 = {
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
} # 5

g4 = {
  0: [4,7],
  1: [],
  2: [],
  3: [6],
  4: [0],
  6: [3],
  7: [0],
  8: []
} # 3

g5 = {} # 0

print(largestComponent(g1))
print(largestComponent(g2))
print(largestComponent(g3))
print(largestComponent(g4))
print(largestComponent(g5))

######################################################## SMALLEST PATH ########################################################
# return smallest path between 2 nodes

'''
* count edges not nodes
* use BFS as DFS may select a wrong dir and it will explore until it hits an end but BFS will explore all its neighbors
'''

def shortestPath(g, start, end):
	visited = set()
	queue = [[start, 0]]
	visited.add(start)
	while queue:
		last = queue.pop(0)
		node, distance = last[0], last[1]
		
		if node == end:
			return distance

		for neighbor in g[node[0]]:
			if neighbor not in visited:
				visited.add(neighbor)
				queue.append([neighbor, distance + 1])

	return -1

print(shortestPath(convertEdgesToAdjacencyList([
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
]), 'w', 'z')) # 2

print(shortestPath(convertEdgesToAdjacencyList([
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
]), 'y', 'x')) # 1

print(shortestPath(convertEdgesToAdjacencyList([
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
]), 'a', 'e')) # 3

print(shortestPath(convertEdgesToAdjacencyList([
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
]), 'e', 'c')) # 2

print(shortestPath(convertEdgesToAdjacencyList([
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
]), 'b', 'g')) # -1

print(shortestPath(convertEdgesToAdjacencyList([
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
]), 'w', 'e')) # 1

print(shortestPath(convertEdgesToAdjacencyList([
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
]), 'n', 'e')) # 2

print(shortestPath(convertEdgesToAdjacencyList([
  ['m', 'n'],
  ['n', 'o'],
  ['o', 'p'],
  ['p', 'q'],
  ['t', 'o'],
  ['r', 'q'],
  ['r', 's']
]), 'm', 's')) # 6











