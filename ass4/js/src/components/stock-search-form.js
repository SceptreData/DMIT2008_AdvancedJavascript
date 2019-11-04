const StockSearch = () => {
    const [search, setSearch] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(search)
    }

  return (
    <div>
      <form className="frm stock-search" onSubmit={e => e.preventDefault()}>
        <label htmlFor="symbol">
          Stock Symbol
          <input id="symbol" name="symbol" value={search} onChange={e => setSearch(e.target.value)} />
        </label>
        <button onClick={handleSubmit} type="submit">Get Quote</button>
      </form>
    </div>
  );
};

export {StockSearch};
