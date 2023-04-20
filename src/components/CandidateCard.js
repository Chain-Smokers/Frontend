import { Candidate } from "./Candidate";

export const CandidateCard = ({
  id,
  selected,
  setSelected,
  candidateColor,
  candidateName,
}) => (
  <div
    className={`cursor-pointer drop-shadow-xl py-14 px-32 flex flex-col gap-y-8 rounded-lg shadow-xl ${
      selected === id ? "bg-green-400" : "bg-slate-50"
    }`}
    onClick={() => setSelected(id)}
  >
    <div className="">
      <Candidate
        background={selected === id ? "#4ade80" : "#f8fafc"}
        foreground={candidateColor}
      />
    </div>
    <span className="text-center text-2xl font-mono">{candidateName}</span>
  </div>
);
