import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <div>
          <p>My</p>
          <p>private</p>
          <p>phonebook</p>
        </div>
        <span className={styles.flower}>&#10048;</span>
      </h1>
    </div>
  );
}
