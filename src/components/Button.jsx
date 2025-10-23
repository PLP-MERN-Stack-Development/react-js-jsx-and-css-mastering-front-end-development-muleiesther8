const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-all duration-200';
  
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

<<<<<<< HEAD
export default Button;
=======
Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success', 'warning']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
>>>>>>> 67c6e72 (Initial commit - Week 3 React Assignment)
