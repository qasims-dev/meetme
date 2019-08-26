module.exports = function(app, db) {
  let dao = require("./../dao/usersdao")(db);

  var multer = require("multer");
  var fs = require("fs");
  var path = require("path");
  var fileName = "";
  var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      /* console.log("CURRENT DIRECTORY", __dirname);
      console.log("FILE NAME IN DIR", fileName); */
      cb(null, path.join(__dirname, "../public"));
    },
    filename: function(req, file, cb) {
      //cb(null, Date.now() + "-" + file.originalname);
      cb(null, fileName);
    }
  });
  var upload = multer({ storage: storage }).single("file");

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

  app.delete("/api/users", async (req, resp) => {
    try {
      //console.log("DELETE API");
      //let id = Number(req.params.id);
      let id = req.query.id;
      //console.log("req DELETE:", req);
      /* console.log("ID TO DELETE:", id);
      console.log("IMAGE TO DELETE:", req.query.imageName); */

      fs.unlinkSync(path.join(__dirname, "../public", req.query.imageName));
      await dao.deleteUser(id, function({ error, data }) {
        resp.json(data);
      });
    } catch (e) {
      resp.sendStatus(500);
    }
  });

  app.post("/api/users", async (req, resp) => {
    try {
      //await upload.single(req.body.image);
      //console.log("IN THE API", req.bodydata);
      let filepath = req.body.image;
      // console.log("FILE PATH", filepath);
      let fileext = filepath.slice(((filepath.lastIndexOf(".") - 1) >>> 0) + 2);
      //console.log("FILE EXT", fileext);
      fileName = req.body.email + "." + fileext;
      // console.log("FILE NAME", fileName);
      //console.log(req.body.image);
      req.body.image = fileName;
      await dao.insert(req.body, function({ error, data }) {
        resp.json(data);
      });
    } catch (e) {
      resp.sendStatus(500);
    }
  });

  app.post("/api/usersImage", function(req, res) {
    //console.log("IN THE IMAGE POST API", req);
    upload(req, res, function(err) {
      if (err instanceof multer.MulterError) {
        // console.log(err);
        return res.status(500).json(err);
      } else if (err) {
        //   console.log(err);
        return res.status(500).json(err);
      }
      /* let filepath = req.body.file;
      console.log("FILE PATH", filepath);
      let fileext = filepath.slice(((filepath.lastIndexOf(".") - 1) >>> 0) + 2);
      fileName = req.body.file + "." + fileext;
      console.log("FILE NAME", fileName); */
      /* fs.writeFile("public/userdata.txt", fileName, err => {
        if (err) throw err;
    
        console.log("data saved");
        console.log("FileName", fileName); */
      return res.status(200).send(req.image);
    });
  });

  app.post("/api/getUserimg", (req, res) => {
    // console.log("IMAGE NAME IN API", req.body.imageName);
    var imgf = fs.readFileSync(
      path.resolve(__dirname, "../public/" + req.body.imageName),
      "base64"
    );
    res.send(imgf);
    // res.send(path.resolve(__dirname, "./public/1566462687543-Capture.PNG"));
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
