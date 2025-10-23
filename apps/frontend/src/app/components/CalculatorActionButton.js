export default function CalculatorActionButton({
  text,
  color = 'blue',
  disabled = false,
  onButtonClick,
}) {
  const baseColor = color === 'green' ? 'bg-green-600' : 'bg-blue-600';
  const hoverColor =
    color === 'green' ? 'hover:bg-green-700' : 'hover:bg-blue-700';
  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  return (
    <button
      disabled={disabled}
      className={`${baseColor} ${hoverColor} text-white font-semibold px-4 py-2 rounded transition-colors duration-200 ${disabledClasses}`}
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
}
