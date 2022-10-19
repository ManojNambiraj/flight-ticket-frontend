const express = require("express");
const app = express();
const cors = require("cors");
const bcryptjs = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

let URL =
  "mongodb+srv://admin:admin123@cluster0.cpybg.mongodb.net/?retryWrites=true&w=majority";

function authentication(req, res, next) {
  if (req.headers.authorization) {
    let decode = jsonwebtoken.verify(req.headers.authorization, "poiuytrewq");

    if (decode) {
      next();
    } else {
      res.status(401).json({ message: "Not allowed" });
    }
  } else {
    res.status(401).json({ message: "Not allowed" });
  }
}

app.post("/register", async function (req, res) {
  try {
    // Connect the DB
    let connection = await mongoClient.connect(URL);

    // Select the DB
    let db = connection.db("flight_tickets");

    // Select the collection and Do the operation && Encrypt the password
    let salt = await bcryptjs.genSalt(10);
    let hash = await bcryptjs.hash(req.body.password, salt);
    console.log(hash);

    req.body.password = hash;

    await db.collection("users").insertOne(req.body);

    // Close the Connection
    connection.close();

    res.json({ message: "User Registered" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.post("/login", async function (req, res) {
  try {
    // Connect the DB
    let connection = await mongoClient.connect(URL);

    // Select the DB
    let db = connection.db("flight_tickets");

    // Select the collection and Do operation
    let user = await db.collection("users").findOne({ email: req.body.email });

    if (user) {
      let compare = await bcryptjs.compare(req.body.password, user.password);

      if (compare) {
        let token = jsonwebtoken.sign({ id: user._id }, "poiuytrewq", {
          expiresIn: "1hr",
        });
        res.json({ token });
      } else {
        res.status(401).json({ message: "Incorrect Password" });
      }

      // close the connection
      await connection.close();
    } else {
      res.status(404).json({ message: "User not found" });
    }

    // Close the connection
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running in PORT", 5000);
});
