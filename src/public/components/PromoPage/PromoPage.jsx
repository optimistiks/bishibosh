import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {loadBuilds} from '../../modules/action-creators/index';
import Build from '../../../common/models/Build/Build';


class PromoPage extends React.Component {

    componentWillMount() {

        this.props.dispatch(loadBuilds());

    }

    render() {

        const options = this.props.builds.map((build, index) => {
            return <option key={index} value={build.getId()}>{build.getName()}</option>;
        });

        return (
            <div>

                <h1>Welcome to Bishibosh</h1>

                <p>
                    Bishibosh is a build tracker for diablo 3. Compare your characters against the most popular diablo 3
                    builds and get recommendations about what to improve next. Create your own builds and compare
                    against them! And if you think that your build is good enough, publish it so other users can compare
                    against it too!
                </p>

                <form>
                    <input type="text" placeholder="battletag"/>
                    <input type="text" placeholder="hero name"/>
                    <select defaultValue="">
                        <option value="">Select a build...</option>
                        {options}
                    </select>
                    <button type="submit">Compare</button>
                </form>

                <Link to="/signin">Sign in</Link>

            </div>
        );

    }

}

PromoPage.propTypes = {
    builds: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Build))
};

export default connect((state) => ({builds: state.builds}))(PromoPage);
