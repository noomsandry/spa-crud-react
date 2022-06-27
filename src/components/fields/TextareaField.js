function TextareaField({ label, name, value, onChange }){
    return <div className="form-floating">
        <textarea className="form-control" id={ name } value={ value } onChange={ onChange }  name={ name }></textarea>
        <label htmlFor={ name } className="form-label">{ label }</label>
    </div>
}

export default TextareaField;