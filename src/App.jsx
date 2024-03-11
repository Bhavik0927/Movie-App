import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import Layout from "./Layout";
import Trending from "./Components/Trending";
import { ContextProvider } from "./Context/ContextProvider";
import { TrailerProvider } from "./Context/TrailerProvider";
ContextProvider;
// import 'bootstrap/dist/css/bootstrap.min.css';
import Result from "./Components/Result";

/* Simple One 
 const appRouter = createBrowserRouter(
   createRoutesFromElements(
     <Route path="/" element={<Body/>}>
       <Route path="about" element={<About />}/>
       <Route path="/movie/:id" element={<MovieDetails /> } />
     </Route>
   )
 )*/


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Trending />
      },
      
      {
        path: '/movie/:id/:title',
        element: <MovieDetails />
      },
      {
        path:'/result',
        element: <Result />
      }
      
    ]
  }
])

const App = () => {
  return (
    <>
      <TrailerProvider>
        <ContextProvider>
          <RouterProvider router={appRouter} />
        </ContextProvider>
      </TrailerProvider>
    </>
  )
}

export default App;