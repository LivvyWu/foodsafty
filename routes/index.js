var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    var fs_options = [
        "CAS優良農產品",
        "產銷履歷農產品",
        "CAS有機農產品",
        "吉園圃安全蔬果",
        "農產品生產溯源",
        "國產牛肉溯源",
        "雞蛋溯源"
        // "豬肉溯源",
        // "水產品溯源",
        // "不知啥溯源"
    ];

    res.render('index', {title: 'Express',fs_options: fs_options});
});

module.exports = router;

