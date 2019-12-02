const cash = value =>
  +value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });

const History = ({ data }) => {
  return (
    <React.Fragment>
      {data.map(day => (
        <div className="day-details" key={day.date}>
          <div className="date">Date: {day.date}</div>
          <div className="details">
            Open: <span>{cash(day.open)} </span>
            <br />
            High: <span>{cash(day.high)} </span>
            <br />
            Low: <span>{cash(day.low)} </span>
            <br />
            Close: <span>{cash(day.close)} </span>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export { History };
