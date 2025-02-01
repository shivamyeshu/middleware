const express = require('express');
const app = express();

const port = 3000; // port number

// middleware
function isOldEnough(req,res,next){
    if(req.query.age>=18){
        next();
    }
    else{
        res.send('You are not old enough');
    }
}

// app.use(isOldEnough);

// route handler  
app.get('/', isOldEnough,(req, res,next) => {
    res.send('you are forward to teh next page coz you are old enough');
    next();
    }
);

app.get('/ride2', isOldEnough,(req, res) => {
    res.send('you are old enough to ride 2 ');
    }
);



// server listening on port 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);