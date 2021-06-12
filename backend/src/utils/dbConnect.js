require('dotenv').config();

const dbConnect = () => {
    return `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.3ejbw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
};

module.exports = dbConnect;
