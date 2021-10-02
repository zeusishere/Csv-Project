const File = require("../models/file");
const csv = require('csv-parser');
const fs = require("fs");
const path = require("path");
module.exports.homePage = async (req, res) => {
    const allFiles = await File.find({});
    res.render("homepage",{files:allFiles});
}
module.exports.uploadFile = (req, res) => {
    File.uploadedFile(req, res, function (err) {
        if (err) {
            console.log("multer error ", err);
        }
       
        File.create({
            name: req.file.originalname
            , filePath: File.filePath + "/" + req.file.filename
        })
        return res.redirect("back");
    })
}
module.exports.viewFile = async (req, res) => {
    let headers = [];
    let dataArray = [];
    // or rather use id here
    let fileId = req.query.fileId;
    console.log(fileId) ;
    let fileObj = await File.findById(fileId);
    await fs.createReadStream(path.join(__dirname, "..", fileObj.filePath))
        .pipe(csv())
        .on('headers', (header_arr) => {

            headers = header_arr;
        })
        .on('data', (row) => {
            // console.log(row) ;
            dataArray.push(row);
        })
        .on('end', () => {
            console.log("csv file successfully processed");
            // console.log(headers);
            // console.log(dataArray)
            res.render("viewFile", {
                headers: headers
                , dataArray: dataArray
            })
        });

}