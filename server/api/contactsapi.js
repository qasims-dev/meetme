module.exports = function(app, db) {
  let dao = require("./../dao/contactsdao")(db);

  app.get("/api/contacts", async (req, resp) => {
    try {
      await dao.getAll(({ error, data }) => {
        resp.json(data);
      });
    } catch (e) {
      resp.sendStatus(500);
    }
  });

  app.get("/api/contacts/:id", async (req, resp) => {
    try {
      let id = Number(req.params.id);
      await dao.get(id, function({ error, data }) {
        console.log(data);
        resp.json(data);
      });
    } catch (e) {
      resp.sendStatus(500);
    }
  });

  app.post("/api/contacts", async (req, resp) => {
    try {
      await dao.insert(req.body, function({ error, data }) {
        resp.json(data);
      });
    } catch (e) {
      resp.sendStatus(500);
    }
  });
};
