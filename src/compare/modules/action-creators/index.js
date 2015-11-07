import Parse from '../../../common/modules/parse-client/index';
import d3Api from '../../../common/modules/d3-api-client/index';
import {
    compare as actionCompare
} from '../action-repository/index';
import slots from '../../../../slots.json';
import attributes from '../../../../attributes.json';

/**
 * todo: temporary code, refactor asap
 * @param battleTag
 * @param heroName
 * @param buildId
 * @returns {Function}
 */
export const compare = (battleTag, heroName, buildId) => {

    return async function (dispatch) {

        try {

            // create a query to load build by it's id from parse
            const buildQuery = new Parse.Query('Build');

            // run build loading and career profile loading in parallel
            const [build, careerProfile] = await Promise.all([
                buildQuery.get(buildId),
                d3Api.getCareerProfile(battleTag)
            ]);

            // find the hero in the career profile by it's name
            const heroDataFromCareerProfile = careerProfile.heroes.find(
                (hero) => hero.name.toLowerCase() === heroName.toLowerCase()
            );

            // we can proceed only if we found build and career profile
            if (heroDataFromCareerProfile && build) {

                // load build data from file and hero profile from bnet in parallel
                const [buildData, heroProfile] = await Promise.all([
                    build.getBuildData(),
                    d3Api.getHeroProfile(battleTag, heroDataFromCareerProfile.id)
                ]);

                // we will load data for each item on hero, and we store promises here
                const itemsDataPromises = [];

                slots.forEach((slot) => {

                    // add promise to load item data
                    itemsDataPromises.push(d3Api.getItemData(heroProfile.items[slot].tooltipParams));

                    // get normalized item names for item on hero and for bis item
                    const itemOnHero = heroProfile.items[slot];
                    const itemOnHeroNormalizedName = itemOnHero.name.toLowerCase().trim().replace('’', '\'');
                    const itemBestInSlot = buildData.items[slot].find((item) => item.bestInSlot);
                    const itemBestInSlotNormalizedName = itemBestInSlot.name.toLowerCase().trim().replace('’', '\'');

                    // compare bis item and item on hero, warn if bis item is not found
                    if (itemOnHeroNormalizedName !== itemBestInSlotNormalizedName) {
                        console.warn(`It looks like best in slot is missing in your ${slot} slot`);
                        console.warn(`Best in slot is ${itemBestInSlotNormalizedName} but you wear ${itemOnHeroNormalizedName}`);
                    } else {
                        console.info(`It looks like you wear best in slot in your ${slot} slot`);
                    }
                });

                // load data for all items in parallel
                const itemsData = await Promise.all(itemsDataPromises);

                itemsData.forEach((itemData, index) => {

                    // get item slot name (we cant get it from item itself because they are different, e.x. chest instead of torso)
                    const slot = slots[index];

                    // iterate through recommended item attributes from build for given slot
                    buildData.attributes[slot].forEach((attribute) => {

                        // if recommended attribute is not present on the item, warn
                        if (!itemData.attributesRaw[attribute.id]) {

                            console.warn('Attribute', attributes[attribute.id], 'is missing from slot', slot, 'and its priority is', attribute.priority);

                        } else {

                            console.log('Attribute', attributes[attribute.id], 'is present in slot', slot, 'and its priority is', attribute.priority);

                        }

                    });

                });

            } else {
                console.log('either hero or build were not found');
            }


        } catch (exception) {
            console.log('bad happened', exception);
            dispatch(actionCompare(exception, true));
        }
    };
};
