import thankyou from "../resources/images/thankyou.png";

export const ThankyouModal = ({ toggleThankyou }) => {
  setInterval(() => toggleThankyou(false), 10000);
  return (
    <div className="fixed z-50 w-full h-full flex justify-center">
      <div className="fixed w-full h-full flex bg-black opacity-70"></div>
      <div className="bg-white w-3/4 h-3/4 drop-shadow-2xl opacity-100 self-center rounded-xl overflow-hidden flex flex-row justify-center">
        <div className="basis-2/4 self-center">
          <img alt="" src={thankyou} />
          <p className="text-3xl text-center mt-16">
            Thank you for participating in this election
          </p>
        </div>
      </div>
    </div>
  );
};
