import { memo } from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

export const Button = memo(
  ({
    children,
    className,
    color = 'default',
    isDisabled = false,
    onClick,
    type = 'button',
  }: ButtonProps): JSX.Element => (
    <button
      className={[
        styles.button,
        color === 'peach' && styles.peachColor,
        color === 'default' && styles.defaultColor,
        isDisabled && styles.disabled,
        className,
      ].join(' ')}
      disabled={isDisabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
);
