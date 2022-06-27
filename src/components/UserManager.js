import React from "react";
import TextField from "./fields/TextField";
import Form from "./Form";
import List from "./List";

export const DEFAULT_USER = () => ({
    firstname: '',
    lastname: '',
    age: 18,
    sexe: 'homme',
    comment: '',
    maried: false,
   
});

export class UserManager extends React.Component{
    constructor({ props }){
        super(props);
        this.state = {
            users: [],
            user: DEFAULT_USER(),
            search: ''
        };

        this.handleSaveUser = this.handleSaveUser.bind(this);
        this.handleDeleteUser = this.handleDeleteUser.bind(this);
        this.handleEditUser = this.handleEditUser.bind(this);
        this.handleResetFrom = this.handleResetFrom.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSaveUser(){
        const user = this.state.user;
        let users = this.state.users;
        if(!user.id){
            user.id = Date.now();
            users.push(user);
        }else{
            users = users.map(u => {
                if(u.id === user.id){
                    return user;
                }
                return u;
            })
        }
        
        this.setState({
            users,
            user: DEFAULT_USER()
        });
    }

    handleDeleteUser(user){
        const users = this.state.users;
        this.setState({
            users: users.filter(u => u.id !== user.id )
        })
    }

    handleEditUser(user){
        this.setState({
            user
        })
    }

    handleResetFrom(){
        this.setState({
            user: DEFAULT_USER()
        })
    }

    handleChangeValue(change){
        const user = this.state.user;
        user[change.name] = change.value;
        this.setState(user);
    }

    handleSearchChange(e){
        this.setState({
            search: e.target.value
        })
    }

    render(){
        return <div className="container mt-5">
            <Form onSubmit={this.handleSaveUser} user={this.state.user } onReset={this.handleResetFrom} onChangeValue={this.handleChangeValue} />
            <TextField value={ this.state.search } name="search" label="" onChange={ this.handleSearchChange } placeholder="Chercher ..."/>
            <List users={this.state.users} onDeleteUser={this.handleDeleteUser}  onEditUser={this.handleEditUser} search={ this.state.search } />
        </div>
    }
}