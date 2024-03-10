const MenuItem = ({ name, description, price }: any) => {
  return (
    <div className="w-full flex items-start justify-between gap-2 md:gap-4 py-4 text-white">
      <span>
        <p className="text-base font-medium">{name}</p>
        {Boolean(description) && <p className="text-sm font-light">{description}</p>}
      </span>
      <p className="italic text-nowrap shrink-0">{price},- Kč</p>
    </div>
  );
};

export default MenuItem;
