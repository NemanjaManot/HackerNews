import React from 'react';
// Components
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';

const data = {
  title: 'My YC app: Dropbox - Throw away your USB drive',
  url: 'www.getdropbox.com',
  score: 104,
  by: 'dhouston',
  time: 1175714200,
};

const Main = () => {
  return (
    <>
      <Header onRefresh={() => console.log('on refresh')} />
      <ListItem index={1} title={data.title} url={data.url} score={data.score} by={data.by} time={data.time} />
    </>
  );
};

export default Main;
