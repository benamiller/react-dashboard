function KpiBlock({ svgComponent, title, time, value, targetValue = 0 }) {
  let numberValue;

  if (typeof value === "string") {
    numberValue = parseInt(value.replace(/[^0-9]/g, ""));
  } else {
    numberValue = value;
  }

  return (
    <div className="rounded-lg flex flex-col justify-center items-center shadow-xl py-4 bg-white">
      <div className="flex">
        {svgComponent}
        <div className="flex flex-col ml-2">
          <h2 className="capitalize text-lg">{title}</h2>
          <p className="font-thin text-xs capitalize"></p>
        </div>
      </div>
      <p
        className={
          numberValue >= targetValue || 0
            ? "text-4xl font-bold text-blue-900 pt-2"
            : "text-4xl font-bold text-fuchsia-800 pt-2"
        }
      >
        {value}
      </p>
    </div>
  );
}

export default KpiBlock;
