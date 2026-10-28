import os

files = os.listdir()
for name in files:
    if os.path.isfile(name) and name.endswith(".txt"):
        try:
            with open(name, "r", encoding="utf-8") as infile:
                for line in infile:
                    line = line.rstrip()
                    if "Python" in line:
                        print(name, ":", line)
        except UnicodeDecodeError:
            print(name, ": 인코딩이 달라서 읽을 수 없음")
