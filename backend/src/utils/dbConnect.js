require('dotenv').config();

console.log(process.env.DBUSER);

const dbConnect = () => {
    return `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.3ejbw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
};

module.exports = dbConnect;
