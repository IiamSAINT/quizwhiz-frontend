import { Card, CardContent, CardHeader, CardTitle } from '@/common/components/ui/card';
import { Badge } from '@/common/components/ui/badge';
import { FileQuestion, Users, Calendar, TrendingUp, Play, Eye, Clock } from 'lucide-react';
import { useAuth } from '@/features/auth/useAuth';

// Mock data
const statsData = [
  {
    title: 'Total Quizzes',
    value: '24',
    change: '+12%',
    icon: FileQuestion,
    color: 'text-primary',
  },
  {
    title: 'Active Sessions',
    value: '3',
    change: '+2',
    icon: Play,
    color: 'text-secondary',
  },
  {
    title: 'Total Participants',
    value: '1,247',
    change: '+23%',
    icon: Users,
    color: 'text-accent-foreground',
  },
  {
    title: 'Response Rate',
    value: '94.2%',
    change: '+5.1%',
    icon: TrendingUp,
    color: 'text-primary',
  },
];

const recentActivity = [
  {
    id: 1,
    action: "Quiz 'JavaScript Fundamentals' completed",
    participants: 45,
    time: '2 hours ago',
    type: 'completed',
  },
  {
    id: 2,
    action: "New quiz 'React Hooks' created",
    participants: 0,
    time: '4 hours ago',
    type: 'created',
  },
  {
    id: 3,
    action: "Live session started for 'CSS Grid'",
    participants: 23,
    time: '6 hours ago',
    type: 'live',
  },
  {
    id: 4,
    action: "Quiz 'Node.js Basics' published",
    participants: 12,
    time: '1 day ago',
    type: 'published',
  },
];

const upcomingSessions = [
  {
    id: 1,
    title: 'Advanced TypeScript',
    scheduledFor: 'Today, 3:00 PM',
    participants: 34,
    status: 'scheduled',
  },
  {
    id: 2,
    title: 'Database Design',
    scheduledFor: 'Tomorrow, 10:00 AM',
    participants: 28,
    status: 'scheduled',
  },
  {
    id: 3,
    title: 'API Development',
    scheduledFor: 'Friday, 2:00 PM',
    participants: 41,
    status: 'scheduled',
  },
];

const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <div className='p-6 space-y-6'>
      {/* Page Header */}
      <div>
        <h1 className='text-3xl font-bold text-foreground'>{user?.name || 'Dashboard'} </h1>
        <p className='text-muted-foreground'>
          Welcome back! Here's an overview of your quiz activities.
        </p>
      </div>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {statsData.map((stat, index) => (
          <Card key={index} className='hover:shadow-md transition-shadow'>
            <CardContent className='p-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-muted-foreground'>{stat.title}</p>
                  <p className='text-2xl font-bold text-foreground'>{stat.value}</p>
                  <p className='text-sm text-primary'>{stat.change} from last month</p>
                </div>
                <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                  <stat.icon className='w-6 h-6' />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Clock className='w-5 h-5' />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className='flex items-center justify-between p-3 rounded-lg bg-muted/50'
                >
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-foreground'>{activity.action}</p>
                    <div className='flex items-center gap-4 mt-1'>
                      <p className='text-xs text-muted-foreground'>{activity.time}</p>
                      {activity.participants > 0 && (
                        <Badge variant='secondary' className='text-xs'>
                          <Users className='w-3 h-3 mr-1' />
                          {activity.participants} participants
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Badge
                    variant={activity.type === 'live' ? 'default' : 'outline'}
                    className='ml-2'
                  >
                    {activity.type}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Sessions */}
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Calendar className='w-5 h-5' />
              Upcoming Sessions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {upcomingSessions.map((session) => (
                <div
                  key={session.id}
                  className='flex items-center justify-between p-3 rounded-lg bg-muted/50'
                >
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-foreground'>{session.title}</p>
                    <div className='flex items-center gap-4 mt-1'>
                      <p className='text-xs text-muted-foreground'>{session.scheduledFor}</p>
                      <Badge variant='outline' className='text-xs'>
                        <Users className='w-3 h-3 mr-1' />
                        {session.participants} registered
                      </Badge>
                    </div>
                  </div>
                  <Badge variant='secondary'>Scheduled</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div
              className='p-4 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-colors'
              onClick={() => console.log('Create new quiz clicked')}
            >
              <FileQuestion className='w-8 h-8 text-primary mb-2' />
              <h3 className='font-medium text-foreground'>Create New Quiz</h3>
              <p className='text-sm text-muted-foreground'>Start building your next quiz</p>
            </div>

            <div
              className='p-4 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-colors'
              onClick={() => console.log('Start live session clicked')}
            >
              <Play className='w-8 h-8 text-secondary mb-2' />
              <h3 className='font-medium text-foreground'>Start Live Session</h3>
              <p className='text-sm text-muted-foreground'>Begin an interactive quiz session</p>
            </div>

            <div
              className='p-4 rounded-lg border border-border hover:bg-muted/50 cursor-pointer transition-colors'
              onClick={() => console.log('View analytics clicked')}
            >
              <Eye className='w-8 h-8 text-accent-foreground mb-2' />
              <h3 className='font-medium text-foreground'>View Analytics</h3>
              <p className='text-sm text-muted-foreground'>Check your quiz performance</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHome;
