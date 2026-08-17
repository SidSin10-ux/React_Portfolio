// src/pages/NotFound.jsx
// Catch-all route (path="*") for any URL that doesn't match a real page.

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page container not-found">
      <h1>404</h1>
      <p>Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/" className="btn btn-primary">
        ← Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
