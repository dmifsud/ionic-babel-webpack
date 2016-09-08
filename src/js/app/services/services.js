export const StarterService = function() {
  // Might use a resource here that returns a JSON array
  const ben = require('img/ben.png');
  const max = require('img/max.png');
  const adam = require('img/adam.jpg');
  const perry = require('img/perry.png');
  const mike = require('img/mike.png');

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'H Ebejer',
    lastText: 'You coming?',
    face: ben
  }, {
    id: 1,
    name: 'D Stellini',
    lastText: 'Hey, it\'s a me',
    face: max
  }, {
    id: 2,
    name: 'David Mifsud',
    lastText: 'Yo S\'up!!',
    face: adam
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks! What?',
    face: perry
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: mike
  },
  {
    id: 5,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: perry
  }, {
    id: 6,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: mike
  },
  {
    id: 7,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: perry
  }, {
    id: 8,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: mike
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
};
