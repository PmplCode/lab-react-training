function Greeting({lang, children}) {
    console.log(children);
    return (
        <div className="idCard">
            {lang==="en" && <h2>Hello {children}</h2>}
            {lang==="de" && <h2>Halo {children}</h2>}
            {lang==="fr" && <h2>Bonjour {children}</h2>}
            {lang==="es" && <h2>Hola {children}</h2>}
        </div>
    );
}

export default Greeting;