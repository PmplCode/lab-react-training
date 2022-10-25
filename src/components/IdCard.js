function IdCard( {lastName, firstName, gender, height, birth, picture} ) {
    console.log(birth)
    return (
        <div className="idCard">
            <div>
                <img src={picture} alt="profile"/>
            </div>
            <div>
                <p><strong>First Name: </strong>{firstName}</p>
                <p><strong>Last Name: </strong>{lastName}</p>
                <p><strong>Gender: </strong>{gender}</p>
                <p><strong>Height: </strong>{height}</p>
                <p><strong>Birth: </strong>{birth.toString().slice(0, 15)}</p>
            </div>
        </div>
    );
}

export default IdCard;