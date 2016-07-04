module.exports = {
  identity: 'message',
  connection: 'postgresql',
  attributes: {
    id: {
      type: 'string',
      primaryKey: true,
      unique: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    text: {
      type: 'string',
      required: true,
    },
    receiverId: {
      type: 'string',
      required: true,
      model: 'user',
    },
    senderId: {
      type: 'string',
      required: true,
      model: 'user',
    },
    migrate: 'safe',
    autoCreatedAt: true,
    autoUpdatedAt: true,
  },
};
