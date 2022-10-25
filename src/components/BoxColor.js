function BoxColor( {r, g, b} ){
    const divStyle = {
        "backgroundColor": `rgb(${r},${g},${b})`,
        "width": "50vw",
    }
    return (
        <div style={divStyle} >
            <h1>Div de Color</h1>
        </div>
    );
}

export default BoxColor;