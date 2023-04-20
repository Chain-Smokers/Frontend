export const InputBox = ({ title, setData }) => {
  const onlyNumberKey = (evt) => {
    var ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
    return true;
  };
  return (
    <label className="block mb-4 flex-1">
      <input
        className="mt-1 block w-full h-14 px-4 bg-white border border-slate-300 rounded-full text-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        type="text"
        onKeyPress={(e) => {
          return onlyNumberKey(e);
        }}
        placeholder={title}
        onChange={(e) => setData(e.target.value)}
      />
    </label>
  );
};
