

function RadioField({ label, name, value, checked }){
    return <div className="form-check">
        <input type="radio" name={ name } id={ value } value={ value } className="form-check-input" defaultChecked={ checked }  />
        <label htmlFor={ value } className="form-check-label">{ label }</label>
    </div>
}

export default RadioField;