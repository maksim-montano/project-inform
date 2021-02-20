import array as arr
n = int(input("Количество элементов: "))
mass = arr.array('i')
for i in range(n):
	print(i+1, end="-")
	mass.append(int(input("element: ")))
print("Начальный массив: ", end=" ")
for i in range(len(mass)):
	print(mass[i], end=" ")
print()
for i in range(n):
	for j in range(n-1):
		if mass[j] > mass[j+1]:
			temp = mass[j]
			mass[j] = mass[j+1]
			mass[j+1]=temp
print("Отсортированный массив: ", end = " ")
for i in range(len(mass)):
	print(mass[i], end=" ")