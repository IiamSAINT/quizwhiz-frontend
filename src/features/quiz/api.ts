import axiosInstance from '@/common/api/axiosInstance';
import { CreateQuizFormData } from './types';

export async function createQuiz(quizData: CreateQuizFormData) {
  const { data } = await axiosInstance.post('quiz', quizData);
  return data;
}
