
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
