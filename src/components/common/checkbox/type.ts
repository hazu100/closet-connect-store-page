export type CheckboxProps = {
  label: string;
  onChange: (id: string, isChecked: boolean) => void;
  id: string;
  isChecked: boolean;
};
