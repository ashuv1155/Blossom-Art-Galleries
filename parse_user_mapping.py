import csv
from collections import Counter

counts = Counter()
with open('user_provided_mapping.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        counts[row['Best Fitted Category']] += 1

print(counts)
