module.exports = function (baseModel, bookshelf) {
  return baseModel.extend({
    tableName: 'users',
    //roles: function () {
      //return this.belongsToMany('Role');
    //}
  });
};
