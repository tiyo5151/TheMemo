import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Scraps from './components/Scraps';
import { useEffect, useState } from 'react';
import { Scrap } from './types/app';
import { v4 as uuid } from 'uuid';

function App() {
  const [scrap, setScrap] = useState<Scrap[] | null>(null);

  const onAddScrap = () => {
    const scrapElement: Scrap = {
      id: uuid(),
      title: 'My first scrap',
      content: 'This is my first scrap',
      modDate: Date.now(),
    };
    setScrap([...(scrap || []), scrapElement]); //ここでエラー
    console.log(scrap);
  };

  const onDeleteScrap = (id: string) => {
    console.log('deleteScrap', id);
    setScrap(scrap ? scrap.filter((item) => item.id !== id) : null);
  };

  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Sidebar
          scrap={scrap}
          setScrap={setScrap}
          onAddScrap={onAddScrap}
          onDeleteScrap={onDeleteScrap}
        />
        <Scraps />
      </div>
    </div>
  );
}
export default App;
