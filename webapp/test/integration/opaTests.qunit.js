/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"sap/coil/myshop/myshop-frontend/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});