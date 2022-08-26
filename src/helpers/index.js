const isEqualTo = (data, equalToString) => {
	return data === equalToString;
};

const formatDate = (date) => {
	const dateObject = new Date(date);
	const formatedDate = dateObject.toDateString();
	return formatedDate;
};

module.exports = {
	isEqualTo,
	formatDate,
};
