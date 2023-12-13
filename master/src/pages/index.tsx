import { history } from '@umijs/max';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <button
        onClick={() => {
          history.push('/slave');
        }}
      >
        go slave
      </button>
    </div>
  );
}
