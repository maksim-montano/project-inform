# Сформировать массив из 7 элементов. Элементы массива ввести вручную с клавиатуры. Переставьте каждый элементы массива на  два влево.

import array as arr
x = arr.array('i')
print("x:", end="")
n = 7
x = input().split()[:n]
y = x
for i in range(n):
    c = x[i]
    x[i]=x[i-2]
    x[i-2]=c
y[i] = x[i]
print("y: ", end="")
for i in range(len(y)):
    print(y[i], end=" ")
