exports.seed = function (knex) {
  return knex("Essentials").insert([
    { name: "Athletic ability", user_id: 1 },
    { name: "Art and literature", user_id: 1  },
    {
      name:
        "Creativity, discovering, or inventing things to make a difference in the world", user_id: 1 
    },
    { name: "Independence", user_id: 1  },
    { name: "Kindness and generosity", user_id: 1  },
    { name: "Living in the moment", user_id: 1  },
    {
      name:
        "Membership in a social group (such as your community, racial group, or school club)", user_id: 1 
    },
    { name: "Music", user_id: 1  },
    { name: "My community", user_id: 1  },
    { name: "My moral principles", user_id: 1  },
    { name: "Nature and the environment", user_id: 1  },
    { name: "Relationships with friends and family", user_id: 1  },
    { name: "Sense of humor", user_id: 1  },
    { name: "Success in my career", user_id: 1  },
  ]);
};
