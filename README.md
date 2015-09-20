# Binary Search 

## binarySearch.js

A guessing game algorithm. 

### Input: 
An integer of how many numbers to guess from. 

### Output: 
Logs a series of guesses out to the screen until it finds the target number. 

### Variables: 
min = 0  
max = max number in search range, input by user  
target = randomly generated number between min and max  
guess = mean of the min and max numbers to guess from.  

### Steps
If guess == target, print guess and terminate  
If guess > target, max = guess -1  
If guess < target, min = guess +1  
guess again  


## randomSearch.js

A guessing game algorithm. 

### Input: 
An integer of how many numbers to guess from. 

### Output: 
Logs a series of guesses out to the screen until it finds the target number. 

### Variables: 
min = 0  
max = max number in search range, input by user  
target = randomly generated number between min and max  
guess = a random guess between the min and max numbers   

### Steps
If guess == target, print guess and terminate  
If guess > target, max = guess -1  
If guess < target, min = guess +1  
guess again  

## binary_search.exs
Recursive guessing game algorithm implemented in Elixir. 

### Input: 
An integer of how many numbers to guess from. 

### Output: 
Logs a series of guesses out to the screen until it finds the target number. 

### Variables: 
min = 0  
max = max number in search range, input by user  
target = randomly generated number between min and max  
guess = mean of the min and max numbers to guess from.  

### Steps
If guess == target, print guess and terminate  
If guess > target, max = guess -1  
If guess < target, min = guess +1  
guess again

### Usage
"""
elixir binary_search.exs

"""
