const rootHandler = (req, res, db) => {
    db
        .select('*')
        .from('people')
        .then(users => res.json(users))
        .catch(err=> res.status(400).json("Unable to fetch users"));
};

module.exports = {
    rootHandler
};