python
def fibonacci(n):
  """
  This function returns a list containing the Fibonacci sequence up to n terms.

  Args:
      n: The number of terms to generate in the sequence.

  Returns:
      A list containing the Fibonacci sequence up to n terms.
  """
  if n <= 0:
    return []
  elif n == 1:
    return [0]
  else:
    fib_sequence = [0, 1]
    while len(fib_sequence) < n:
      next_fib = fib_sequence[-1] + fib_sequence[-2]
      fib_sequence.append(next_fib)
    return fib_sequence

