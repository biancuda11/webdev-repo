import pandas as pd
import re

dir = "C:/Users/us52873/PycharmProjects/tensorEnv/"

df_adv = pd.read_csv(dir + 'skaters_adv.csv', encoding='cp1252')

df_reg = pd.read_csv(dir + 'skaters_reg.csv', encoding='cp1252')

df_toi = pd.read_csv(dir + 'skaters_toi.csv', encoding='cp1252')

dfs = [df_adv, df_reg, df_toi]

for df in dfs:
    df.Player = df.Player.replace(to_replace= r'//', value= 'XXX', regex=True)
    df.Player = df.Player.str.split('XXX').str[0]
    print(df.describe())

print(df_reg.shape)
# conduct merges
df = df_reg.merge(df_adv, how='left', on='Player', suffixes=(None, '_drop'))

df = df.merge(df_toi, how='left', on='Player', suffixes=(None, '_drop'))

cols = df.columns

drop_cols = []

for col in cols:
    if '_drop' in col:
        drop_cols.append(col)

df.drop(columns=drop_cols, inplace=True)

df.to_csv('C:/Users/us52873/Documents/Personal/DataSciencePractice/fantasy-hockey/compiled_skaters_dataset.csv', encoding='utf-8', index=False)

print('SCRIPT FINISHED')
print('==========')
