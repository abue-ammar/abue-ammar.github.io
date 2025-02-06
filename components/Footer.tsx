import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="fade-in mt-10">
      <p>Copyright &copy; {currentYear} Abue Ammar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
