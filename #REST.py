#REST
import os
from dotenv import load_dotenv
import tweepy
import pandas

load_dotenv("./.env")

df = pandas.DataFrame(columns = ['Tweets', 'User', 'User_statuses_count',
                             'user_followers', 'User_location', 'User_verified',
                             'fav_count', 'rt_count', 'tweet_date'])


def keyword_search(consumer_key, consumer_secret, access_token, access_token_secret, hashtag_phrase_x, file_name):
    # create authentication for accessing Twitter
    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)

    # initialize Tweepy API
    api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)

    i = 0
    # for each tweet matching our hashtags, write relevant info to the spreadsheet
    for tweet in tweepy.Cursor(api.search, q=hashtag_phrase_x,
                               lang="en", tweet_mode='extended', count=100).items():
        print(i, end='\r')
        df.loc[i, 'Tweets'] = tweet.full_text
        df.loc[i, 'User'] = tweet.user.name
        df.loc[i, 'User_statuses_count'] = tweet.user.statuses_count
        df.loc[i, 'user_followers'] = tweet.user.followers_count
        df.loc[i, 'User_location'] = tweet.user.location
        df.loc[i, 'User_verified'] = tweet.user.verified
        df.loc[i, 'fav_count'] = tweet.favorite_count
        df.loc[i, 'rt_count'] = tweet.retweet_count
        df.loc[i, 'tweet_date'] = tweet.created_at
        df.to_csv('./data_out/{}.csv'.format(file_name), encoding='utf-8', index=False)
        i += 1
        if i == 10000:
            break
        else:
            pass



consumer_key = 'g0ExLPJd2fewfXyBOzEgiNWaU'
consumer_secret = os.getenv("consumer_secret")
# consumer_secret = 'p8wFFKycCzS0Y2VDViuK3rgWNvkn3eDd9q7Pe7vDJk25f4XNoy'
access_token = '2582923230-RH6HaajpIpfDtsWemvNiLOrIH7ZLVjujmnrn2cL'
access_token_secret = os.getenv("access_token_secret")
# access_token_secret = 'Y1rqYYc09kLhfGzb2RyM9kMTjNClViSZVznpXPkKxixav'
hashtag_phrase_x = ['#HITraffic']
file_name = 'HRP'

if __name__ == '__main__':
    keyword_search(consumer_key, consumer_secret, access_token, access_token_secret, hashtag_phrase_x, file_name)