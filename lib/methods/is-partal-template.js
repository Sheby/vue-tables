module.exports = function(column) {
    //check if this column is a template
    if (this.templatesKeys.indexOf(column)==-1)
        return false;

    if(typeof this.options.templates[column]!='object')
        return false;

    return this.options.templates[column].type == 'partial';
}