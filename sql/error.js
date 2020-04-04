const handleSQLError = (res, err) => {
  console.log('Error: ', err);
  return res.status(500).send('Error has occured');
}

module.exports = {
  handleSQLError
}