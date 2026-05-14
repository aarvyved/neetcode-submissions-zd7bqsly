-- Write your query below
select date_id, make_name,
count(DISTINCT lead_id) as unique_leads,
count(DISTINCT partner_id) as unique_partners
from daily_sales
group by date_id, make_name;