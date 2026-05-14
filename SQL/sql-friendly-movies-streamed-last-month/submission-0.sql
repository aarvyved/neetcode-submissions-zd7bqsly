-- Write your query below
select distinct c.title
from content c
join tv_program tv on c.content_id = tv.content_id
where c.content_type = 'Movies'
and c.kids_content = 'Y'
and (tv.program_date >= '2020-06-01' and tv.program_date < '2020-07-01')