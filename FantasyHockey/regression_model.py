# import tensorflow
# import keras
import pandas as pd
import numpy as np
import sklearn
from sklearn import linear_model
from sklearn.utils import shuffle
import matplotlib.pyplot as pyplot
import pickle
from matplotlib import style

df = pd.read_csv('C:/Users/us52873/Documents/Personal/DataSciencePractice/fantasy-hockey/compiled_skaters_dataset.csv')

df = df[['PTS', 'CF', 'TOI', 'BLK', 'HIT', 'FOW', 'FOL', 'FO%', 'FF','FA', 'oZS%', 'dZS%']]

cols = df.columns

for col in cols:
    df[col] = df[col].fillna(0)

# df['oZS%'] = df['oZS%'].fillna(0)

predict = "PTS"

x = np.array(df.drop([predict], 1))
y = np.array(df[predict])
x_train, x_test, y_train, y_test = sklearn.model_selection.train_test_split(x, y, test_size=0.1)

best = 0

for _ in range(100):

    x_train, x_test,y_train ,y_test = sklearn.model_selection.train_test_split(x, y, test_size=0.1)

    linear = linear_model.LinearRegression()

    linear.fit(x_train, y_train)

    acc = linear.score(x_test, y_test)

    print(acc, best)

    if acc > best:
        best = acc
        with open("studentmodel.pickle", "wb") as f:
            pickle.dump(linear, f)

pickle_in = open("studentmodel.pickle", "rb")

print("Co: " , linear.coef_)
print("intercept"  , linear.intercept_)

predictions = linear.predict(x_test)

for x in range(len(predictions)):
    print(predictions[x], x_test[x], y_test[x])

p = "FF"

style.use("ggplot")

pyplot.scatter(df[p], df["PTS"])
pyplot.xlabel(p)
pyplot.ylabel("Points")
pyplot.show()
