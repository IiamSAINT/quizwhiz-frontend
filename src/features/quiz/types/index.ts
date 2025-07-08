export interface CreateQuizFormData {
  title: string;
  description: string;
  tags: string[];
}

export interface CreateQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}