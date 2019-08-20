module.exports = function(app, db) {
  let dao = require("./../dao/usersdao")(db);

  app.get("/api/users", async (req, resp) => {
    try {
      await dao.getAll(({ error, data }) => {
        resp.json(data);
      });
    } catch (e) {
      resp.sendStatus(500);
    }
  });

  app.get("/api/users/:id", async (req, resp) => {
    try {
      let id = Number(req.params.id);
      await dao.get(id, function({ error, data }) {
        resp.json(data);
      });
    } catch (e) {
      resp.sendStatus(500);
    }
  });

  app.delete("/api/users/:id", async (req, resp) => {
    try {
      console.log("DELETE API");
      let id = Number(req.params.id);
      await dao.deleteUser(id, function({ error, data }) {
        resp.json(data);
      });
    } catch (e) {
      resp.sendStatus(500);
    }
  });

  app.post("/api/users", async (req, resp) => {
    try {
      await dao.insert(req.body, function({ error, data }) {
        resp.json(data);
      });
    } catch (e) {
      resp.sendStatus(500);
    }
  });

  app.put("/api/users", async (req, resp) => {
    try {
      await dao.updateUser(req.body, function({ error, data }) {
        resp.json(data);
      });
    } catch (e) {
      resp.sendStatus(500);
    }
  });

  app.post("/api/users/auth", async (req, resp) => {
    //IMPLEMENT IS ACTIVE ALSO
    try {
      await dao.authCheck(req.body.email, req.body.password, function({
        error,
        data
      }) {
        if (Object.getOwnPropertyNames(data).length !== 0) {
          resp.send({ id: data.id });
        } else {
          resp.send({ id: 0 });
        }
      });
    } catch (e) {
      resp.sendStatus(500);
    }
  });
};
