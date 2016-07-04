const shortid = require('shortid');

module.exports = {
  identity: 'user',
  connection: 'postgresql',
  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      unique: true,
      defaultsTo: function generateShortId() {
        return shortid.generate();
      },
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    first_name: {
      type: 'string',
      required: true,
    },
    last_name: {
      type: 'string',
      required: true,
    },
    received_messages: {
      collection: 'received_messages',
      via: 'receiverId',
      model: 'message',

    },
    sent_messages: {
      collection: 'sent_messages',
      via: 'senderId',
      model: 'message',
    },
  },
};
