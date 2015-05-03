// rndomhack https://gist.github.com/rndomhack/52ce66a99587deff8802
(function() {
    var list, toDragon;
    list = [["bug", "dragon"], ["Bug", "Dragon"], ["バグ", "ドラゴン"], ["ばぐ", "どらごん"], ["ﾊﾞｸﾞ", "ﾄﾞﾗｺﾞﾝ"]];
    (toDragon = function(node) {
        if (node.nodeValue !== null) {
            [].forEach.call(list, function(item) {
                node.nodeValue = node.nodeValue.split(item[0]).join(item[1]);
            });
        }
        [].forEach.call(node.childNodes, function(child) {
            toDragon(child);
        });
    })(document.body);
})();