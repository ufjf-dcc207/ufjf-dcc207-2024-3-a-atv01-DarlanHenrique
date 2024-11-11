import "./Disciplina.css";

type DisciplinaProps = { 
    code: string;
    name: string;
}

function Disciplina({code, name}: DisciplinaProps) {

    return (
        <div className="disciplina">
            <div>{code}</div>
            <div>{name}</div>
        </div>
    )
}

export default Disciplina;