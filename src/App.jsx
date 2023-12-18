import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import TeamMember from "./pages/TeamMember";

// layout
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/roofix-construction" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="about" element={<About />} />
      <Route path=":name" element={<TeamMember />} />

      <Route path="projects">
        <Route index element={<Projects />} />
        <Route path=":name" element={<Project />} />
      </Route>
      <Route path="blog">
        <Route index element={<Blog />} />
        <Route path=":id" element={<BlogPost />} />
      </Route>
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
