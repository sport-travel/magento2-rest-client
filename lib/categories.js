var util = require('util');

module.exports = function (restClient) {
    var module = {};

    module.list = function (searchCriteria) {
        var query = 'searchCriteria=' + searchCriteria;
        var endpointUrl = util.format('/categories/list?%s', query);
        return restClient.get(endpointUrl);
    }

    module.listTree = function (rootCategoryId, depth = 5) {
        var endpointUrl = util.format('/categories?rootCategoryId=%d&depth=%d', rootCategoryId, depth);
        return restClient.get(endpointUrl);
    }
    
    module.create = function (categoryAttributes) {
        return restClient.post('/categories', categoryAttributes);
    }

    module.update = function (categoryId, categoryAttributes) {
        var endpointUrl = util.format('/categories/%d', categoryId);
        return restClient.put(endpointUrl, categoryAttributes);
    }

    module.delete = function (categoryId) {
        var endpointUrl = util.format('/categories/%d', categoryId);
        return restClient.delete(endpointUrl);
    }

    return module;
}
