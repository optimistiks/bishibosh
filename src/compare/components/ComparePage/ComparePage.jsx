import React from 'react';
import {connect} from 'react-redux';
import {compare} from '../../modules/action-creators/index';

class ComparePage extends React.Component {

    componentWillMount() {
        this.props.dispatch(
            compare(
                this.props.location.query.battleTag,
                this.props.location.query.heroName,
                this.props.location.query.buildId
            )
        );
    }

    render() {

        return (
            <div>
                <h2>ComparePage</h2>
            </div>
        );

    }

}

export default connect()(ComparePage);
