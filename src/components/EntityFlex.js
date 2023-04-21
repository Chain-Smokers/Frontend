import { InputBox } from "./InputBox";
import { Button } from "./Button";

export const EntityFlex = ({
  entityName,
  entityNamePlural,
  entity,
  setEntity,
  entities,
  addEntity,
  thirdColumn,
  setPassword,
  password,
  fourthColumn,
  fifthColumn,
  sixthColumn,
  seventhColumn,
  logout,
}) => (
  <div className="h-full block border-2 flex-1 p-4 flex flex-col">
    <p className="text-3xl font-mono text-center">{entityNamePlural}</p>
    <div>
      <div className="flex flex-row gap-4">
        <InputBox setData={setEntity} title={`${entityName} Name`} />
        {setPassword && <InputBox setData={setPassword} title={`Password`} />}
      </div>
      <div className="float-right">
        <Button
          onClick={() => {
            if (password) addEntity(entity, password);
            else addEntity(entity);
          }}
          text={`Add ${entityName}`}
        />
      </div>
    </div>
    <div className="h-full overflow-y-scroll mt-4">
      <table className="table-auto border-collapse border border-slate-400 w-full text-lg">
        <thead>
          <tr>
            <th className="border border-slate-300">Index</th>
            <th className="border border-slate-300">Name</th>
            <th className="border border-slate-300">{thirdColumn}</th>
            {fourthColumn && (
              <th className="border border-slate-300">{fourthColumn}</th>
            )}
            {fifthColumn && (
              <th className="border border-slate-300">{fifthColumn}</th>
            )}
            {sixthColumn && (
              <th className="border border-slate-300">{sixthColumn}</th>
            )}
            {seventhColumn && (
              <th className="border border-slate-300">{seventhColumn}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {entities.map((e, index) => (
            <tr key={index}>
              <td className="border border-slate-300 text-center">{index}</td>
              <td className="border border-slate-300 pl-2">{e[0]}</td>
              <td className="border border-slate-300 pl-2">
                {e[1].toString()}
              </td>
              {fourthColumn && (
                <td className="border border-slate-300 px-2">
                  {e[2].toString()}
                  {e[2] && (
                    <span
                      className="float-right cursor-pointer text-blue-700"
                      onClick={() => logout(index)}
                    >
                      logout
                    </span>
                  )}
                </td>
              )}
              {fifthColumn && (
                <td className="border border-slate-300 pl-2">
                  {e[3].toString()}
                </td>
              )}
              {sixthColumn && (
                <td className="border border-slate-300 pl-2">
                  {e[4].toString()}
                </td>
              )}
              {seventhColumn && (
                <td className="border border-slate-300 pl-2">
                  {e[5].toString()}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
