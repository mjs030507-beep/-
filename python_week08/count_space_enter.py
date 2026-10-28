space = 0
enter = 0

with open("proverbs.txt", "r", encoding="utf-8") as infile:
    ch = infile.read(1)
    while ch != "":
        if ch == " ":
            space += 1
        elif ch == "\n":
            enter += 1
        ch = infile.read(1)

print("파일명 : proverbs.txt")
print(f"space 수 = {space}, enter 수 = {enter}")
