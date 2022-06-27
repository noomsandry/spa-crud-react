

function CheckField({ label, name, value, onChange }){
    return <div className="form-check">
        <input type="checkbox" name={ name } id={ name } onChange={ onChange } value={ value } className="form-check-input"/>
        <label htmlFor={ name } className="form-check-label">{ label }</label>
    </div>
}

export default CheckField;