import Parse from '../../../common/modules/parse-client/index';

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

}

Parse.Object.registerSubclass('Build', Build);

export default Build;
