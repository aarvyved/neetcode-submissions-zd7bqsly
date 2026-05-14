-- Write your query below

-- SELECT sale_date, fruit, sold_num
SELECT a.sale_date, 
a.sold_num - o.sold_num as diff
FROM sales a
JOIN sales o on o.sale_date = a.sale_date
WHERE a.fruit = 'apples' AND o.fruit = 'oranges'
