const Card = ({
  title,
  children,
  ref,
  id,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement | null>;
  id?: string;
  className?: string;
}) => {
  return (
    <div
      ref={ref}
      id={id}
      className={`mt-12 bg-white rounded p-6 md:p-12 max-w-6xl mx-auto shadow-[0_2px_5px_0_rgba(0,0,0,0.25),0_3px_10px_0_rgba(0,0,0,0.2)] ${className}`}
    >
      {title && <div className="text-[32px] font-light mb-8">{title}</div>}
      {children}
    </div>
  );
};

export default Card;
