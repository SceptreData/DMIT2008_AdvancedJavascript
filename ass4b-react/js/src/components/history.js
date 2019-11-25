

    const cash = value => (+ value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    }));

const History = ({data})=> {



    return (
        <React.Fragment>
            {data.map (day=> (
                <div className="day-details" key={day.date}>
                    <div className="date">Date: {day.date}</div>
                    <div className="details">
                        Open: {cash(day.open)}
                        High: {cash(day.high)}
                        Low: {cash(day.low)}
                        Close: {cash(day.close)}
                        
                    </div>

                </div>
            ))}
        </React.Fragment>
    )
}

export {History};