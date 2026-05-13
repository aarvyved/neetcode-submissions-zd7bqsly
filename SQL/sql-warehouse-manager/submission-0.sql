-- Write your query below
SELECT w.name as warehouse_name,
SUM(CASE 
    WHEN w.units > 0 THEN (w.units * (p.width * p.length * p.height))
    ELSE 0
END) AS volume
FROM warehouse w
JOIN products p on p.product_id = w.product_id
GROUP BY w.name;