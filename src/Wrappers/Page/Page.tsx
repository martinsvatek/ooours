import styles from './Page.module.scss';
import { PageProps } from './Page.types';

export const Page = ({ className, children }: PageProps): JSX.Element => (
  <div className={[styles.page, className].join(' ')}>{children}</div>
);
