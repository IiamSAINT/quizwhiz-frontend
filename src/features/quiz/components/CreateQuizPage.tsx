import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/common/components/ui/card';
import { Button } from '@/common/components/ui/button';
import { Input } from '@/common/components/ui/input';
import { Label } from '@/common/components/ui/label';
import { Textarea } from '@/common/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/common/components/ui/select';
import { Switch } from '@/common/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Plus, Save, Loader2 } from 'lucide-react';

interface CreateQuizForm {
  title: string;
  description: string;
  category: string;
  isPublic: boolean;
  timeLimit: string;
  difficulty: string;
}

const CreateQuiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<CreateQuizForm>({
    title: '',
    description: '',
    category: '',
    isPublic: true,
    timeLimit: '10',
    difficulty: 'medium',
  });

  const categories = [
    'General Knowledge',
    'Science',
    'History',
    'Sports',
    'Technology',
    'Arts & Literature',
    'Geography',
    'Entertainment',
  ];

  const difficulties = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
  ];

  const timeLimits = [
    { value: '5', label: '5 minutes' },
    { value: '10', label: '10 minutes' },
    { value: '15', label: '15 minutes' },
    { value: '20', label: '20 minutes' },
    { value: '30', label: '30 minutes' },
    { value: 'unlimited', label: 'No time limit' },
  ];

  const handleInputChange = (field: keyof CreateQuizForm, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast({
        title: 'Error',
        description: 'Quiz title is required',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.category) {
      toast({
        title: 'Error',
        description: 'Please select a category',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    // Mock API call with loading simulation
    try {
      console.log('Creating quiz with data:', formData);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock successful creation
      const mockQuizId = 'quiz_' + Math.random().toString(36).substr(2, 9);

      toast({
        title: 'Success!',
        description: 'Quiz created successfully',
      });

      console.log('Quiz created with ID:', mockQuizId);

      // Navigate to add questions page
      navigate(`/dashboard/quiz/${mockQuizId}/add-question`);
    } catch (error) {
      console.error('Error creating quiz:', error);
      toast({
        title: 'Error',
        description: 'Failed to create quiz. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='p-6 max-w-4xl mx-auto'>
      <div className='mb-6'>
        <h1 className='text-3xl font-bold text-foreground'>Create New Quiz</h1>
        <p className='text-muted-foreground mt-2'>
          Set up your quiz details and then add questions
        </p>
      </div>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Main Form */}
          <div className='lg:col-span-2 space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center gap-2'>
                  <Plus className='w-5 h-5' />
                  Quiz Details
                </CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='title'>Quiz Title *</Label>
                  <Input
                    id='title'
                    placeholder='Enter an engaging quiz title...'
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    disabled={isLoading}
                    className='text-base'
                  />
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='description'>Description</Label>
                  <Textarea
                    id='description'
                    placeholder='Provide a brief description of your quiz...'
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    disabled={isLoading}
                    rows={3}
                    className='resize-none'
                  />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='category'>Category *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => handleInputChange('category', value)}
                      disabled={isLoading}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder='Select a category' />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='difficulty'>Difficulty</Label>
                    <Select
                      value={formData.difficulty}
                      onValueChange={(value) => handleInputChange('difficulty', value)}
                      disabled={isLoading}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {difficulties.map((difficulty) => (
                          <SelectItem key={difficulty.value} value={difficulty.value}>
                            {difficulty.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Settings Sidebar */}
          <div className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Quiz Settings</CardTitle>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='timeLimit'>Time Limit</Label>
                  <Select
                    value={formData.timeLimit}
                    onValueChange={(value) => handleInputChange('timeLimit', value)}
                    disabled={isLoading}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {timeLimits.map((limit) => (
                        <SelectItem key={limit.value} value={limit.value}>
                          {limit.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className='flex items-center justify-between space-x-2'>
                  <div className='space-y-0.5'>
                    <Label htmlFor='visibility'>Public Quiz</Label>
                    <p className='text-xs text-muted-foreground'>
                      Make this quiz discoverable by others
                    </p>
                  </div>
                  <Switch
                    id='visibility'
                    checked={formData.isPublic}
                    onCheckedChange={(checked) => handleInputChange('isPublic', checked)}
                    disabled={isLoading}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className='space-y-3'>
              <Button type='submit' className='w-full' disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className='w-4 h-4 mr-2 animate-spin' />
                    Creating Quiz...
                  </>
                ) : (
                  <>
                    <Save className='w-4 h-4 mr-2' />
                    Create Quiz
                  </>
                )}
              </Button>

              <Button
                type='button'
                variant='outline'
                className='w-full'
                onClick={() => navigate('/dashboard/quizzes')}
                disabled={isLoading}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateQuiz;
