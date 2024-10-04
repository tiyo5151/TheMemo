import './App.css';
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
      <Sidebar scrap={scrap} />
      <Scraps />
    </div>
  );
}
export default App;
