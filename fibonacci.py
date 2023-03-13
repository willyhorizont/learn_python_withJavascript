def generateFibonacciUntil(stopper=5):
    iterator = 0
    fibonacci = [0, 1]
    while True:
        if iterator == stopper:
            break
        fibonacci = [*fibonacci, fibonacci[-1] + fibonacci[-2]]
        iterator += 1
    return fibonacci


print(generateFibonacciUntil(40))
