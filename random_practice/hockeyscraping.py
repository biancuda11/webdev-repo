import hockey_scraper

# Scrapes the 2008 season without shifts and returns a dictionary containing the pbp Pandas DataFrame
data = hockey_scraper.scrape_seasons([2019], True)
