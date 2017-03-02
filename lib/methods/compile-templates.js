module.exports = function () {
    for (var i = 0; i < this.$els.table.childNodes.length; i++) {
        if (this.$els.table.childNodes[i].nodeName == 'TBODY')
            this.$compile(this.$els.table.childNodes[i]);
    }
}