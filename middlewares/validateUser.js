const validateInfo = (req, res next) => {
const { diplayName, email, password } = req.body
	if( diplayName.length < 8 && diplayName !== 'string') {
		res.status().json({ message:'A senha deve conter no mínimo 8 caracters'})
	}
};