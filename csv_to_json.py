import pandas as pd
import json

hebrew = pd.read_csv('hebrew.csv')

hebrew_obj = [{
    'session': str(hebrew.session[i]),
    'topic': hebrew.topic[i],
    'prompt': hebrew.prompt[i],
    'answer': hebrew.answer[i]
} for i in range(hebrew.shape[0])]

with open('hebrew.json', 'w') as f:
    json.dump(hebrew_obj, f)
