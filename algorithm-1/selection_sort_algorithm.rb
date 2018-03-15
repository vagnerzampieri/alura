# Selection Sort Algorithm

# Does not the best algorithm to sort

# find the cheaper product and switch with current position

prices = [1_000_000, 46_000, 16_000, 46_000, 17_000]

def selection_algorithm(array, current)
  min_idx = current

  for j in (current + 1)...array.length
    min_idx = j  if array[j] < array[min_idx]
  end

  min_idx
end

def selection_sort!(array)
  for i in 0..(array.length-1)
    min_idx = selection_algorithm(array, i)
    array[i], array[min_idx] = array[min_idx], array[i]
  end

  array
end

p selection_sort!(prices)
#  => [16000, 17000, 46000, 46000, 1000000]
