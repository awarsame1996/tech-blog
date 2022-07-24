const renderHomePage = (req, res) => {
	const filePath = path.join(__dirname, '../../../public/index.html');
	return res.sendFile(filePath);
};

module.exports = {
	renderHomePage,
};
