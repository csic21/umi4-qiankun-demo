import { Button, notification } from 'antd';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Button
        onClick={() => {
          notification.error({
            message: '123',
            description: '456',
            onClose: () => {
              history.pushState(null, '', '/');
            },
          });
        }}
      >
        go
      </Button>
    </div>
  );
}
