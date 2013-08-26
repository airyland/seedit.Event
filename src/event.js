/**
* the simpliest event publisher and subscriber
*
*/
! function($, S) {
	var o = $({}),
		event = {
			on: function() {
				o.on.apply(o, arguments);
			},
			off: function() {
				o.off.apply(o, arguments);
			},
			emit: function() {
				o.trigger.apply(o, arguments);
			}
		};
	// export to seedit
	S.event = event;
}(jQuery, seedit);