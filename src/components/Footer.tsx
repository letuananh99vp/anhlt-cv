const Footer = () => {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm mt-8">
      <div className="mb-2 text-2xl">Thanks for reading</div>
      <div className="flex justify-center space-x-6 mb-2">
        <a
          href="https://facebook.com/lakillah.ptit"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-blue-400 text-2xl transition-colors"
          aria-label="Facebook"
        >
          {/* Facebook SVG */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
          </svg>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-blue-400 text-2xl transition-colors"
          aria-label="LinkedIn"
        >
          {/* LinkedIn SVG */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.18-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
          </svg>
        </a>
      </div>
      <div>© {new Date().getFullYear()} Le Tuan Anh. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
