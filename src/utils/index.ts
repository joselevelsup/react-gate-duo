export const randomId = (length: number) => {
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var randS = "";

	while(length > 0) {
			randS += chars.charAt(Math.floor(Math.random() * chars.length));
			length--;
	}

	return randS;
}
