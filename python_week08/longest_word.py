longest = ""

with open("proverbs.txt", "r", encoding="utf-8") as infile:
    for line in infile:
        line = line.rstrip()
        word_list = line.split()
        for word in word_list:
            if len(word) > len(longest):
                longest = word

print("가장 긴 단어는", longest, "입니다.")
