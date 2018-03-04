var hasOwnPropertyRecursive = function (object, prop) {
    var truth = false;
    if (typeof object !== 'object') {
        return truth;
    } else {
        Object.keys(object).forEach(key => {
            if (key == prop) {
                truth = true;
                return truth;
            } else if (typeof object[key] === 'object') {
                truth = truth || hasOwnPropertyRecursive(object[key], prop);
            }
        });
        return truth;
    } 
};

var hasValueOnPropertyRecursive = function (object, prop) {
    var truth = false;
    if (typeof object !== 'object') {
        return null;
    } else {
        Object.keys(object).forEach(key => {
            console.log(prop, key, prop == key);
            if (key == prop) {
                console.log('here?', object, object[key]);
                return object[key];
            } else if (typeof object[key] === 'object') {
                return hasValueOnPropertyRecursive(object[key], prop);
            }
        });
        return null;
    } 
};

var trailOfKeysHelper = function(object, prop, trail) {
    if (typeof object !== 'object') {
        return trail;
    } else {
        Object.keys(object).forEach(key => {
            if (key == prop) {
                trail.push(object[key]);
                return trail;
            } else (typeof object[key] !== 'object')
                trail.push(key);
                return hasOwnPropertyRecursive(object[key], prop);
        });
        return truth;
    } 
};

var trailOfKeys = function(object, prop) {
    if (typeof object !== 'object') {
        return [];
    } else {
        return trailOfKeysHelper(object, prop, []);
    } 
}

module.exports = {
    hasOwnPropertyRecursive: hasOwnPropertyRecursive,
    hasValueOnPropertyRecursive: hasValueOnPropertyRecursive
};



// TEST SECTION
var object = {
    fuck: 'lol',
    shit: {
        piss: {
            on: {
                my: {
                    tits: 'haha'
                }
            }
        }
    }
}

// var truth = module.exports.hasOwnPropertyRecursive(object, 'tits');
// var falsehood = module.exports.hasOwnPropertyRecursive(object, 'ass');
// var value = module.exports.hasValueOnPropertyRecursive(object, 'tits');
// console.log(truth, falsehood, value);