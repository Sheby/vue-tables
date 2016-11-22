module.exports = function(column) {

   var cssClass = this.sortable(column)?'VueTables__sortable':'';
   var moreClasses = '';

   //apply heading style for this column, if any
   if (column in this.options.headingStyles)
      moreClasses = this.options.headingStyles[column];
   //else apply column style for this column, if any
   else if(column in this.options.columnStyles)
      moreClasses = this.options.columnStyles[column];

   //if both strings are empty return empty string without space to avoid errors
   if(cssClass.length < 1 && moreClasses.length < 1 )
      return '';

   return cssClass + ' ' + moreClasses;
}
