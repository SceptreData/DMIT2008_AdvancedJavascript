
const PreviousReports = ({state}) => {
    return (
        <ul>
            { state.map(stock => (
                <li key={stock.symbol}>
                    <h4>{stock.symbol}</h4>
                    <div className="prev-price">{stock.price}</div>
                    <div className="prev-detail">{stock.date}</div>
                </li>
            ))}
        </ul>
    );
}
 
export {PreviousReports};