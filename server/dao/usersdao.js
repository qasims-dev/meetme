module.exports = function (db) {
    return {
        getAll(cb) {
            db.query("SELECT * FROM users", cb);
        },

        get(id, cb) {
            db.paramQuery("SELECT * FROM users where id=?", [id],
                function ({ error, data }) {
                    if (error) cb({ error });
                    else if (data.length) cb({ data: data[0] });
                    else cb({ data: {} });
                });
        },

        insert(user, cb) {

            db.paramQuery("INSERT INTO users SET ?", user, ({ error, data }) => {

                if (error) {
                    cb({ error });
                }
                else {
                    this.get(data.insertId, cb);
                }
            });
        },

        authCheck(email, password, cb) {

            db.paramQuery('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], ({ error, data }) => {



                if (error) {
                    cb({ error });
                }

                else {
                    if (data.length) {
                        cb({ data: data[0] });
                    }
                    else {
                        cb({ data: {} });
                    }
                }
            });
        }






    }
}