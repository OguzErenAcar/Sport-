import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Standings from './pages/Standings';
import Teams from './pages/Teams';
import Contact from  "./pages/Contact" ;
 export const router: Array<{
    id: string;
    path: string;
    exact: boolean;
    isNavCategory: boolean;
    element: React.ReactElement;
}> = [
    {
        id: "Home",
        path: "/",
        exact: true,
        isNavCategory: true,
        element: <Home />
    },
    {
        id: "Teams",
        path: "/teams",
        exact: true,
        isNavCategory: false,
        element: <Teams />
    },
    {
        id: "Standings",
        path: "/standings",
        exact: true,
        isNavCategory: true,
        element: <Standings />
    },
    {
        id: "Standings",
        path: "/standings/:league",
        exact: true,
        isNavCategory: false,
        element: <Standings />
    },
    {
        id: "News",
        path: "/News",
        exact: true,
        isNavCategory: true,
        element: <News />
    },
    {
        id: "About",
        path: "/About",
        exact: true,
        isNavCategory: true,
        element: <About />
    },
    {
        id: "Contact",
        path: "/Contact",
        exact: true,
        isNavCategory: true,
        element: <Contact />
    }
];

