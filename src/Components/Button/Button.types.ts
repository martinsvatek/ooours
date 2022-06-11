export interface ButtonProps {
  children: string;
  className?: string;
  color?: 'peach' | 'default';
  isDisabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
}
