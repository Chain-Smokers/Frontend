export const VoteButton = ({ text, onClick }) => (
  <button
    className="fixed rounded-full bg-blue-500 hover:bg-blue-600 p-8 text-white text-3xl aspect-square right-0 bottom-0 m-16"
    onClick={onClick}
  >
    {text}
  </button>
);
