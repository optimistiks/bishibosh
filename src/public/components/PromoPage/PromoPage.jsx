import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {loadBuilds, compareFormChange} from '../../modules/action-creators/index';
import {TextField, SelectField, RaisedButton} from 'material-ui';
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
        const formData = this.props.compareFormData;
        const url = `/compare/${formData.battleTag}/${formData.heroName}/${formData.buildId}`;
        this.props.history.pushState(null, url);
    }

    handleChange(name, e) {
        this.props.dispatch(compareFormChange(name, e.target.value));
    }

    render() {

        const menuItems = this.props.builds.map((build) => ({payload: build.getId(), text: build.getName()}));

        return (
            <div className="row">

                <div className="col-xs-12">

                    <h1>Welcome to Bishibosh</h1>

                    <p>
                        Bishibosh is a build tracker for Diablo III.
                    </p>

                    <ul>
                        <li>Compare your characters against the most popular Diablo III builds!</li>
                        <li>Get recommendations about what to improve next!</li>
                        <li>Create your own builds and compare against them!</li>
                        <li>And if you think that your build is good enough, publish it so other users can compare
                            against it too!
                        </li>
                    </ul>

                    <div className="row compare-form">
                        <div className="col-xs-12 col-sm-4 col-sm-offset-4">
                            <form onSubmit={this.handleSubmit} ref={(form) => this.form = form}>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <TextField
                                            value={this.props.compareFormData.battleTag}
                                            onChange={this.handleChange.bind(this, 'battleTag')}
                                            name="battleTag"
                                            hintText="Battletag (e.g. optimistiks-2108)"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <TextField
                                            value={this.props.compareFormData.heroName}
                                            onChange={this.handleChange.bind(this, 'heroName')}
                                            name="heroName"
                                            hintText="Hero name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12">
                                        <SelectField
                                            value={this.props.compareFormData.buildId}
                                            onChange={this.handleChange.bind(this, 'buildId')}
                                            name="buildId"
                                            menuItems={menuItems}
                                        />
                                    </div>
                                </div>

                                <RaisedButton label="Compare" primary type="submit"/>
                            </form>
                        </div>
                    </div>

                    <Link to="/signin">Sign in</Link>

                </div>

            </div>
        );

    }

}

PromoPage.propTypes = {
    builds: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Build)),
    compareFormData: React.PropTypes.shape({
        battleTag: React.PropTypes.string,
        heroName: React.PropTypes.string,
        buildId: React.PropTypes.string
    })
};

export default connect((state) => ({
    builds: state.builds,
    compareFormData: state.compareFormData
}))(PromoPage);
