import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
// Components
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import PaginationMenu from '../../components/PaginationMenu';
// Styles
import { styles } from './mainStyles';

const Main = () => {
  const [ids, setIds] = useState([]);
  const [news, setNews] = useState([]);

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

  useEffect(() => {
    if (ids.length) {
      const arr = [];

      ids.slice(0, 5).forEach((id) => {
        arr.push(getNewsById(id));
      });

      Promise.all(arr).then((values) => {
        setNews(values);
      });
    }
  }, [ids]);

  return (
    <View style={styles.mainWrapper}>
      <Header onRefresh={() => console.log('on refresh')} />
      <ScrollView style={styles.scrollingContentWrapper}>
        {news.map((item, index) => (
          <ListItem key={item.id} index={index + 1} {...item} />
        ))}
      </ScrollView>
      <PaginationMenu
        isPrevDisabled={true} // TODO
        onMorePress={() => console.log('on more press')}
        onPrevPress={() => console.log('on prev press')}
      />
    </View>
  );
};

export default Main;
