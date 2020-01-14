'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerSchema extends Schema {
  up () {
    this.create('customers', (table) => {
      table.increments()
      table.timestamps()
      table.string('name', [255])
      table.text('description')
     


    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomerSchema
