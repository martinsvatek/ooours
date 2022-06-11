import styles from './Box.module.scss';
import { BoxProps } from './Box.types';

export const Box = ({ children, className, width = 'default' }: BoxProps): JSX.Element => (
  <div className={[width === 'default' ? styles.box : styles.bigBox, className].join(' ')}>
    {children}
  </div>
);
