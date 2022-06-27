

function NumberField({ label, name, value, onChange }){
    return <div className="mb-3">
        <label htmlFor={ name } className="form-label">{ label }</label>
        <input type="number" name={ name } id={ name } onChange={ onChange } value={ value } className="form-control"/>
    </div>
}

export default NumberField;