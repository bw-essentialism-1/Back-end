exports.seed = function(knex) {
  return knex('Essentials').insert([
        {name: 'Athletic ability'},
        {name: 'Art and literature'},
        {name: 'Creativity, discovering, or inventing things to make a difference in the world'},
        {name: 'Independence'},
        {name: 'Kindness and generosity'},
        {name: 'Living in the moment'},
        {name: 'Membership in a social group (such as your community, racial group, or school club)'},
        {name: 'Music'},
        {name: 'My community'},
        {name: 'My moral principles'},
        {name: 'Nature and the environment'},
        {name: 'Relationships with friends and family'},
        {name: 'Sense of humor'},
        {name: 'Success in my career'}
      ]);
};