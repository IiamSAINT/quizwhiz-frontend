import axiosInstance from '@/common/api/axiosInstance';

export async function createQuiz(quizData: object, token: string) {
  try {
    const data = await axiosInstance.post('quiz', quizData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
