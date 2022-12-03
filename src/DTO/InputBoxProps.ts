import { Control } from 'react-hook-form';
import { SingleEmployee } from './Employee';

export interface InputBoxProps {
  label: string;
  control: Control<SingleEmployee> | undefined;
  error?: string;
  register_name: any;
}
