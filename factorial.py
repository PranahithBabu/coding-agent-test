python
def factorial(n):
  """
  Calculate the factorial of a non-negative integer.

  Args:
    n: An integer greater than or equal to 0.

  Returns:
    The factorial of n if n is non-negative.
    Raises ValueError if n is negative.
  """
  if n < 0:
    raise ValueError("Factorial is not defined for negative numbers")
  elif n == 0:
    return 1
  else:
    result = 1
    for i in range(1, n + 1):
      result *= i
    return result
