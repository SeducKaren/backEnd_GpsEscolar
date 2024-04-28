import express from 'express';
import escolaRoutes from './escolaRoutes';
import usuarioRoutes from './usuarioRoutes';
import rotasRoutes from './rotasRoutes';
import loginRoutes from './loginRoutes';
import paradaRoutes from './paradaRoutes';
import paradaRota06Routes from './paradaRota06Routes';
import paradaRota08Routes from './paradaRota08Routes';
import paradaRota12Routes from './paradaRota12Routes';
import paradaRota17Routes from './paradaRota17Routes';
import paradaRota27Routes from './paradaRota27Routes';

const indexRouter = express.Router();

indexRouter.use('/escola', escolaRoutes);
indexRouter.use('/usuario', usuarioRoutes);
indexRouter.use('/rotas', rotasRoutes);
indexRouter.use('/login', loginRoutes);
indexRouter.use('/parada', paradaRoutes);
indexRouter.use('/rota06', paradaRota06Routes);
indexRouter.use('/rota08', paradaRota08Routes);
indexRouter.use('/rota12', paradaRota12Routes);
indexRouter.use('/rota17', paradaRota17Routes);
indexRouter.use('/rota27', paradaRota27Routes);

export default indexRouter;