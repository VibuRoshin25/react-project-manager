const Input = ({ label, textarea, ...props }) => {
  const iClasses =
    "w-full p-1 border-b-2 rounded-sm border-teal-300 bg-teal-200 text-teal-600 focus:outline-none focus:border-teal-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-teal-500">
        {label}
      </label>
      {textarea ? (
        <textarea className={iClasses} {...props} />
      ) : (
        <input className={iClasses} {...props} />
      )}
    </p>
  );
};

export default Input;
