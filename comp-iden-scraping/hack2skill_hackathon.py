import csv
from bs4 import BeautifulSoup
import requests
import pandas as pd
from datetime import datetime, date

class hack2skill:
    def __init__(self):
        self.all_data = []

    def scrape(self):
        url = "https://hack2skill.com/#ongoin-initiatives"
        response = requests.get(url)
        soup = BeautifulSoup(response.text, "html.parser")
        swiper_divs = soup.find_all("div", class_="swiper-slide newCard")

        today = date.today()
        
        for swiper_div in swiper_divs:
            registration_link = swiper_div.select_one("a.btn")["href"]
            image_source_link = swiper_div.select_one("img")["src"]
            try:
                last_date_raw = swiper_div.select_one(".last-date").text.strip()
                formatted_last_date = last_date_raw[-12:]
                original_date = datetime.strptime(formatted_last_date, " %b %d %Y")
                converted_date_string = original_date.strftime("%d/%m/%Y")
            except:
                continue
            
            if original_date.date() >= today:
                Fest = swiper_div.select_one("h6").text.strip()
                hack_description = swiper_div.select_one(".hack-description").text.strip()
                reg_fee_element = swiper_div.select_one(".reg-fee span")
                reg_fee = reg_fee_element.text.strip() if reg_fee_element and reg_fee_element.text.strip() != "Fee:" else "Free"
                mode = swiper_div.select_one(".hack-type span").text.strip()
                self.all_data.append([Fest,str(converted_date_string),mode,reg_fee,registration_link, image_source_link, 'Hack2skill'])
        
        self.save_to_excel()

    def save_to_excel(self, filename="hack2skill.xlsx"):
        df = pd.DataFrame(self.all_data, columns=["Fest Name","Start Date","Mode","Registration_fee","Register_link","Image_link",'Source'])
        df.to_excel(filename, index=False)

