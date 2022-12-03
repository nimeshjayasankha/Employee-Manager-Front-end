export interface AddButtonProps {
  name: string;
  path: string;
}

export interface DeleteButtonProps {
  onClick: Function;
  id?: string;
}

export interface EditButtonProps {
  onClick: Function;
  id?: string;
}

export interface SaveAndUpdateButton {
  savingData: boolean;
  id?: string;
}
