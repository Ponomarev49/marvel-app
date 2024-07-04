import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { characters } from '../components/mockData';
import styles from './CharacterDetails.module.css';

const CharacterDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const character = characters.find((char) => char.id === Number(id));

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={character.image} alt={character.name} className={styles.image} />
        <div className={styles.details}>
          <h1 className={styles.title}>{character.name}</h1>
          <p className={styles.description}>{character.description}</p>
        </div>
      </div>
      <div className={styles.comicsSection}>
        <h2>Comics</h2>
        <ul className={styles.comicsList}>
          {character.comics.map((comic, index) => (
            <li key={index} className={styles.comicItem}>
              <Link to={`/comics/${index+1}`}>{comic}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetails;
