# Hacker News

## About

Hacker News is React Native application for showing latest hacker news using  [Hacker News API](https://github.com/HackerNews/API).

## Application flow

When user opens application, he gets list of best hacker news. 
Only 20 items per page are always shown.
By clicking on 'More' user gets other 20 news & so on. 
Similar is for going back using 'Prev' button.
Also, there is 'Refresh' button, that refreshes news and redirects user back to first page.
List is being updated every 30 seconds.

## Installation

Clone Github repo (or download zip):
```
$ git clone https://github.com/NemanjaManot/HackerNews.git
```

Install packages:
```
$ cd HackerNews
$ npm install
```

## Running

#### Run iOS

To run application for iOS:
```
$ npx react-native run-ios
```

#### Run Android

To run application for Android:
```
$ npx react-native start
$ npx react-native run-android
```

Make sure you have **Android Emulator** up & running.

## Tech Stack

- React Native - works for both iOS & Android
- React - using React & React state to store all data
- Axios - using Axios as HTTP client
- Date-fns - formatting time
- PropTypes - for type checking
- Prettier - for code formatting
