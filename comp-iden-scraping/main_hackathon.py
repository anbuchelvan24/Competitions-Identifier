import pandas as pd
from devfolio_hackathon import devfolio
from hack2skill_hackathon import hack2skill
from knowafest_hackathons import Knowafest_competitions
import schedule
import time

def scrape_and_combine():
    devfolio_scraper = devfolio()
    print("hi")
    hack2skill_scraper = hack2skill()
    print("hi")
    knowafest_scraper = Knowafest_competitions(num_pages=10)
    print("hi")
    devfolio_scraper.scrape()
    hack2skill_scraper.scrape()
    knowafest_scraper.scrape()

    combined_data = pd.concat([
        pd.read_excel('Devfolio.xlsx'),
        pd.read_excel('hack2skill.xlsx'),
        pd.read_excel('knowafest.xlsx')
    ])

    combined_data.to_excel('hackathons.xlsx', index=False)

schedule.every().day.at("08:00").do(scrape_and_combine)

while True:
    schedule.run_pending()
    time.sleep(1)  
