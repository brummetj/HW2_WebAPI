/**
 * Created by JoshuaBrummet on 2/12/17.
 */

'use strict';

var util = require('util');

//Export Functions to return responses.
module.exports = {
    Gets: Gets,
    Posts: Posts,
    Puts: Puts,
    Deletes: Deletes
};

//accessed at http://localhost:10010/gets?name="yourName"
function Gets(req,res) {

    var First = req.swagger.params.name.value || 'No query name was given';
    res.json({ message: First, description: 'Request for /Gets is successful!', headers: req.headers});

}
//accessed at http://localhost:10010/posts
function Posts(req, res) {
    res.json({success: 1, description: "Request for /Posts is Successful. You have made a request to /Post",
        headers: req.headers, object: req.body});
}

//accessed at http://localhost:10010/puts
function Puts(req, res) {
    res.json({success: 1, description: "Request for /Puts is Successful. You have made a request to /Puts ", headers: req.headers,
        object: req.body});
}

//accessed at http://localhost:10010/deletes
function Deletes(req,res) {
    res.json({success: 1, description: "Request for /Deletes is Successful. You have made a request to /Deletes ", headers: req.headers});
}