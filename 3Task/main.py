s = input()

stack = []
flag = True
bracket = {
    '(': ')',
    '[': ']',
    '{': '}'
}

for x in s:
    if x in bracket.keys():
        stack.append(x)
    elif len(stack) > 0 and bracket[stack[-1]] == x:
        stack.pop()
    else:
        flag = False
        break

if len(stack) > 0 or flag == False:
    print(False)
else:
    print(True)
