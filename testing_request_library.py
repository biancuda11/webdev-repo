import requests
from requests import *

r = requests.get('https://www.zerohedge.com/')

print(r.text)
