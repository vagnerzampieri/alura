# Selection Algorithm

# example: Finding the cheaper

prices = [1_000_000, 46_000, 16_000, 46_000, 17_000]

# current | cheaper
# 0       | 0
# 1       | 1
# 2       | 2
# 3       | 2
# 4       | 2

# algorithm:

# for 0 in 4 including {
#   current price < price cheaper {
#     cheaper = current
#   }
#   current++
# }
# print cheaper
# print price cheaper

# in ruby:

cheaper = 0

prices.each_with_index do |price, index|
  cheaper = index if price < prices[cheaper]
end

p cheaper
p prices[cheaper]

# ruby better way:

prices.sort.first

# example: find more expensive and cheaper salary

salaries = [3_200, 6_000, 5_000, 2_200]

cheaper = 0
more_expensive = 0

salaries.each_with_index do |salary, index|
  cheaper = index if salary < salaries[cheaper]
  more_expensive = index if salary > salaries[more_expensive]
end

p salaries[cheaper]
p salaries[more_expensive]

salaries.sort.first # cheaper
salaries.sort.last # more_expensive