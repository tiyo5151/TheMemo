import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Scraps from './components/Scraps';
import { useEffect, useState } from 'react';
import { Scrap } from './types/app';

function App() {
  const [scrap, setScrap] = useState<Scrap[] | null>(null);

  const scrapElement: Scrap = {
    id: 1,
    title: 'My first scrap',
    content: 'This is my first scrap',
    modDate: Date.now(),
  };

  useEffect(() => {
    setScrap([...(scrap || []), scrapElement]); //ここでエラー
  }, []);
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Sidebar scrap={scrap} />
        <Scraps />
      </div>
    </div>
  );
}
export default App;
