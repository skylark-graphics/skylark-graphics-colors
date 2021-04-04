define([
	"./colors",
	"./Color",
	"./_names"
],function(
	Color,
	parse,
	_names
){
	var named = {};

	for (var name in _names) {
		named[name] = Color.parse(_names[name]);
	}

	return colors.named = named;
});