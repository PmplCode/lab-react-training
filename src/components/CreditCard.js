function CreditCard( {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} ) {
    const divStyle1 = {
        "backgroundColor": `${bgColor}`,
        "color": `${color}`
    }
    console.log(expirationMonth.toString().length)
    return (
        <div style={divStyle1} className="idCard">
            <div>
                <p><strong>Type: </strong>{type}</p>
                <p><strong>Number: </strong>···· ···· ···· {number.slice(12,16)}</p>
                <p><strong>Expires: </strong>{expirationMonth.toString().length < 2 && `0${expirationMonth}`}{expirationMonth.toString().length >= 2 && `${expirationMonth}`}/{expirationYear.toString().slice(2)}</p>
                <p><strong>Bank: </strong>{bank}</p>
                <p><strong>Owner: </strong>{owner}</p>
                </div>
        </div>
    );
}

export default CreditCard;