import DropDown from "./DropDown";
import { formatPhoneNumber } from "../../utils/functions/formattingFunctions";

function Table({
  tableHeaders,
  tableData,
  gridLayout,
  dropDownOptions,
  dropDownState,
  setDropDownState,
}) {
  return (
    <section
      className={`w-full ${gridLayout} shadow-2xl rounded-lg overflow-y-auto h-full`}
    >
      {console.log(tableData)}
      <table className=" w-full m-auto relative">
        <thead className="bg-gray-50 w-full sticky top-0">
          <tr>
            {tableHeaders.map((item) => (
              <th
                key={item}
                scope="col"
                className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider break-words text-center"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 break-words overflow-y-hidden">
          {tableData.map(function (data, index) {
            var reviewValues = [];
            Object.entries(data).forEach(function ([key, value]) {
              if (key === "data") {
                let date = new Date(value);
                reviewValues.push(date.toLocaleDateString());
                return;
              }
              if (key === "phoneNumber") {
                return reviewValues.push(formatPhoneNumber(value));
              }
              reviewValues.push(value.toString());
            });
            console.log(reviewValues);
            return (
              <tr
                key={index}
                className="overflow-scroll
                "
              >
                {reviewValues.map((prop, index) => {
                  return (
                    <td
                      key={index}
                      className="px-6 py-4 break-words text-center overflow-hidden text-sm text-gray-500"
                    >
                      {prop}
                      {console.log(prop)}
                    </td>
                  );
                })}
                {dropDownOptions != null ? (
                  <td className="px-6 py-4 break-words text-sm text-gray-500">
                    <DropDown
                      list={dropDownOptions}
                      parentStateSelect={dropDownState}
                      setParentStateSelect={setDropDownState}
                    />
                  </td>
                ) : null}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
