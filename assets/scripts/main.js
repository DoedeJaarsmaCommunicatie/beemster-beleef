import './bootstrap';
import Ready from './tools/Ready';
import Router from './tools/Router';

const common = async () =>
    (await import(/* webpackChunkName: "dist/scripts/routes/common" */'./routes/Common')).default;
const home = async () =>
    (await import(/* webpackChunkName: "dist/scripts/routes/home" */ './routes/Home')).default;
const PostTypeArchiveArrangement = async () =>
    (await import(/* webpackChunkName: "dist/scripts/routes/arrangement-archive" */ './routes/PostTypeArchiveArrangement')).default;

const routes = new Router({
    common: common(),
    home: home(),
    postTypeArchiveArrangement: PostTypeArchiveArrangement()
});

Ready(() => routes.loadEvents());
