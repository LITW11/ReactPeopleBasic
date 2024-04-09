import React from 'react';

class PersonForm extends React.Component {

    // state = {
    //     amountOfTimesAddWasClicked: 0
    // }

    // onLocalAddClicked = () => {
    //     this.setState({amountOfTimesAddWasClicked: this.state.amountOfTimesAddWasClicked + 1});
    //     this.props.onAddClicked();
    // }

    render() {
        const { firstName, lastName, age, onTextChanged, onAddClicked, onClearClicked } = this.props;
        return (
            <>
                {/* <h2>Add was clicked {this.state.amountOfTimesAddWasClicked} times</h2> */}
                <div className="row bg-light p-4 rounded mb-3">
                    <div className="col-md-3">
                        <input name='firstName' value={firstName} onChange={onTextChanged} type="text" placeholder="First Name" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <input name='lastName' value={lastName} onChange={onTextChanged} type="text" placeholder="Last Name" className="form-control" />
                    </div>
                    <div className="col-md-3">
                        <input name='age' value={age} onChange={onTextChanged} type="text" placeholder="Age" className="form-control" />
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-primary" onClick={onAddClicked}>Add</button>

                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-warning ml-3" onClick={onClearClicked}>Clear All</button>
                    </div>
                </div>
            </>
        );
    }
}

export default PersonForm;