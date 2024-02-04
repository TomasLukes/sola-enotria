const MenuItem = ({
  heading,
  subheading,
  price,
}: {
  heading: string;
  subheading?: string;
  price: number;
}) => {
  return (
    <div className="w-full flex items-start justify-between py-4 text-white">
      <span>
        <p className="text-base font-medium">{heading}</p>
        {Boolean(subheading) && <p className="text-sm font-light">{subheading}</p>}
      </span>
      <p className="italic">{price},- Kč</p>
    </div>
  );
};

export default MenuItem;
