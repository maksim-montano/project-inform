my_list1=[[11, 12, 5, 2],
          [15, 6, 10, 5],
          [10, 8, 12, 5]]
for i in my_list1:
    for  j in i:
        print ( j, end="  ")
    print ()
print (my_list1[1][3])