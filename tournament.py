#O(n^2 log n)
def tournament(n):
    #O(n^2)
    if n==0:
        return 
    lst = [['-'] * (n + 1) for _ in range(n)]
    for i in range(n):
        lst[i][0] = i + 1
    make_plan(lst, n - 1, 0, n, n)
    if n % 2 == 0:
        print_tournament(lst, n, n)
    else:
        print_tournament(lst, n, n + 1)


def make_plan(lst, r_high, r_low, c_high, n, flag=False):
    if n % 2 != 0:
        flag = True

    if n == 2:
        lst[r_low][1] = r_low + 2
        lst[r_low + 1][1] = r_low + 1
        return
    if n == 3:
        lst[r_low][1:4] = [r_low + 2, r_low + 3, '-']
        lst[r_low + 1][1:4] = [r_low + 1, '-', r_low + 3]
        lst[r_low + 2][1:4] = ['-', r_low + 1, r_low + 2]
        return

    if flag:
        for i in lst:
            i.append('-')
        lst.append(['-'] * (n + 2))
        lst[-1][0] = n + 1
        make_plan(lst, r_high + 1, r_low, n + 1, n + 1)
        complete(r_low, r_high, 1, c_high + 1, lst)
        return
    mid = (r_high + r_low) // 2
    c_low = n // 2
    #O(log n)
    make_plan(lst, mid, r_low, c_low, n // 2)
    #make_plan(lst, r_high, mid + 1, c_low, n // 2)
    y = 0
    for i in range(mid + 1, r_high + 1):
        for j in range(r_low, mid + 2):
            if lst[y][j] != '-':
                lst[i][j] = lst[y][j] + mid + 1
        y += 1

    if (n // 2) % 2 != 0:
        #O(n)
        for i in range(c_low + 1, c_high + 1):
            lst[r_low][i] = r_high - i + c_low + 2
        #O(n)
        for i in range(r_low + 1, mid + 1):
            lst[i][c_low + 2:c_high + 1] = lst[i - 1][c_low + 1:c_high]
            lst[i][c_low + 1] = lst[i - 1][c_high]
        fill(r_low, mid, 1, c_high, lst)

    else:
        y = r_high + 1
        for i in range(c_low, c_high):
            lst[r_low][i] = y
            y -= 1
        for i in range(r_low + 1, mid + 1):
            lst[i][c_low + 1:c_high] = lst[i - 1][c_low:c_high - 1]
            lst[i][c_low] = lst[i - 1][c_high - 1]
    #O(n^2)
    for i in range(mid + 1, r_high + 1):
        for j in range(1, c_high):
            v = -1
            for k in range(mid + 1):
                if lst[k][j] == lst[i][0]:
                    v = k
            if lst[i][j] == '-':
                lst[i][j] = v + 1


#O(n^2)
def complete(r_low, r_high, c_low, c_high, lst):
    for i in range(r_low, r_high + 1):
        for j in range(c_low, c_high + 1):
            if lst[i][j] == r_high + 2:
                lst[i][j] = '-'


#O(n^2)
def fill(r_low, r_high, c_low, c_high, lst):
    for i in range(r_low, r_high + 1):
        for j in range(c_low, c_high):
            if lst[i][j] == '-':
                lst[i][j] = lst[i][c_high]


def print_tournament(lst, n, col):
    max_team_len = 0
    for i in range(n):
        s = f"Team {i + 1} :"
        max_team_len = max(max_team_len, len(s))
    widths = [0] * col
    for i in range(n):
        for j in range(col):
            widths[j] = max(widths[j], len(str(lst[i][j])))
    for i in range(n):
        team_str = f"Team {i + 1} :".ljust(max_team_len)
        print(team_str, end="  ")
        for j in range(1, col):
            print(str(lst[i][j]).rjust(widths[j]), end="  ")
        print()


x = int(input("Enter number of teams: "))
tournament(x)
