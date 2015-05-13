function get_my_serialized_obj(data) {
	return crypto.createHash('md5').update(data).digest('hex');
}
