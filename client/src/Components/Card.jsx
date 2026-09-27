const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        overflow-hidden
rounded-xl transition



        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;