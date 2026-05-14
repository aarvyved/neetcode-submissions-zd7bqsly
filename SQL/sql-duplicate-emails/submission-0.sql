-- Write your query below
select email
from person
GROUP BY email
HAVING COUNT(*) > 1