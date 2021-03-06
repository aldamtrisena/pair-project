'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addConstraint('TransaksiProductUsers', {
      fields: ['ProductId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_productid',
      references: { //Required field
        table: 'Products',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
    .then(() => {
      return queryInterface.addConstraint('TransaksiProductUsers', {
        fields: ['UserId'],
        type: 'foreign key',
        name: 'custom_fkey_constraint_userid',
        references: { //Required field
          table: 'Users',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    })
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     *  queryInterface.dropTable('users');
     */
    return Promise.all([queryInterface.removeConstraint("TransaksiProductUsers","ProductId",{}),queryInterface.removeConstraint("TransaksiProductUsers","UserId",{})])
  }
};
