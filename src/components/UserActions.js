

function UserActions({ onDelete, onEdit, user }){
    return <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="true">
                Actions
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="# " onClick={ () => onEdit({...user}) }>Modifier</a></li>
                    <li><a className="dropdown-item" href="# " onClick={ () => onDelete({...user}) }>Supprimer</a></li>
                </ul>
            </div>
}

export default UserActions;