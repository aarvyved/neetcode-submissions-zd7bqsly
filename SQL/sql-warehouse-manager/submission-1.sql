-- Write your query below
SELECT w.name as warehouse_name,
SUM(w.units * p.width * p.length * p.height) AS volume
FROM warehouse w
JOIN products p on p.product_id = w.product_id
GROUP BY w.name;