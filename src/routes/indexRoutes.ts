import express from 'express';
import escolaRoutes from './escolaRoutes';
import usuarioRoutes from './usuarioRoutes';
import rotasRoutes from './rotasRoutes';
import loginRoutes from './loginRoutes';
import paradaRoutes from './paradaRoutes';
import paradaRota06 from './paradaRota06Routes';
import paradaRota04Ida from './paradaRota04IdaRoutes';
import paradaRota04Volta from './paradaRota04VoltaRoutes';
import paradaRota05Ida from './paradaRota05IdaRoutes';
import paradaRota05Volta from './paradaRota05VoltaRoutes';
import paradaRota06Volta from './paradaRota06VoltaRoutes';


const indexRouter = express.Router();

indexRouter.use('/escola', escolaRoutes);
indexRouter.use('/usuario', usuarioRoutes);
indexRouter.use('/rotas', rotasRoutes);
indexRouter.use('/login', loginRoutes);
indexRouter.use('/parada', paradaRoutes);
indexRouter.use('/rota06', paradaRota06);
indexRouter.use('/rota04ida', paradaRota04Ida);
indexRouter.use('/rota04volta', paradaRota04Volta);
indexRouter.use('/rota05ida', paradaRota05Ida);
indexRouter.use('/rota05volta', paradaRota05Volta);
indexRouter.use('/rota06volta', paradaRota06Volta);

export default indexRouter;