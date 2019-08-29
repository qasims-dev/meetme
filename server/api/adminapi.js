module.exports = function(app, db) {
  let dao = require("./../dao/adminsdao")(db);
  var fs = require("fs");
  var path = require("path");
  /* app.get("/api/users/:id", async (req, resp) => {
    try {
      let id = Number(req.params.id);
      await dao.get(id, function({ error, data }) {
        resp.json(data);
      });
    } catch (e) {
      resp.sendStatus(500);
    }
  });*/
  app.delete("/api/admin", async (req, resp) => {
    try {
      //let id = Number(req.params.id);
      let id = req.query.id;
      console.log("DELETE API", id);
      var imageName = "a";
      //console.log("req DELETE:", req);
      /* console.log("ID TO DELETE:", id);
      console.log("IMAGE TO DELETE:", req.query.imageName); */
      await dao.get(id, function({ error, data }) {
        imageName = data.image;
        console.log("IMAGE TO DELETE:", imageName);
        if (imageName !== "admin.png") {
          fs.unlinkSync(path.join(__dirname, "../public", imageName));
        }
      });

      //fs.unlinkSync(path.join(__dirname, "../public", req.query.imageName));

      await dao.deleteUser(id, function({ error, data }) {
        resp.json(data);
      });
    } catch (e) {
      resp.sendStatus(500);
    }
  });

  app.post("/api/admin/auth", async (req, resp) => {
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
