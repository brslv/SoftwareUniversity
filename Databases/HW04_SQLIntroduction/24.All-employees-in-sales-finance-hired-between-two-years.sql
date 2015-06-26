SELECT 
	e.FirstName, 
	e.LastName, 
	e.HireDate, 
	d.Name
FROM Employees e
	INNER JOIN Departments d
	ON e.DepartmentID = d.DepartmentID
WHERE 
	(
		d.Name = 'Sales' 
		OR 
		d.Name = 'Finance'
	) 
	AND 
		e.HireDate BETWEEN '01-Jan-1995' AND '01-Jan-2005'
ORDER BY e.HireDate ASC