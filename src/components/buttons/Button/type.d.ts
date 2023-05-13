import React, { CSSProperties } from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'medium' | 'normal' | 'small' | 'extraSmall';
  style?: CSSProperties;
  className?: string;
  disabled?: boolean;
  onClick?: function;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isIcon?: boolean;
}
