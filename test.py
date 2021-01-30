n=7
from random import randint
a = [0]*n
sum1=0
sum2=0
for i in range (n):
    a[i]=randint(10,100)
    print ("a[",i,"]=",a[i])
for i in range (n):
    if a[i]%2!=0:
      sum1 += a[i]
print ("Сумма всех нечетных значений= ", sum1)
for i in range (n):
    if a[i] >= 40:
      sum2 += a[i]
print ("Сумма элементов массива > 40= ", sum2)
min1 = a[0]
for i in range(n):
    if a[i] < min1:
      min1 = a[i]
print ("минимальный элемент массива=", min1)
