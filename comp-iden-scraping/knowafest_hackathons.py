import requests
from bs4 import BeautifulSoup
import pandas as pd
from datetime import datetime, date


class Knowafest_competitions:
    def __init__(self, num_pages):
        self.num_pages = num_pages
        self.all_data = []
    def get_image_link(self, Register_link):
        response = requests.get(f"{Register_link}")
        soup = BeautifulSoup(response.text, 'html.parser')
        img_div = soup.find('div', class_='col-lg-10')
        if img_div:
            img_tag = img_div.find('img')
            if img_tag:
                img_link = img_tag.get('src')
                img_link=("https://www.knowafest.com"+img_link)
                img_link=img_link.replace(' ',"%20")
                if img_link[-3:]!='gif':
                    return img_link
        return None

    def scrape(self):
        today = date.today()

        for page_num in range(1, self.num_pages + 1):
            url = f"https://www.knowafest.com/explore/category/Hackathon?page={page_num}"
            response = requests.get(url)
            soup = BeautifulSoup(response.content, "html.parser")

            table = soup.find('table', {'id': 'tablaDatos1'})

            if table:
                for row in table.find_all('tr')[1:]:
                    link = row.get('onclick')
                    Register_link = 'https://www.knowafest.com/explore' + link[link.find('/'):-5]
                    columns = row.find_all('td')
                    start_date = datetime.strptime(columns[0].text.strip(), "%d %b %Y").date()
                    if start_date >= today:  # Check if start date is today or in the future
                        fest_name = columns[1].text.strip()
                        college_name = columns[3].text.strip()
                        mode = 'offline'
                        img_link = self.get_image_link(Register_link)
                        self.all_data.append([fest_name,start_date,mode,"Free", Register_link, img_link,'Knowafest'])
            else:
                print(f"No table found on page {page_num}")
            self.save_to_excel()

    def save_to_excel(self, filename="knowafest.xlsx"):
        df = pd.DataFrame(self.all_data, columns=["Fest Name","Start Date","Mode","Registration_fee","Register_link","Image_link",'Source'])
        df.to_excel(filename, index=False)

