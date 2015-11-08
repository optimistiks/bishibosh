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

        const recommendations = this.props.recommendations.map(
            (recommendation, index) => <li key={index}>{recommendation}</li>
        );

        const heroItems = this.props.slots.map((slot, index) => {

            const item = this.props.heroProfileItems[slot];

            // on initial load, slots are present (they are always) but there are no hero profile yet
            if (!item) {
                return;
            }

            const iconSrc = `http://media.blizzard.com/d3/icons/items/small/${item.icon}.png`;
            const tooltipHref = `http://eu.battle.net/d3/en/${item.tooltipParams}`;

            return (
                <div className="row" key={index}>
                    <div className="col-xs-12">
                        <h4>{slot}</h4>
                        <img src={iconSrc}/>
                        <a href={tooltipHref} data-d3tooltip={item.tooltipParams}>{item.name}</a>
                    </div>
                </div>
            );

        });

        return (
            <div className="row">
                <div className="col-xs-12">
                    <h2>Recommendations</h2>
                    <ul>
                        {recommendations}
                    </ul>
                </div>
                <div className="col-xs-12">
                    <h2>Details</h2>
                    <div className="row">
                        <div className="col-xs-12 col-lg-6">
                            <h3>Hero</h3>
                            {heroItems}
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <h3>Build</h3>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

ComparePage.propTypes = {

    recommendations: React.PropTypes.arrayOf(React.PropTypes.string),

    buildData: React.PropTypes.shape({
        name: React.PropTypes.string,
        source: React.PropTypes.string,
        items: React.PropTypes.object,
        attributes: React.PropTypes.object
    }),

    heroProfileItems: React.PropTypes.shape({
        head: React.PropTypes.object,
        shoulders: React.PropTypes.object,
        torso: React.PropTypes.object,
        bracers: React.PropTypes.object,
        hands: React.PropTypes.object,
        waist: React.PropTypes.object,
        legs: React.PropTypes.object,
        feet: React.PropTypes.object,
        neck: React.PropTypes.object,
        leftFinger: React.PropTypes.object,
        rightFinger: React.PropTypes.object,
        mainHand: React.PropTypes.object,
        offHand: React.PropTypes.object
    }),

    slots: React.PropTypes.arrayOf(React.PropTypes.string)
};

export default connect((state) => ({
    recommendations: state.recommendations,
    buildData: state.buildData,
    heroProfileItems: state.heroProfileItems,
    slots: state.slots
}))(ComparePage);
