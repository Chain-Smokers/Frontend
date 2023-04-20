import React from "react";
import { CandidateCard } from "./CandidateCard";

export const Candidates = ({ selected, setSelected, candidates }) => (
  <div className="flex p-8 flex-wrap gap-4 justify-center bg-slate-50 h-screen absolute">
    {candidates.map((candidate, index) => (
      <CandidateCard
        key={index}
        id={index}
        selected={selected}
        setSelected={setSelected}
        candidateName={candidate.name}
        candidateColor={candidate.color}
      />
    ))}
  </div>
);
