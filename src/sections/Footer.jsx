const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">

      <div className="flex gap-3">
        <div className="social-icon-footer">
          <a
            href="https://www.linkedin.com/in/venkat-bs-996275287/"
            target="_blank"
            className="w-2/5 h-2/5"
          >
            <img src="/assets/linkedin.png" alt="linkedin" />
          </a>
        </div>
        <div className="social-icon-footer">
          <a
            href="https://github.com/venkatbs500"
            target="_blank"
            className="w-2/5 h-2/5"
          >
            <img src="/assets/github.svg" alt="github" />
          </a>
        </div>
        <div className="social-icon-footer">
          <a
            href="https://www.instagram.com/venkat_._64?igsh=Y3JybTFiM3A2Z3Bv&utm_source=qr"
            target="_blank"
            className="w-2/5 h-2/5"
          >
            <img src="/assets/instagram.svg" alt="instagram" />
          </a>
        </div>
        
        
      </div>

      <p className="text-white-500">Copyright @Venkat B S</p>
    </footer>
  );
};

export default Footer;
