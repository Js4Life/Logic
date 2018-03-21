function callAndApply() {
	console.log(Math.max.apply(null,[1,2,3]));
}
// Apply accepts array of function Arguments
callAndApply();