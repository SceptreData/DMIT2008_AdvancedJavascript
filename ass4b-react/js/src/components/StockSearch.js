const StockSearch = ({ submitCallback }) => {
  const [search, setSearch] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    submitCallback(search.toUpperCase());
  };

  return (
    <div>
      <form className="frm stock-search" onSubmit={handleSubmit}>
        <label htmlFor="symbol">
          Stock Symbol
          <input
            id="symbol"
            name="symbol"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </label>
        <button type="submit">Get Quote</button>
      </form>
    </div>
  );
};

export { StockSearch };
