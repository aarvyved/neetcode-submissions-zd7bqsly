-- Write your query below
SELECT u.name, COALESCE(SUM(distance), 0) as travelled_distance
FROM users u
LEFT JOIN rides r ON r.user_id = u.id
GROUP BY u.id
ORDER BY travelled_distance DESC, u.name;