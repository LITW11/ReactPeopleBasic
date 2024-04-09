import React from 'react';

class PersonRow extends React.Component{

    // onSelectClicked = () => {
    //     this.props.onSelectClicked(this.props.person);
    // }

    render() {
        const {isSelected, onSelectClicked} = this.props;
        const {id, firstName, lastName, age } = this.props.person;
        
        return (
            <tr className={+age >= 65 ? 'table-danger': ''}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{age}</td>
                <td>
                    <button className={`btn btn-${isSelected ? 'danger' : 'success'} w-100`} onClick={onSelectClicked}>
                        {isSelected ? 'Unselect': 'Select'}
                    </button>
                </td>
            </tr>
        )
    }
}

export default PersonRow;