class Tournament:
    def __init__(self, number_of_teams):
        self.origin_n = number_of_teams
        self.n = number_of_teams+1 if number_of_teams % 2 != 0 else number_of_teams
        self.table = [[0] * (self.n + 2) for _ in range(self.n + 2)]

    def tournament_scheduler(self, n):
        if n < 2:
            raise IOError("i cant believe you are tricking me like this !!!!!!!!!")
        if n == 2:
            if self.is_even(self.n):
                self.table[self.n-1][1] =self.n
                self.table[self.n][1] = self.n-1
            else :
                self.table[self.n][1] = self.n+1
                self.table[self.n+1][1] = self.n
            return
        if self.is_even(n):
            self.tournament_scheduler(n // 2)
            self.schedule_top(n)
            self.latin_square(n)
            self.symmetrize(n)
            if not self.is_even(n // 2):
                self.remove_last_day(n)
        else:
            self.tournament_scheduler(n + 1)
            if n+1 != self.n:
                self.remove_last_team(n)
            else:
                self.remove_last_team2(n+1)

    def symmetrize(self, n):
        mid = n // 2
        start_day = mid if self.is_even(mid) else mid + 1
        last_day = n - 1 if self.is_even(mid) else n
        for i in range(self.n-n//2+1, self.n+1):
            for j in range(start_day, last_day + 1):
                temp = self.table[i][j]
                if temp != 0:
                    self.table[temp][j] = i

    def schedule_top(self, n):
        mid =self.n-n//2 +1
        last_day = n//2 - 1 if self.is_even(n//2) else n//2
        for i in range(mid, self.n+1):
            for j in range(1, last_day + 1):
                temp = self.table[i][j]
                if temp != 0:
                    self.table[i-n//2][j] = temp - n//2

    def remove_last_day(self, last_day):
        for i in range(1, last_day + 1):
            temp = self.table[i][last_day]
            self.table[i][last_day] = 0
            if temp == 0:
                continue
            for k in range(last_day - 1, 0, -1):
                if self.table[i][k] == 0:
                    self.table[i][k] = temp
                    break

    def remove_last_team(self, last_team):
        for i in range(last_team+1,self.n+1):
            for j in range(1, last_team+1):
                if self.table[i][j] == last_team:
                    self.table[i][j] = 0
        for j in range(1, last_team + 1):
            self.table[last_team][j] = 0
    def remove_last_team2(self, last_team):
        for i in range(1,last_team):
            for j in range(1, last_team):
                if self.table[i][j] == last_team:
                    self.table[i][j] = 0
        for j in range(1, last_team ):
            self.table[last_team][j] = 0

    def latin_square(self, n):
        mid = n // 2
        mid2=self.n-n//2
        new_team=self.n-(n-1)
        last_team = self.n-n//2
        last_day = n - 1 if self.is_even(mid) else n
        start_day = mid if self.is_even(mid) else mid + 1
        start_row= self.n
        for j in range(start_day, last_day + 1):
            self.table[start_row][j] = new_team
            # last_team -= 1
            new_team = new_team + 1
        for i in range(start_row-1, mid2,-1):
            prev_row = i +1
            for j in range(start_day, last_day + 1):
                prev_day = j - 1
                if prev_day < start_day:
                    prev_day = last_day
                self.table[i][j] = self.table[prev_row][prev_day]

    def is_even(self, number):
        return number % 2 == 0

    def print_timetable(self):
        self.tournament_scheduler(self.origin_n)
        last_day = self.origin_n - 1 if self.is_even(self.origin_n) else self.origin_n

        print("Days:    ", end="")
        for j in range(1, last_day + 1):
            print(f"{j} " if j >= 10 else f"{j}  ", end="")
        print("")

        for i in range(1, self.origin_n + 1):
            line = f"Team {i}: " if i >= 10 else f"Team {i}:  "
            for j in range(1, last_day + 1):
                value = self.table[i][j]
                if value != 0:
                    line += f"{value} " if value >= 10 else f"{value}  "
                else:
                    line += "-  "
            print(line)


if __name__ == "__main__":
    while True:
        number_of_teams = int(input("Please enter the number of the teams: "))
        tournament = Tournament(number_of_teams)
        tournament.print_timetable()
