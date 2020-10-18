import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
// Components
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import PaginationMenu from '../../components/PaginationMenu';
// Styles
import { styles } from './mainStyles';

const limit = 20;

const Main = () => {
  const [ids, setIds] = useState([]);
  const [news, setNews] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function getNews() {
    try {
      const response = await axios.get('https://hacker-news.firebaseio.com/v0/beststories.json');
      setIds(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getNewsById(id) {
    try {
      const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  const handleGetDetailed = () => {
    if (ids.length) {
      setIsLoading(true);
      const arr = [];
      ids.slice(offset, limit + offset).forEach((id) => {
        arr.push(getNewsById(id));
      });

      Promise.all(arr).then((values) => {
        setIsLoading(false);
        setNews(values);
      });
    }
  };

  useEffect(() => {
    handleGetDetailed();
  }, [ids, offset]);

  const handleMore = () => {
    setOffset(offset + limit);
  };

  const handlePrev = () => {
    setOffset(offset - limit);
  };

  return (
    <View style={styles.mainWrapper}>
      <Header onRefresh={() => console.log('on refresh')} />
      <ScrollView style={styles.scrollingContentWrapper}>
        {isLoading ? (
          <ActivityIndicator size="large" style={styles.activityIndicator} />
        ) : (
          news.map((item, index) => <ListItem key={item.id} index={offset + index + 1} {...item} />)
        )}
      </ScrollView>
      <PaginationMenu isPrevDisabled={offset < limit} onMorePress={handleMore} onPrevPress={handlePrev} />
    </View>
  );
};

export default Main;
