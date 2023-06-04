import { ReactNode } from 'react';

import { Dictionary } from '@helpers/dictionary';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children?: string;
  title?: string;
  dictionary: Dictionary;
}

interface AuthModalButtonProps {
  dictionary: Dictionary;
  children: ReactNode;
  img: JSX.Element;
}
