const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//เติมมาเพื่อให้หน้าบ้านเข้าถึงไฟล์ uploads ได้
app.use('/uploads',express.static('uploads'))

app.use(require('./controllers/PackageController'))
app.use(require('./controllers/MemberController'))
app.use(require('./controllers/ProductController'))
app.use(require('./controllers/ProductImageController'))
app.use(require('./controllers/UserController'))
app.use(require('./controllers/BillSaleController'))
app.use(require('./controllers/StockController'))
app.use(require('./controllers/BankController'))
app.use(require('./controllers/AdminController'))
app.use(require('./controllers/ChangPackageController'))


app.listen(port, () => {
    console.log("listening on port", port);
  });