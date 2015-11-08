import '../../styles/styles.css';
import React from 'react';
import {connect} from 'react-redux';
import {compare} from '../../modules/action-creators/index';
import {Table, TableHeader, TableRow, TableBody, TableHeaderColumn, TableRowColumn} from 'material-ui';


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

        let items = null;

        if (this.props.recommendations.length) {

            items = this.props.slots.map((slot, index) => {

                const heroItem = this.props.heroProfileItems[slot];
                const buildItems = this.props.buildData.items[slot].map(
                    (item, index) => <li key={index}>{item.name}</li>
                );

                console.log('buildItem', buildItems);

                const iconSrc = `http://media.blizzard.com/d3/icons/items/small/${heroItem.icon}.png`;
                const tooltipHref = `http://eu.battle.net/d3/en/${heroItem.tooltipParams}`;

                return (
                    <TableRow key={index}>
                        <TableRowColumn>{slot}</TableRowColumn>
                        <TableRowColumn>
                            <img src={iconSrc}/>
                            <a href={tooltipHref} data-d3tooltip={heroItem.tooltipParams}>{heroItem.name}</a>
                        </TableRowColumn>
                        <TableRowColumn>
                            <ul>
                                {buildItems}
                            </ul>
                        </TableRowColumn>
                    </TableRow>
                );

            });
        }

        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="row">
                        <div className="col-xs-12">
                            <h2>Recommendations</h2>
                            <ul>
                                {recommendations}
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-lg-6">
                            <h2>Item details</h2>
                            <Table selectable={false}>
                                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                    <TableRow>
                                        <TableHeaderColumn tooltip="Slot">Slot</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="You have">You have</TableHeaderColumn>
                                        <TableHeaderColumn tooltip="Best in slot">Best in slot</TableHeaderColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody displayRowCheckbox={false}>
                                    {items}
                                </TableBody>
                            </Table>
                        </div>
                        <div className="col-xs-12 col-lg-6">
                            <h2>Attribute details</h2>

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
