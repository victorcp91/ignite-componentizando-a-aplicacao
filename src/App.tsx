import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre>();


  function selectGenre(genre: Genre) {
    setSelectedGenre(genre);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenre={selectedGenre} selectGenre={selectGenre}/>
      <Content selectedGenre={selectedGenre}/>
    </div>
  );
}