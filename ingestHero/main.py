import requests
import json

heros = []
#1,51 -
#51,101 -
#101,151 -
#151, 201 -
#201, 251 -
#251, 351 - 
#351, 451 -
#451, 551 -
#551, 651 -
#651, 732


for i in range(651, 732):
    res = requests.get('https://superheroapi.com/api/2440417162768396/{}'.format(i))
    heros.append(res.json())

res = requests.post('http://localhost:5000/hero/add', json=heros)