import Loadable from "react-loadable";
import TopBarProgress from '../components/TopBarProgress'

export const HomePage = Loadable({
  loader: () => import("./Home/HomePage"),
  loading: TopBarProgress,
});
