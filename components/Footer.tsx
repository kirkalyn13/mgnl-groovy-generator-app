const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-3 text-center">
      <p className="text-gray-400 text-xs">
        Magnolia Groovy Generator &mdash; © {year} Engr. Kirk Alyn Santos. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer