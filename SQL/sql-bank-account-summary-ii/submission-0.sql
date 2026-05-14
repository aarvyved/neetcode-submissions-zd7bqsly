-- Write your query below
SELECT u.name,
SUM(t.amount) as balance
FROM users u
JOIN transactions t ON t.account = u.account
GROUP BY u.account
HAVING SUM(t.amount) > 10000;