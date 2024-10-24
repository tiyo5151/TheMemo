import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Scraps from './components/Scraps';
import { useEffect, useState } from 'react';
import { Scrap } from './types/app';
import { v4 as uuid } from 'uuid';
import PopUpTitle from './components/PopUpCreateTitle';

function App() {
  const [scrap, setScrap] = useState<Scrap[] | null>(null);
  const [createTitle, setCreateTitle] = useState<boolean>(false);

  const onAddScrap = () => {
    const scrapElement: Scrap = {
      id: uuid(),
      title: 'My first scrap',
      content: 'This is my first scrap aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      modDate: Date.now(),
    };
    setScrap([...(scrap || []), scrapElement]); //ここでエラー
    console.log(scrap);
    setCreateTitle(true);
  };

  const onDeleteScrap = (id: string) => {
    console.log('deleteScrap', id);
    setScrap(scrap ? scrap.filter((item) => item.id !== id) : null);
  };

  return (
    <div className="w-full h-auto flex flex-col text-base m-0 p-0">
      <Header />
      <div className="flex flex-row">
        <Sidebar
          scrap={scrap}
          setScrap={setScrap}
          onAddScrap={onAddScrap}
          onDeleteScrap={onDeleteScrap}
        />
        <Scraps />
        {createTitle && <PopUpTitle />}
      </div>
    </div>
  );
}
export default App;
