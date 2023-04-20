import React from "react";
import { EntityFlex } from "../components/EntityFlex";
import { contract, web3 } from "../web3";

export const Admin = () => {
  const [candidateName, setCandidateName] = React.useState("");
  const [voterName, setVoterName] = React.useState("");
  const [candidates, setCandidates] = React.useState([]);
  const [voters, setVoters] = React.useState([]);
  const [password, setPassword] = React.useState("");
  const [account, setAccount] = React.useState();
  React.useEffect(() => {
    web3.eth.getAccounts((err, res) => setAccount(res[0]));
    contract.methods.getResult().call((err, res) => setCandidates(res));
    contract.methods.getVotersDetailed().call((err, res) => setVoters(res));
  }, []);
  const addCandidate = async (candidate) => {
    await contract.methods.addCandidate(candidate).send({ from: account });
    contract.methods.getResult().call((err, res) => setCandidates(res));
  };
  const addVoter = async (voter, password) => {
    await contract.methods.addVoter(voter, password).send({ from: account });
    contract.methods.getVotersDetailed().call((err, res) => setVoters(res));
  };
  const logout = async (voterId) => {
    await contract.methods.logout(voterId).send({ from: account });
    contract.methods.getVotersDetailed().call((err, res) => setVoters(res));
  };
  return (
    <div className="p-6 h-screen">
      <div className="flex h-full flex-col md:flex-row gap-4">
        <EntityFlex
          addEntity={addCandidate}
          entities={candidates}
          entity={candidateName}
          entityName={"Candidate"}
          entityNamePlural={"Candidates"}
          setEntity={setCandidateName}
          thirdColumn={"Vote count"}
        />
        <EntityFlex
          addEntity={addVoter}
          entities={voters}
          entity={voterName}
          entityName={"Voter"}
          entityNamePlural={"Voters"}
          setEntity={setVoterName}
          setPassword={setPassword}
          password={password}
          thirdColumn={"Has cast vote?"}
          fourthColumn={"Is logged in?"}
          fifthColumn={"Password"}
          sixthColumn={"Node Address"}
          seventhColumn={"Timestamp"}
          logout={logout}
        />
      </div>
    </div>
  );
};
