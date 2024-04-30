import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import News from './pages/News'
import Standings from './pages/Standings'
import Teams from './pages/Teams'

const league="Bundesliga"
export const router=[
    {
        id:"Home",
        path:"/",
        exact:true, 
        isNavCategory:true,
         element:<Home/>
    },
    {
        id:"Teams",
        path:"/teams",
        exact:true, 
        isNavCategory:true,
         element:<Teams/>
    },
    { 
        id:"Standings",
        path:"/standings",
        exact:true, 
        isNavCategory:true,
        element:<Standings />
    },
    { 
        id:"Standings",
        path:"/standings/:league",
        exact:true, 
        isNavCategory:false,
        element:<Standings />
    },
    {
        id:"News",
        path:"/News",
        exact:true, 
        isNavCategory:true,
         element:<News/>
    }, 
    {
        id:"About",
        path:"/About",
        exact:true, 
        isNavCategory:true,
        element:<About/>
    },
    {
        id:"Contact",
        path:"/Contact",
        exact:true, 
        isNavCategory:true,
        element:<Contact/>
    },
    

]