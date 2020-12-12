// (function() {
// 	var u = uni.getSystemInfoSync().platform,
// 		w = uni.getSystemInfoSync().windowWidth ;
// 	if (!u.match(/AppleWebKit.*Mobile.*/) || u.indexOf('iPad') > -1) {
// 		uni.getSystemInfoSync().windowWidth  = 750 * (w / 1624);
// 		uni.onload = function() {
// 			uni.getSystemInfoSync().windowWidth  = w;
// 		}
// 	}
// })();
