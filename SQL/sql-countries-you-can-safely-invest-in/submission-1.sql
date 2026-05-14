-- Write your query below
SELECT co.name AS country
FROM country co
JOIN person p ON substring(p.phone_number, 1, 3) = co.country_code
JOIN calls ca ON p.id = ca.caller_id OR p.id = ca.callee_id
GROUP BY co.name
-- country average
HAVING AVG(ca.duration) > (
    -- global average
    SELECT AVG(duration) FROM calls
);