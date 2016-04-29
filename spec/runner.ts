'use strict';

var Jasmine = require('jasmine');
var j = new Jasmine();

j.loadConfigFile('spec/support/jasmine.json');
j.configureDefaultReporter({
    showColors: true
});
j.execute();