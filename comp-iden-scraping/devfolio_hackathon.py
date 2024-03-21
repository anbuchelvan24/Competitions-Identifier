import requests
from bs4 import BeautifulSoup
import pandas as pd

class devfolio:
    def __init__(self):
        self.data = []
    def get_image_link(self,link):
        try:
            response = requests.get(link)
            if response.status_code == 200:
                soup = BeautifulSoup(response.content, 'html.parser')

                img_class = soup.find('div', class_='sc-bTMaZy gFsBBi').find('img')
                img_link=img_class.get('srcset')
                img_src_link=link+img_link
                return (img_src_link)
        except:
            0


    def scrape(self):
        url = 'https://devfolio.co/hackathons/'
        response = requests.get(url)

        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')

            card_elements = soup.find_all('div', class_='sc-bTMaZy sc-tQuYZ hLFXBn jZoUll')  

            for card in card_elements:
                
                title = card.find('h3', class_='sc-hZFzCs cekbtx').text.strip()
                details = card.find_all('p', class_='sc-hZFzCs bDCiEu') 

                if len(details) >= 3:
                    link=card.find('a',class_='Link__LinkBase-sc-af40de1d-0 lkflLS')

                    mode = details[0].text.strip()
                    open = details[1].text.strip()
                    date = details[2].text.strip()
                    comptition_link=(link.get('href'))[:-1]
                    img_link=self.get_image_link(comptition_link)
                    if img_link!=None:
                        if date=='Live':
                            date='Live'
                        else:
                            date=date[6:]
                            date=date.replace(' ','')
                            date=date[:-2]+'20'+date[-2:]
                        self.data.append([title,  date,  mode,"Free", comptition_link, img_link,"Devfolio"])
        self.save_to_excel()

    def save_to_excel(self, filename="Devfolio.xlsx"):
        df = pd.DataFrame(self.data, columns=["Fest Name","Start Date","Mode","Registration_fee","Register_link","Image_link",'Source'])
        df.to_excel(filename, index=False)


