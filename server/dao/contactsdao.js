module.exports = function(db) {
  return {
    getAll(cb) {
      db.query("SELECT * FROM contacts", cb);
    },
    get(id, cb) {
      db.paramQuery(
        "select u.* from contacts c, users u where u.id=contactId and profileId=?",
        [id],
        function({ error, data }) {
          if (error) cb({ error });
          else if (data.length) cb({ data: data });
          else cb({ data: {} });
        }
      );
    },

    insert(contact, cb) {
      console.log("IN CONTACTS DATA BASE", contact);
      db.paramQuery(
        "INSERT INTO contacts SET ?",
        contact,
        ({ error, data }) => {
          if (error) {
            cb({ error });
          } else {
            this.get(data.insertId, cb);
          }
        }
      );
    }
  };
};
