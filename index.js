var express = require("express");
var mammoth = require('mammoth');
const app = express();
var multer = require('multer');
var upload = multer({ dest: 'upload_docs/' });

app.use(express.static('./public'));


app.post("/upload-file", upload.single("docx"), (req, res) => {
    mammoth.convertToHtml({ path: "upload_docs/" + req.file.filename }).then(result => {
        res.send(result.value);
    }).done();
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log("listening port: " + PORT);
});
