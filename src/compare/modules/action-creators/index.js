import Parse from '../../../common/modules/parse-client/index';
import d3Api from '../../../common/modules/d3-api-client/index';
import {
    compare as actionCompare
} from '../action-repository/index';

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

            const query = new Parse.Query('Build');

            const [build, career] = await Promise.all([query.get(buildId), d3Api.getCareerProfile(battleTag)]);

            const hero = career.heroes.find((hero) => hero.name.toLowerCase() === heroName.toLowerCase());

            if (hero && build) {

                const [buildData, heroProfile] = await Promise.all([
                    build.getBuildData(),
                    d3Api.getHeroProfile(battleTag, hero.id)
                ]);

                Object.keys(heroProfile.items).forEach((slot) => {

                    const itemOnHero = heroProfile.items[slot];
                    const itemOnHeroNormalizedName = itemOnHero.name.toLowerCase().trim().replace('’', '\'');
                    const bestInSlot = buildData.items[slot].find((item) => item.bestInSlot);
                    const bestInSlotNormalizedName = bestInSlot.name.toLowerCase().trim().replace('’', '\'');

                    if (itemOnHeroNormalizedName !== bestInSlotNormalizedName) {
                        console.log(`It looks like best in slot is missing in your ${slot} slot`);
                        console.log(`Best in slot is ${bestInSlotNormalizedName} but you wear ${itemOnHeroNormalizedName}`);
                    } else {
                        console.log(`It looks like you wear best in slot in your ${slot} slot`);
                    }
                });

                // now we have to compare item stats on hero with item stats in build
                // for each item on hero, we need to retrieve item info with it's tooltipParams from api
                // then, for each stat in build slot, we need to check if it is present in item
                // if it's not present, generate warning (also need to check if item already have maximum affixes occupied by top stats)
                // need to convert stat id to readable form somehow

            } else {
                console.log('either hero or build were not found');
            }


        } catch (exception) {
            dispatch(actionCompare(exception, true));
        }
    };
};
