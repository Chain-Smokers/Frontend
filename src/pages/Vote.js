import { VoteButton } from "../components/VoteButton";
import React from "react";
import { AuthenticationModal } from "../components/AuthenticationModal";
import { Candidates } from "../components/Candidates";
import { ThankyouModal } from "../components/ThankyouModal";
import { contract, web3 } from "../web3";

const colors = ["red", "green", "blue", "gray", "wheat"];

export const Vote = () => {
  const [authenticated, toggleAuthenticated] = React.useState(false);
  const [thankyouModal, toggleThankyou] = React.useState(false);
  const [selected, setSelected] = React.useState(-1);
  const [candidates, setCandidates] = React.useState([]);
  const [voter, setVoter] = React.useState(-1);
  const [password, setPassword] = React.useState("");
  const [account, setAccount] = React.useState();
  React.useEffect(() => {
    web3.eth.getAccounts((err, res) => setAccount(res[0]));
    contract.methods.getCandidates().call((err, res) => {
      setCandidates(
        res.map((c, i) => {
          return { name: c, color: colors[i] };
        })
      );
    });
  }, []);

  const castVote = async (voterId, candidateId) => {
    try {
      await contract.methods
        .vote(voterId, candidateId, Date.now())
        .send({ from: account });
    } finally {
      toggleAuthenticated(false);
      setSelected(-1);
      setVoter(-1);
      setPassword("");
      toggleThankyou(true);
    }
  };
  const login = async (voter, password) => {
    await contract.methods
      .login(voter, password)
      .send({ from: account }, (err, res) => {
        if (res) toggleAuthenticated(true);
      });
  };
  return (
    <div className="max-h-screen overflow-hidden">
      <Candidates
        candidates={candidates}
        selected={selected}
        setSelected={setSelected}
      />
      {selected !== -1 && (
        <VoteButton text={"Vote"} onClick={() => castVote(voter, selected)} />
      )}
      {!authenticated && (
        <AuthenticationModal
          setVoter={setVoter}
          setPassword={setPassword}
          voter={voter}
          password={password}
          login={login}
        />
      )}
      {thankyouModal && <ThankyouModal toggleThankyou={toggleThankyou} />}
    </div>
  );
};
