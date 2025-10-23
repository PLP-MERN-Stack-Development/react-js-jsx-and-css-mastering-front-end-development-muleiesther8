const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} My App. All rights reserved.
          </div>
          <div className="space-x-4">
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;