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

const UserLayout = lazy(() => import("./layouts/UserLayout"));
const Homepage = lazy(() => import("./pages/index"));
const AboutUs = lazy(() => import("./pages/Aboutus/index"));
const Faq = lazy(() => import("./pages/Faq/index"));
const VisaInner = lazy(() => import("./pages/visas/inner"));
const PrivacyPolicy = lazy(() => import("./pages/Privacy-police/index"));
const Blog = lazy(() => import("./pages/Blogs/index"));
const LandingPage = lazy(() => import("./pages/Landing"));
const BlogInner = lazy(() => import("./pages/Blogs/inner"));
const Contact = lazy(() => import("./pages/Contact/index"));
const VisaGrid = lazy(() => import("./pages/visas/VisaGrid"));

const AdminLayout = lazy(() => import("./layouts/AdminLayout"));
const Dashboard = lazy(() => import("./admin/pages/DashBoard"));
const AddVisas = lazy(() => import("./admin/pages/AddVisas"));
const CreateBlog = lazy(() => import("./admin/components/CreateBlog"));
const LoginPage = lazy(() => import("./admin/pages/Login"));
const ManageBlogs = lazy(() => import("./admin/pages/ManageBlog"));
const ManageVisas = lazy(() => import("./admin/pages/ManageVisas"));
const EditBlogPage = lazy(() => import("./admin/pages/EditBlog"));
const EditVisaPage = lazy(() => import("./admin/pages/EditVisa"));

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
    const userData = localStorage.getItem("user");
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
              <Route
                path="/login"
                element={<LoginPage setAdmin={setAdmin} />}
              />
              <Route
                path="/"
                element={
                  <Suspense fallback={<Loader />}>
                    <Homepage />
                  </Suspense>
                }
              />
              <Route
                path="/visa"
                element={
                  <Suspense fallback={<Loader />}>
                    <VisaGrid />
                  </Suspense>
                }
              />
              <Route
                path="/about"
                element={
                  <Suspense fallback={<Loader />}>
                    <AboutUs />
                  </Suspense>
                }
              />
              <Route
                path="/faq"
                element={
                  <Suspense fallback={<Loader />}>
                    <Faq />
                  </Suspense>
                }
              />
              <Route
                path="/visa/:id"
                element={
                  <Suspense fallback={<Loader />}>
                    <VisaInner />
                  </Suspense>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<Loader />}>
                    <Contact />
                  </Suspense>
                }
              />
              <Route
                path="/privacy-policy"
                element={
                  <Suspense fallback={<Loader />}>
                    <PrivacyPolicy />
                  </Suspense>
                }
              />
              <Route path="/blogs" element={<Blog />} />
              <Route
                path="/visa-consultant-in-dubai"
                element={
                  <Suspense fallback={<Loader />}>
                    <LandingPage />
                  </Suspense>
                }
              />
              <Route
                path="/blogs/:id"
                element={
                  <Suspense fallback={<Loader />}>
                    <BlogInner />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<Loader />}>
                    <NotFoundPage />
                  </Suspense>
                }
              />
            </Route>
          )}
        </Routes>
      </div>
    </>
  );
}

export default App;
