define([
	"./Color",
	"./_names"
],function(Color,_names){
	var named = {};

	for (var name in _names) {
		named[name] = new Color(_names[name]);
	}

	return Color.named = named;
});