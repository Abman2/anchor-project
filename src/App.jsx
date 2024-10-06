
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { RootLayout } from "./layout/RootLayout.jsx"
import { Home } from "./pages/Home"
import { ErrorPage } from "./pages/ErrorPage"
import { About } from "./pages/About.jsx"
import { FAQs } from "./pages/FAQs.jsx"


function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<RootLayout/>} errorElement={<ErrorPage/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="faqs" element={<FAQs/>}/>


      </Route>
  )
)

  return (
   <>
   <RouterProvider router={router} />
   </>
  )
}

export default App



