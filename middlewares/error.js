const error = (err, _req, res, _next) => {
  if (err.code) {
    return res.status(err.code).json({ message: err.message });
  }
  return res.status(500).json({ message: 'algo de errado não está certo' });
};

module.exports = { error };