import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';
import { v4 as uuidv4 } from 'uuid';
import { produce } from 'immer';

class PeopleTable extends React.Component {

    state = {
        people: [],
        currentPerson: {
            id: uuidv4(),
            firstName: '',
            lastName: '',
            age: ''
        },
        selectedPeople: []
    }

    onTextChanged = e => {

        const nextState = produce(this.state, draftState => {
            draftState.currentPerson[e.target.name] = e.target.value;
        });

        this.setState(nextState);

        // const copy = { ...this.state.currentPerson };
        // copy[e.target.name] = e.target.value;
        // this.setState({ currentPerson: copy });
    }

    onAddClicked = () => {

        const nextState = produce(this.state, draft => {
            draft.people.push(draft.currentPerson);
            draft.currentPerson = {
                id: uuidv4(),
                firstName: '',
                lastName: '',
                age: ''
            }
        });

        this.setState(nextState);

        // const { id, firstName, lastName, age } = this.state.currentPerson;
        // this.setState({
        //     people: [...this.state.people, {id, firstName, lastName, age }],
        //     currentPerson: {
        //         id: uuidv4(),
        //         firstName: '',
        //         lastName: '',
        //         age: ''
        //     }
        // });
    }

    onClearClicked = () => {
        this.setState({
            people: [],
            currentPerson: {
                id: uuidv4(),
                firstName: '',
                lastName: '',
                age: ''
            }
        })
    }

    getContent = () => {
        const { people } = this.state;
        if (!people.length) {
            return <h1>No people added yet! Go ahead and add some....</h1>
        }

        return (
            <table className='table table-hover table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map(p => <PersonRow key={p.id} person={p} />)}
                </tbody>
            </table>
        )
    }

    onSelectClicked = (p) => {
        const { selectedPeople } = this.state;
        if (selectedPeople.includes(p.id)) {
            this.setState({ selectedPeople: selectedPeople.filter(id => id !== p.id) });
        } else {
            this.setState({ selectedPeople: [...selectedPeople, p.id] });
        }
    }

    render() {
        const { people, selectedPeople } = this.state;
        const { firstName, lastName, age } = this.state.currentPerson;
        return (
            <div className='container' style={{ marginTop: 60 }}>
                <h2>Selected People Count: {selectedPeople.length}</h2>
                <PersonForm
                    firstName={firstName}
                    lastName={lastName}
                    age={age}
                    onTextChanged={this.onTextChanged}
                    onAddClicked={this.onAddClicked}
                    onClearClicked={this.onClearClicked}
                />
                {/* {this.getContent()} */}
                {!people.length && <h1>No people added yet! Go ahead and add some....</h1>}
                {Boolean(people.length) && <table className='table table-hover table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map(p => <PersonRow key={p.id}
                            person={p}
                            isSelected={selectedPeople.includes(p.id)}
                            onSelectClicked={() => this.onSelectClicked(p)} />)}
                    </tbody>
                </table>}
            </div>
        )
    }
}

export default PeopleTable;