import Layout from "./layout";
import HomePage from "./pages/homepage";
import Blog from "./pages/blog";
import Post from "./pages/post";
import Author from "./pages/author";
import Contact from "./pages/contact";
import { Routes, Route, } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="Blog" exact element={<Blog />} />
        <Route path="Post" exact element={<Post />} />
        <Route path="Author" exact element={<Author />} />
        <Route path="Contact" exact element={<Contact />} />
      </Routes>

    </Layout>
  );
}

export default App;
