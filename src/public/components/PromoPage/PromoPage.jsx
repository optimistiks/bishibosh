import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {loadBuilds} from '../../modules/action-creators/index';
import Build from '../../../common/models/Build/Build';


class PromoPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(loadBuilds());
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.pushState(null, '/compare', {
            battleTag: this.form.elements.battleTag.value,
            heroName: this.form.elements.heroName.value,
            buildId: this.form.elements.buildId.value
        });
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

                <form onSubmit={this.handleSubmit} ref={(form) => this.form = form}>
                    <input type="text" name="battleTag" placeholder="battletag" required/>
                    <input type="text" name="heroName" placeholder="hero name" required/>
                    <select defaultValue="" name="buildId" required>
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
