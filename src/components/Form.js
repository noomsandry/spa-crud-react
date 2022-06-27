import React from 'react';
import CheckField from './fields/CheckField';
import NumberField from './fields/NumberField';
import RadioField from './fields/RadioField';
import TextareaField from './fields/TextareaField';
import TextField from './fields/TextField';
import './Form.css';



export class Form extends React.Component{
     
    constructor({ props }){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
          this.setState({ form: nextProps.user });
    }

    handleChange(e){
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.props.onChangeValue({
           name, value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onSubmit()
    }

    handleResetForm(e){
        this.props.onReset();
    }

    render(){
        const user = this.props.user;
        const formValid = (!!user.firstname && !!user.lastname && !!user.age);
        return <div className='card'>
                    <div className='card-body'>
                            <h5 className="card-title">Formulaire</h5>
                            <form onSubmit={this.handleSubmit } onReset={this.handleResetForm}>
                                    <TextField value={ user.firstname } name="firstname" label="Nom" onChange={ this.handleChange } />
                                    <TextField value={ user.lastname } name="lastname" label="Prénom" onChange={ this.handleChange } />
                                    <NumberField value={ user.age } name="age" label="Age" onChange={ this.handleChange } />
                                    <div onChange={ this.handleChange } value={ user.sexe }>
                                        <RadioField checked={ user.sexe === 'homme' } value="homme" name="sexe" label="Homme"  />
                                        <RadioField checked={ user.sexe === 'femme' }  value="femme" name="sexe" label="Femme" />
                                    </div>
                                    <div className='mt-3'>
                                        <CheckField value={ user.maried } name="maried" label="Marié(e) ?" onChange={ this.handleChange } />
                                    </div>
                                    <div className='mt-3'>
                                        <TextareaField value={ user.comment } name="comment" label="Commentaire" onChange={ this.handleChange } />
                                    </div>
                                    <div className="col-12 mt-5">
                                        <button className="btn btn-primary" type="submit" disabled={ !formValid }>Enregistrer</button>
                                        <button type="reset" className="btn btn-outline-secondary ms-2">Abandonner</button>
                                    </div>
                            </form>
                    </div>
            </div>
    }
}

export default Form;


