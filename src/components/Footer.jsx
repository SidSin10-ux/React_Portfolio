// src/components/Footer.jsx
//
// Simple reusable component, rendered once in App.jsx so it stays visible
// across every route (part of the "shared layout" requirement).

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>
        &copy; {year} Siddharth Singh &middot; B.Tech CSE, NIT Warangal &middot; All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
