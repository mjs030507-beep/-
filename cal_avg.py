def cal_avg(numbers):
    total = 0
    for i in range(numbers):
        num = int(input("정수 입력: "))
        total = total + num
    avg = total / numbers
    return round(avg, 2)

n = int(input("몇 개 입력? "))
result = cal_avg(n)
print(f"평균: {result:.2f}")
