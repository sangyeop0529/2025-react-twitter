import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h2>Home Page</h2>} />
      <Route path="/posts" element={<h2>Post List Page</h2>} />
      <Route path="/posts/:id" element={<h2>Post Detail Page</h2>} />
      <Route path="/posts/new" element={<h2>Post New Page</h2>} />
      <Route path="/posts/edit/:id" element={<h2>Post Edit Page</h2>} />
      <Route path="/profile" element={<h2>Profile Page</h2>} />
      <Route path="/profile/edit" element={<h2>Profile Edit Page</h2>} />
      <Route path="/notifications" element={<h2>Notifications Page</h2>} />
      <Route path="/search" element={<h2>Search Page</h2>} />
      <Route path="/users/login" element={<h2>Login Page</h2>} />
      <Route path="/users/signup" element={<h2>Signup Page</h2>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
