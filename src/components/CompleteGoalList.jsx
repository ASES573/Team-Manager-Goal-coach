/*
 * @Author: Aswath MadhuBabu 
 * @Date: 2017-06-28 20:41:16 
 * @Last Modified by:   Aswath MadhuBabu 
 * @Last Modified time: 2017-06-28 20:41:16 
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeGoalRef} from '../firebase';
import {setCompleted} from '../actions';
class CompleteGoalList extends Component {
    componentDidMount() {
        completeGoalRef.on('value', snap => {
            let completeGoals = [];
            snap.forEach(completeGoal => {
                const {email, title} = completeGoal.val();
                completeGoals.push({email, title})
            })
            this
                .props
                .setCompleted(completeGoals);
        })
    }
    clearCompleted() {
        completeGoalRef.set([]);
    }
    render() {
        return (
            <div className="col-lg-6 col-lg-offset-3 container text-center well">
                <ul className="list-group">
                    {this
                        .props
                        .completeGoals
                        .map(function (completeGoal, index) {
                            const {title, email} = completeGoal;
                            return (
                                <li key={index} className="list-group-item">
                                    {title}&nbsp;&nbsp;
                                    <strong>{title}&nbsp;&nbsp;</strong>
                                    <span>Submitted By:<em>
                                            {email}
                                        </em>
                                    </span>
                                </li>
                            )
                        })
}
                </ul>
                <button className="btn btn-info" onClick={() => this.clearCompleted()}>Clear All</button>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const {completeGoals} = state;
    console.log('state in CompletegoalList', completeGoals);
    return {completeGoals}
}
export default connect(mapStateToProps, {setCompleted})(CompleteGoalList);