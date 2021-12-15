import styles from '../../styles/Jobs.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://tasks-scheduler-apps.herokuapp.com/home/notes');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const Ninjas = ({ ninjas }) => {
  console.log(ninjas)

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h3>{ ninja.name }</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
 
export default Ninjas;