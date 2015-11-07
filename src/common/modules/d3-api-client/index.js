import axios from 'axios';
import config from '../../../../config/index';
const URL = 'https://eu.api.battle.net';
const locale = 'en_GB';

const api = {

    async sendRequest(url, query) {

        query = query || {};

        query.locale = locale;
        query.apikey = config.BATTLE_NET_KEY;

        const response = await axios.get(url, {params: query});

        if (response.data.code) {
            throw response.data;
        }

        return response.data;

    },


    async getCareerProfile(battleTag) {

        const url = `${URL}/d3/profile/${battleTag}/`;
        return await this.sendRequest(url);

    },

    async getHeroProfile(battleTag, heroId) {

        const url = `${URL}/d3/profile/${battleTag}/hero/${heroId}`;
        return await this.sendRequest(url);

    }
};

export default api;
