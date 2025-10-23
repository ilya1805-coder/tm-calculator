export default function RadioGroup({ value, name, options, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => {
        return (
          <label
            key={option.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              key={option.value}
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="cursor-pointer"
            />
            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}
