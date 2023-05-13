export interface TextInputProps {
  label: string;
  disabled?: boolean;
  onChange: function;
  value: string;
  readOnly?: boolean;
  required?: boolean;
  name: string;
  error?: string | undefined;
  iconItem?: any;
  iconPosition?: 'left' | 'right';
}
