import "./Disciplina.css";

function Disciplina() {
    const code = "DCC207";
    const name = "Desenvolvimento Web Front-End";

    return (
        <div className="disciplina">
            <div>{code+123}</div>
            <div>{name}</div>
        </div>
    )
}

export default Disciplina;