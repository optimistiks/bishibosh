import '../../styles/styles.css';
import React from 'react';
import {connect} from 'react-redux';
import {compare} from '../../modules/action-creators/index';

class ComparePage extends React.Component {

    componentWillMount() {
        this.props.dispatch(
            compare(
                this.props.params.battleTag,
                this.props.params.heroName,
                this.props.params.buildId
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
