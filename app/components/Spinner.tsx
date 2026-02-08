const Spinner = () => {
  return (
    <div
      className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent text-violet-500"
      role="status"
      aria-label="Loading"
    />
  );
};

export default Spinner;
