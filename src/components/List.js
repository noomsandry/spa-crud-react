import React from "react";
import UserActions from "./UserActions";

export class List extends React.Component{
     
    constructor({ props }){
        super(props)
    }


    render(){
        const rows = [];
        
        this.props.users.forEach(user => {
            if(this.props.search && (!user.firstname.toLowerCase().match(this.props.search.toLowerCase()) && !user.lastname.toLowerCase().match(this.props.search.toLowerCase()))){
                return;
            }
            rows.push(
                <tr key={user.id}>
                    <td> { user.firstname} </td>
                    <td> { user.lastname} </td>
                    <td> { user.age} </td>
                    <td> { user.sexe === 'homme' ? <i className="fa-solid fa-person"></i> : <i className="fa-solid fa-person-dress"></i> } </td>
                    <td> { user.maried ? 'Marié(e)': 'Célibataire'} </td>
                    <td> { user.comment} </td>
                    <td>
                        <UserActions onEdit={ this.props.onEditUser } onDelete={ this.props.onDeleteUser } user={user} />
                    </td>
                </tr>
            )
        });
        
        const emptyText = this.props.search ? 'Aucun résultat': 'Liste vide';
        if(rows.length === 0){
            rows.push(<tr>
                <td colSpan="7" style={ {textAlign: 'center'} }>({emptyText})</td>
            </tr>)
        }


        return <table className="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Prénom</th>
                    <th>Age</th>
                    <th>Sexe</th>
                    <th>Situation matrimonial</th>
                    <th>Commentaire</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { rows }
            </tbody>
        </table>
    }
}

export default List;