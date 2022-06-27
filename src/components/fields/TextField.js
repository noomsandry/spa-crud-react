function TextField({ label, name, value, placeholder, onChange }){
    return <div className="mb-3">
        <label htmlFor={ name } className="form-label">{ label }</label>
        <input type="text" name={ name } id={ name } onChange={ onChange } value={ value } className="form-control" placeholder={ placeholder }/>
    </div>
}

export default TextField;