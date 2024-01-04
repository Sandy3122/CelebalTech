import requests
from bs4 import BeautifulSoup

url = "https://www.worlddata.info/capital-cities.php"

# Send an HTTP request to the website and get the page's HTML content
response = requests.get(url)

# Parse the HTML content using Beautiful Soup
soup = BeautifulSoup(response.content, "html.parser")

# Find the table that contains the data
table = soup.find("table", class_="std_table")

# Extract the rows from the table
rows = table.find_all("tr")

# Skip the header row (if it exists)
if len(rows) > 0:
    rows = rows[1:]

# Loop through each row and extract the country, capital, and population information
for row in rows:
    # Extract data from each row
    columns = row.find_all("td")
    country = columns[0].text.strip()
    capital = columns[1].text.strip()
    population = columns[2].text.strip()

    # Do something with the data (e.g., print or save to a file/database)
    print(f"Country: {country}, Capital: {capital}, Population: {population}")
