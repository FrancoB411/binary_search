
defmodule BS do

  def search(max) do
    min = 0
    target = random_from(min, max)
    IO.puts("#{target} is the target") 
    s(target, min, max, average(min, max))
  end

  def s( target, min, max, guess ) when target == guess do
    IO.puts(target)
  end 

  def s(target, min, max, guess ) do
    if target < guess do
      mx = guess - 1
      IO.puts("#{guess} too high") 
      s(target, min, mx, average(min, mx))
    else
      mn = guess + 1
      IO.puts("#{guess} too low") 
      s(target, mn, max, average(mn, max))
    end
  end 

  def average(min, max) do
    trunc ((max + min)/2)
  end

  def random_from(min, max) do
    trunc :random.uniform * (max - min) + min
  end
end

BS.search(300)
