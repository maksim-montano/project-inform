S = [1224, 196, 1505, 426, 276]
print('Метод пузырька:')
print('Начальный массив:', S)
for i in range(len(S)):
    for j in range(len(S) - 1):
        if S[j] > S[j+1]:
            temp = S[j]
            S[j] = S[j+1]
            S[j+1]=temp
print('Отсортированный массив: ', end= " ")
for i in range(len(S)):
    print(S[i], end=" ")
S = [1224, 196, 1505, 426, 276]



print('\n\nМтодом sorted:')
print('Начальный массив:', S)
print('Отсортированный массив:', sorted(S, reverse=False))