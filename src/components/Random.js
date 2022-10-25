function Random( {min, max} ){
    let result = Math.floor((Math.random()*max+min))
    return (
        <div className="idCard">
            <p>Random value between {min} and {max} = {result}</p>
        </div>
    );
}

export default Random;