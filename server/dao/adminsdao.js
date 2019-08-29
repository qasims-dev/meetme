module.exports = function(db) {
  return {
    get(id, cb) {
      db.paramQuery("SELECT * FROM users where id=?", [id], function({
        error,
        data
      }) {
        if (error) cb({ error });
        else if (data.length) cb({ data: data[0] });
        else cb({ data: {} });
      });
    },
    authCheck(email, password, cb) {
      db.paramQuery(
        "SELECT * FROM admins WHERE email = ? AND password = ?",
        [email, password],
        ({ error, data }) => {
          if (error) {
            cb({ error });
          } else {
            if (data.length) {
              cb({ data: data[0] });
            } else {
              cb({ data: {} });
            }
          }
        }
      );
    },
    deleteUser(id, cb) {
      console.log("IN DELETE DAO", id);
      db.paramQuery("DELETE FROM users where id=?", [id], function({
        error,
        data
      }) {
        if (error) cb({ error });
        else if (data.length) cb({ data: data[0] });
        else cb({ data: {} });
      });
    }
  };
};
