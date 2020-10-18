import React from 'react';
import { View } from 'react-native';
// Components
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import PaginationMenu from '../../components/PaginationMenu';
// Styles
import { styles } from './mainStyles';

const data = {
  title: 'My YC app: Dropbox - Throw away your USB drive',
  url: 'www.getdropbox.com',
  score: 104,
  by: 'dhouston',
  time: 1175714200,
};

const Main = () => {
  return (
    <View style={styles.mainWrapper}>
      <Header onRefresh={() => console.log('on refresh')} />
      <ListItem index={1} title={data.title} url={data.url} score={data.score} by={data.by} time={data.time} />
      <PaginationMenu
        isPrevDisabled={true}
        onMorePress={() => console.log('on more press')}
        onPrevPress={() => console.log('on prev press')}
      />
    </View>
  );
};

export default Main;
