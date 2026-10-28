# 실습 : 매출 파일 처리
# sales.txt 를 읽어서 총매출과 평균 매출을 계산한 후 summary.txt 에 저장

sum = 0      # 매출 합계 누적
count = 0    # 데이터 개수

try:
    # 1. 매출 파일 읽기
    with open("sales.txt", "r", encoding="utf-8") as infile:
        for line in infile:
            line = line.rstrip()     # 오른쪽 공백/줄바꿈 제거
            if line:                 # 빈 줄은 건너뛰기
                sum += int(line)     # 문자열 -> 정수로 변환해서 더하기
                count += 1

    # 2. 평균 매출 계산
    average = sum / count

    # 3. 결과를 다른 파일에 저장 (저장할 때는 문자열이어야 함)
    with open("summary.txt", "w", encoding="utf-8") as outfile:
        outfile.write("총매출 = " + str(sum) + "\n")
        outfile.write("평균 매출 = " + str(average) + "\n")

    print("총매출 =", sum)
    print("평균 매출 =", average)
    print("summary.txt 파일 작성 완료!")

except FileNotFoundError:
    print("파일 열기 오류")
