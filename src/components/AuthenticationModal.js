import { FingerprintScanner } from "./FingerprintScanner";
import { InputBox } from "./InputBox";
import { Button } from "./Button";
import eVoteImage from "../resources/images/eVote.jpg";
import avatar from "../resources/images/avatar.png";

export const AuthenticationModal = ({
  setVoter,
  setPassword,
  voter,
  password,
  login,
}) => (
  <div className="fixed z-50 w-full h-full flex justify-center">
    <div className="fixed w-full h-full flex bg-black opacity-70"></div>
    <div className="bg-white w-3/4 h-3/4 drop-shadow-2xl opacity-100 self-center rounded-xl overflow-hidden flex flex-row">
      <div className="flex-1 bg-red-100">
        <img alt="" className="h-full w-full object-cover" src={eVoteImage} />
      </div>
      <div className="flex-1 flex justify-center">
        <div className="self-center flex flex-col w-2/3">
          <img
            alt=""
            className="bg-blue-100 w-2/5 rounded-full self-center aspect-square object-cover"
            src={avatar}
          />
          <br />
          <InputBox setData={setVoter} title={"Voter ID"} />
          <InputBox setData={setPassword} title={"Password"} />
          <br />
          <FingerprintScanner />
          <br />
          <Button text={"Proceed"} onClick={() => login(voter, password)} />
        </div>
      </div>
    </div>
  </div>
);
