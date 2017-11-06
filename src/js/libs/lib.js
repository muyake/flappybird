let lib = {
	$: function(selector) {
		return document.querySelector(selector);
	},
	getRandom: function(num1, num2) {
		return num1 + Math.random() * (num2 - num1);
	}
}
export {
	lib
};