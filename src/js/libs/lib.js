let lib = {
	$: function(selector) {
		return document.querySelector(selector);
	},
	getRandom: function(num1, num2) {
		return num1 + Math.random() * (num2 - num1);
	},
	is_weixin: function() {
		if (strpos($_SERVER['HTTP_USER_AGENT'], 'MicroMessenger') !== false) {
			return true;
		}
		return false;
	}
}
export {
	lib
};