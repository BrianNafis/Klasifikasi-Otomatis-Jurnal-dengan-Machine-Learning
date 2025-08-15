export interface User {
  user_id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
  created_at: string;
}

export interface Mentor {
  mentor_id: number;
  name: string;
  expertise: string;
  contact: string;
  created_at: string;
}

export interface Journal {
  journal_id: number;
  user_id: number;
  mentor_id?: number;
  title: string;
  category: string;
  pdf_link: string;
  uploaded_at: string;
  mentor?: Mentor;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

export interface PredictionResult {
  category: string;
  confidence: number;
  suggested_mentor?: Mentor;
}