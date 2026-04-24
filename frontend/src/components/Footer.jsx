const Footer = () => {
  return (
    <footer className="border-t mt-16 py-6 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} InkFlow</p>
      <p className="mt-1">Built for writers who think clearly.</p>
    </footer>
  );
};

export default Footer;