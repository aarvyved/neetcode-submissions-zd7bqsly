-- Write your query below
select c.customer_id, c.name
from customers c
join orders o on c.customer_id = o.customer_id
join product p on o.product_id = p.product_id
where o.order_date between '2020-06-01' AND '2020-08-01'
group by c.customer_id
having sum(
    case when o.order_date >= '2020-06-01' AND
    o.order_date < '2020-07-01'
    then o.quantity * p.price else 0
    end
) >= 100 
and sum(
    case when o.order_date >= '2020-07-01' AND
    o.order_date < '2020-08-01'
    then o.quantity * p.price else 0
    end
) >= 100

