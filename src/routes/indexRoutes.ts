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
import paradaRota08Ida from './paradaRota08IdaRoutes';
import paradaRota12 from './paradaRota12Routes';
import paradaRota17 from './paradaRota17Routes';
import paradaRota27 from './paradaRota27Routes';
import allParadas from './allParadasRoutes'


const indexRouter = express.Router();

indexRouter.use('/escola', escolaRoutes);
indexRouter.use('/usuario', usuarioRoutes);
indexRouter.use('/rotas', rotasRoutes);
indexRouter.use('/login', loginRoutes);
indexRouter.use('/parada', paradaRoutes);
indexRouter.use('/rota06ida', paradaRota06);
indexRouter.use('/rota04ida', paradaRota04Ida);
indexRouter.use('/rota04volta', paradaRota04Volta);
indexRouter.use('/rota05ida', paradaRota05Ida);
indexRouter.use('/rota05volta', paradaRota05Volta);
indexRouter.use('/rota06volta', paradaRota06Volta);
indexRouter.use('/rota08ida', paradaRota08Ida);
indexRouter.use('/rota12', paradaRota12);
indexRouter.use('/rota17', paradaRota17);
indexRouter.use('/rota27', paradaRota27);
indexRouter.use('/allParadas', allParadas);

export default indexRouter;