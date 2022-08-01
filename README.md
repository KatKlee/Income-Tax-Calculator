TO DO

1. Bedingungen für 2021 bezüglich Einkommenshöhe formulieren (5 Fälle)

a. 
Einkommen <= 9744
ESt = 0

b. 
9745 <= Einkommen <= 14753
y = (Einkommen-9744)/10000
ESt = (995.21 * y + 1400) *y

c.
14754 <= Einkommen <= 57918 
z = (Einkommen - 14753)/10000
ESt = (208.85 * z + 2397) * z + 950,96

d.
57919 <= Einkommen <= 274612
ESt = 0,42 * Einkommen - 9136,63  

e.
274613 <= Einkommen
ESt = 0,45 * Einkommen - 17374.99


2. Errechneten Wert auf ganze Summe abrunden (floor)

3. 
1 Person – ESt mit dieser Rechnung fertig
2 Personen – ESt aus Rechnung * 2
Einkommen =(Einkommen (Person1+person2) / 2)

4. Kirchensteuer einarbeiten

5. Funktionen und Bedingungen erstellen: 

split if(true)(/2) else braucht es nicht, da bei ledig vor Rechnung nichts mehr mit Einkommen passieren muss; 

year (if year===2021/else if year===2020/else if year===2019), die Jahre beinhalten jeweils eine Variable mit den Werten aus dem nächsten Schritt;

arrow funtion pro Jahr formulieren (mit den 5 Fällen; if, else if, else if, else if, else (ESt =0))



