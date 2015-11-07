import Parse from '../../../common/modules/parse-client/index';
import parseFileLoader from '../../../common/modules/parse-file-loader/index';

class Build extends Parse.Object {

    constructor() {
        super('Build');
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.get('name');
    }

    getPatch() {
        return this.get('patch');
    }

    async getBuildData() {

        const parseFile = this.get('buildData');
        return await parseFileLoader(parseFile);

    }

}

Parse.Object.registerSubclass('Build', Build);

export default Build;
