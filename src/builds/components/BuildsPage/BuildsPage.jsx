import React from 'react';
import {connect} from 'react-redux';
import {loadBuilds} from '../../modules/action-creators/index';


class BuildsPage extends React.Component {

    componentWillMount() {
        this.props.dispatch(loadBuilds());
    }

    render() {

        const builds = this.props.builds.map((build) => <li>{build.getName()}</li>);

        return (<div>
            <h2>Your builds</h2>
            <ul>
                {builds}
            </ul>
        </div>);
    }

}

export default connect((state) => ({builds: state.builds}))(BuildsPage);
