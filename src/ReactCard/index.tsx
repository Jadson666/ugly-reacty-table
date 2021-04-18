import React, { useState } from 'react';
import { ReactTable } from './ReactTable';
import SecHeader from './SecondHeader';
import './index.css';

const menuItems = [
  'ALL',
  <i className="fab fa-twitter"></i>,
  <i className="fab fa-facebook-f"></i>,
  <i className="fab fa-instagram"></i>,
  <i className="fab fa-youtube"></i>,
];

const Footer = () => {
  return <div className="Footer">FOOTER</div>;
};

const Header = () => {
  return (
    <main className="Header">
      <div className="center">CARD</div>
      <div className="center">?</div>
    </main>
  );
};

export const Content = ({ data }: { data: any[] }) => {
  return (
    <>
      <div className="TopTerms">TOP TERMS</div>
      <main className="Content">
        <ReactTable data={data} />
      </main>
    </>
  );
};

export const ReactCard = ({ data }: { data: any[] }) => {
  const [currentData, setCurrentData] = useState(data);
  const onClicksArray = [...new Array(5)].map(() => () => setCurrentData([]));
  onClicksArray[0] = () => setCurrentData(data);

  return (
    <main className="ReactCard">
      <Header />
      <SecHeader items={menuItems} onClicksArray={onClicksArray} />
      <Content data={currentData} />
      <Footer />
    </main>
  );
};

export default ReactCard;
