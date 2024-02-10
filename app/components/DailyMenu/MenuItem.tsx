const MenuItem = ({ name, description, price }: any) => {
  return (
    <div className="w-full flex items-start justify-between py-4 text-white">
      <span>
        <p className="text-base font-medium">{name}</p>
        {Boolean(description) && <p className="text-sm font-light">{description}</p>}
      </span>
      <p className="italic text-nowrap">{price},- Kč</p>
    </div>
  );
};

export default MenuItem;
