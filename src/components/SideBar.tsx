import React, { useState, useEffect } from 'react';

import '../styles/sidebar.scss';

import { api } from '../services/api';
import { Button } from './Button';

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  selectedGenre?: Genre,
  selectGenre: Function;
}

export function SideBar({selectedGenre, selectGenre}: SideBarProps) {

  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    api.get<Genre[]>('genres').then(response => {
      setGenres(response.data);
      const initialGenre = response.data.find(genre => genre.id === 1);
      selectGenre(initialGenre);
    });
  }, []);

  function handleClickButton(id: number) {
    const currentGenre = genres.find(genre => genre.id === id);
    selectGenre(currentGenre);
  }

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenre?.id === genre.id}
            />
          ))}
        </div>
      </nav>
  );
}