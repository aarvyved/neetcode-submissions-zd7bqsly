-- Write your query below

SELECT t.team_id, t.team_name,
SUM(
    CASE WHEN t.team_id = m.host_team AND m.host_goals > m.guest_goals THEN 3
        WHEN t.team_id = m.guest_team AND m.guest_goals > m.host_goals THEN 3
        WHEN m.host_goals = m.guest_goals THEN 1
        ELSE 0
    END
) as num_points
FROM teams t
LEFT JOIN matches m ON m.host_team = t.team_id OR m.guest_team = t.team_id
GROUP BY t.team_id
ORDER BY num_points DESC, team_id