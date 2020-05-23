const peopleHandler = (req, res, db) => {
    const { name, email, subject, message } = req.body;
    db
        .insert({
            name: name,
            email: email,
            subject: subject,
            message: message})
        .into('people')
        .returning('*')
        .then(person => res.json(person[0]))
        .catch(err => res.status(400).json("Unable to add person"));
};

module.exports = {
    peopleHandler
};