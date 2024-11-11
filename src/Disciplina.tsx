import "./Disciplina.css";

type DisciplinaProps = { 
    code: string;
    name: string;
}

function Disciplina(props: DisciplinaProps) {

    return (
        <div className="disciplina">
            <div>{props.code}</div>
            <div>{props.name}</div>
        </div>
    )
}

export default Disciplina;