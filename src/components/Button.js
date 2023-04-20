export const Button = ({ text, onClick }) => (
  <button
    className="rounded-full bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white text-lg"
    onClick={onClick}
  >
    {text}
  </button>
);
