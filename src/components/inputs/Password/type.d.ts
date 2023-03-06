export interface PasswordInputProps {
  label: string;
  disabled?: boolean;
  onChange: function;
  value: string;
  readOnly?: boolean;
  error?: string | undefined;
  required?: boolean;
  name: string;
}
