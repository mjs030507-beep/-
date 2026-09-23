def cal_discount(price):
    rate = 0.95
    if price >= 100000:
        rate = 0.85
    elif price >= 50000:
        rate = 0.90
    return int(price * rate)

price = int(input("구매 금액 입력>> "))
print("할인된 가격:", cal_discount(price))
