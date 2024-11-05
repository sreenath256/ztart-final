import "./App.css";
import { ScrollToTop } from "react-router-scroll-to-top";
import { lazy, Suspense, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
  Routes,
  Route,
} from "react-router-dom";
import { Header, Footer, Loader, NotFoundPage, LandHeader } from "./components";
import UserLayout from "./layouts/UserLayout";
import Homepage from "./pages/index";
import AboutUs from "./pages/Aboutus/index";
import Faq from "./pages/Faq/index";
import VisaInner from "./pages/visas/inner";
import PrivacyPolicy from "./pages/Privacy-police/index";
import Blog from "./pages/Blogs/index";
import LandingPage from "./pages/Landing";
import BlogInner from "./pages/Blogs/inner";
import Contact from "./pages/Contact/index";
import AdminLayout from "./layouts/AdminLayout";
import  Dashboard  from "./admin/pages/DashBoard";
import AddVisas from "./admin/pages/AddVisas";
import CreateBlog from "./admin/components/CreateBlog";
import LoginPage from "./admin/pages/Login";
import ManageBlogs from "./admin/pages/ManageBlog";
import ManageVisas from "./admin/pages/ManageVisas";
import EditBlogPage from "./admin/pages/EditBlog";
import EditVisaPage from "./admin/pages/EditVisa";
import VisaGrid from "./pages/visas/VisaGrid";



// const Home = lazy(() => import("./pages/index"));
// const AboutUs = lazy(() => import("./pages/Aboutus/index"));
// const VisaInner = lazy(() => import("./pages/visas/inner"));
// const Faq = lazy(() => import("./pages/Faq/index"));
// const Contact = lazy(() => import("./pages/Contact/index"));
// const Privacy = lazy(() => import("./pages/Privacy-police/index"));
// const Blog = lazy(() => import("./pages/Blogs/index"));
// const BlogInner = lazy(() => import("./pages/Blogs/inner"));
// const LandingPage = lazy(() => import("./pages/Landing"));


function App() {
  const [admin, setAdmin] = useState(false);
  // const [admin, setAdmin] = useState(false);


  useEffect(() => {
    // Check if user data exists in local storage
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      if (user) {
        setAdmin(true); // Set admin state based on user role
      }
    }
  }, []);

  return (
    <>
      <div>
      <ToastContainer />
        <Routes>
          {admin ? (
            <Route element={<AdminLayout />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add-visas" element={<AddVisas />} />
              <Route path="/add-blog" element={<CreateBlog />} />
              <Route path="/manage-blogs" element={<ManageBlogs />} />
              <Route path="/manage-visas" element={<ManageVisas />} />
              <Route path="/manage-visas/:id" element={<ManageVisas />} />
              <Route path="/manage-blogs/:id" element={<ManageVisas />} />
              <Route path="/manage-blogs/:id/edit" element={<EditBlogPage />} />
              <Route path="/manage-visas/:id/edit" element={<EditVisaPage />} />
            </Route>
          ) : (
            <Route element={<UserLayout />}>
              <Route path="/login" element={<LoginPage  setAdmin={setAdmin}/>} />
              <Route path="/" element={<Homepage />} />
              <Route path="/visa" element={<VisaGrid />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/visa/:id" element={<VisaInner />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/blogs" element={<Blog />} />
              <Route
                path="/visa-consultant-in-dubai"
                element={<LandingPage />}
              />
              <Route path="/blogs/:id" element={<BlogInner />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          )}
        </Routes>
      </div>
    </>
  );
}

export default App;
