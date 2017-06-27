import React, {Component} from 'react';

class AddGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : ''
        }
    }
    
    render(){
        return(<div>
            <div className="row">
					<div className="col-md-4 col-md-offset-3">

						<div className="form-group has-feedback">
<input type="text" className="form-control text-center" placeholder="Enter Goals" required onChange={event => this.setState({ title: event.target.value })} onKeyPress={event => { if (event.key === 'Enter') this.AddGoal() } } />
                        <button className="btn btn-success" onClick={() => this.AddGoal()}>Add Goal</button>

						</div>

					</div>
				</div>
        </div> )
        
    }
}

export default AddGoal;