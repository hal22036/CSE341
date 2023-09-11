const jeniHales = (req, res) => {
    res.send('Jeni Hales');
};

const bobTest = (req, res) => {
    res.send('Bob Test');
};

const hannahRoute = (req, res) => {
    res.send('Hannah Route');
};

module.exports = {
    jeniHales,
    hannahRoute,
    bobTest
};