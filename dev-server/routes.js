import taskRoutes from './api/task';
import userRoutes from './api/user';
import authRoutes from './api/authentication';

export default function routes(app) {
  app.use('/api', taskRoutes);
  app.use('/api', userRoutes);
  app.use('/api', authRoutes);
}
