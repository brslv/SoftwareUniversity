SELECT 
	d.Name as [Departments And Addresses] 
FROM Departments d
UNION
SELECT 
	a.AddressText 
FROM Addresses a