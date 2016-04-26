$ = require('zeptojs'); // $ = require('jquery');
require('light7');

require('../style/app.less');

$.config = {
    autoInit: false
}

var buttons1 = [{
    text: 'title',
    label: true
}, {
        text: 'Tom',
        bold: true,
        color: 'danger',
        onClick: function () {
            $.alert("you choose 'Tom'");
        }
    }, {
        text: 'Bob',
        onClick: function () {
            $.alert("you choose 'Bob'");
        }
    }];
var buttons2 = [{
    text: 'cancel',
    bg: 'danger'
}];
var groups = [buttons1, buttons2];

$.actions(groups);
