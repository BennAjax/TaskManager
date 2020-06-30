import taskRoutes from './api/task/task-routes';
import userRoutes from './api/user/user-routes';
import authRoutes from './api/authentication/auth-routes';

export default function routes(app) {
  app.use('/api', taskRoutes);
  app.use('/api', userRoutes);
  app.use('/api', authRoutes);
}
