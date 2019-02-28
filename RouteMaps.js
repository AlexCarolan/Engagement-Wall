var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RouteMapA = function (_React$Component) {
	_inherits(RouteMapA, _React$Component);

	function RouteMapA() {
		_classCallCheck(this, RouteMapA);

		return _possibleConstructorReturn(this, (RouteMapA.__proto__ || Object.getPrototypeOf(RouteMapA)).apply(this, arguments));
	}

	_createClass(RouteMapA, [{
		key: "render",
		value: function render() {
			return React.createElement("iframe", { className: "map", width: "95%", height: "100%", frameBorder: "0", scrolling: "no", marginHeight: "0", marginWidth: "0", sandbox: "allow-scripts allow-same-origin",
				src: "https://onthegomap.com/?m=r&u=km&c%5B%5D=Route+data+%C2%A92019+On+The+Go+Map%2C+OpenStreetMap+Contributors&d=3342&f=d5134631a2&n=1&dm=1&context=embed&r2=sarfAzdXH3H87KD6152EY3Ai18SAW22i1041Q67c1b1G1A864m1o3Qu1Km1a2Y4q2a4Ms1Qw1Y1m22A4o1F44U6W100Gg10ICk17q12s18a12o12A1G2m3Mg34g3BQ0I9K76987A76Z1MBID6BAb147A94n12RAj15P8DC955356T1NAd16H1FAJ1PFD470J2F5t1q176H05800Z1M5Ab16R3B2VKj10B6Z169893B6VKH695D8J058D059DE70B9f15D6981435501633VMD5T8l15X1AL3LHD035B0FF9275NVNBBD70509D71BPj2t1709BH0JHD0D9T5D711DH512NCB492R4RFFj1f175JRJDN3VJJJHh199h1~2Jh19TNX1Fd11DE5AT8HCEG761SLe3~1g3z1o15E1c1I47GX2E9DL5BLNJj1Dn13h16v12X22Z209Bl35LHv1Rb131ERAN8761A3i16_6Pe6b1e4b1a17u1n1GBAD45C7Y2Ko4b1a17U4W2Is20y1r1" });
		}
	}]);

	return RouteMapA;
}(React.Component);

var RouteMapB = function (_React$Component2) {
	_inherits(RouteMapB, _React$Component2);

	function RouteMapB() {
		_classCallCheck(this, RouteMapB);

		return _possibleConstructorReturn(this, (RouteMapB.__proto__ || Object.getPrototypeOf(RouteMapB)).apply(this, arguments));
	}

	_createClass(RouteMapB, [{
		key: "render",
		value: function render() {
			return React.createElement("iframe", { className: "map", width: "95%", height: "100%", frameBorder: "0", scrolling: "no", marginHeight: "0", marginWidth: "0", sandbox: "allow-scripts allow-same-origin",
				src: "https://onthegomap.com/?m=r&u=km&w%5B%5D=Routes+may+not+be+suitable+for+walking.&c%5B%5D=Route+data+%C2%A92019+On+The+Go+Map%2C+OpenStreetMap+Contributors&d=3384&f=0a56b2cbd6&n=1&dm=1&context=embed&r2=eorfAlfWHQ5G35x1X1l245A5I1G9U1CBQ7Ob1AP67G1g15I0W11u1AK1O1GFGX16RAr31t55t2R~4b1KP4r205H198P0B5D0LBX12N9Z11l15X10Z18JED4D1b13H191Z13FVt13P0p1Fj17p1Lj1FDFNfDw5p3q1B494c1e8Ie36i1JE786Qb2_1r20~1HT3~1Gr3UX2JB8369EFCt1o1h5k1d6c1x2CX4Eh15F6789ODS798AFq12G0I0E2a40G2W536784s4C1M3Y14g1SC8Ka1E987g3z26Gm4p3ASA9462Ey4x3IBMDG3g13E1o11i22M0S1q20M2086OCC4261CD47OOq2c2440KSQa2s1W1EW18E080k11q23k1360A00L20m11Y16MAIACGOa16u1K3" });
		}
	}]);

	return RouteMapB;
}(React.Component);

//

var MapHolder = function (_React$Component3) {
	_inherits(MapHolder, _React$Component3);

	function MapHolder(props) {
		_classCallCheck(this, MapHolder);

		var _this3 = _possibleConstructorReturn(this, (MapHolder.__proto__ || Object.getPrototypeOf(MapHolder)).call(this, props));

		_this3.changeMap = _this3.changeMap.bind(_this3);
		_this3.mapType = 'B';
		_this3.state = {
			currentMap: React.createElement(RouteMapB, null)
		};
		return _this3;
	}

	_createClass(MapHolder, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this4 = this;

			this.timerID = setInterval(function () {
				return _this4.changeMap();
			}, 30000);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			clearInterval(this.timerID);
		}

		//Cycle the map to the next one 

	}, {
		key: "changeMap",
		value: function changeMap() {
			var _this5 = this;

			if (this.mapType === 'B') {
				this.setState({
					currentMap: React.createElement(RouteMapA, null)
				});
				this.mapType = 'A';
			} else if (this.mapType === 'A') {
				this.setState({
					currentMap: React.createElement(RouteMapB, null)
				});
				this.mapType = 'B';
			}

			clearInterval(this.timerID);
			this.timerID = setInterval(function () {
				return _this5.changeMap();
			}, 30000);
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ id: "map_holder" },
				this.state.currentMap,
				React.createElement(
					"button",
					{ type: "button", id: "mapButton", onClick: this.changeMap },
					"Next Map"
				)
			);
		}
	}]);

	return MapHolder;
}(React.Component);

ReactDOM.render(React.createElement(MapHolder, null), document.querySelector('#route_map'));