with open("123.png", "rb") as infile:
    data = infile.read()

with open("123_copy.png", "wb") as outfile:
    outfile.write(data)

print("123.png -> 123_copy.png 복사 완료!")
