module.exports = function(column) {
    if (!(column in this.options.columnStyles))
        return '';

    return this.options.columnStyles[column];
}
