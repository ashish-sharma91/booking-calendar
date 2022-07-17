interface Props {
  onChange: Function;
}

function CalendarWrapper({ onChange }: Props): JSX.Element {
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = event.target.value;
    onChange(date);
  };

  return (
    <div>
      <input type="date" onChange={inputHandler} />
    </div>
  );
}

export default CalendarWrapper;
