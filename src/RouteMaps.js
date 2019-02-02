

 class RouteMapA extends React.Component {	

  	render() {
  		return (<iframe className="map" width="95%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" sandbox="allow-scripts allow-same-origin"
  		 src="https://onthegomap.com/?m=r&amp;u=km&amp;c%5B%5D=Route+data+%C2%A92019+On+The+Go+Map%2C+OpenStreetMap+Contributors&amp;d=3342&amp;f=d5134631a2&amp;n=1&amp;dm=1&amp;context=embed&amp;r2=sarfAzdXH3H87KD6152EY3Ai18SAW22i1041Q67c1b1G1A864m1o3Qu1Km1a2Y4q2a4Ms1Qw1Y1m22A4o1F44U6W100Gg10ICk17q12s18a12o12A1G2m3Mg34g3BQ0I9K76987A76Z1MBID6BAb147A94n12RAj15P8DC955356T1NAd16H1FAJ1PFD470J2F5t1q176H05800Z1M5Ab16R3B2VKj10B6Z169893B6VKH695D8J058D059DE70B9f15D6981435501633VMD5T8l15X1AL3LHD035B0FF9275NVNBBD70509D71BPj2t1709BH0JHD0D9T5D711DH512NCB492R4RFFj1f175JRJDN3VJJJHh199h1~2Jh19TNX1Fd11DE5AT8HCEG761SLe3~1g3z1o15E1c1I47GX2E9DL5BLNJj1Dn13h16v12X22Z209Bl35LHv1Rb131ERAN8761A3i16_6Pe6b1e4b1a17u1n1GBAD45C7Y2Ko4b1a17U4W2Is20y1r1">
  		 </iframe>);
  	}

}

class RouteMapB extends React.Component {
  	
  	render() {
  		return (<iframe className="map" width="95%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" sandbox="allow-scripts allow-same-origin"
  			src="https://onthegomap.com/?m=r&amp;u=km&amp;w%5B%5D=Routes+may+not+be+suitable+for+walking.&amp;c%5B%5D=Route+data+%C2%A92019+On+The+Go+Map%2C+OpenStreetMap+Contributors&amp;d=3384&amp;f=0a56b2cbd6&amp;n=1&amp;dm=1&amp;context=embed&amp;r2=eorfAlfWHQ5G35x1X1l245A5I1G9U1CBQ7Ob1AP67G1g15I0W11u1AK1O1GFGX16RAr31t55t2R~4b1KP4r205H198P0B5D0LBX12N9Z11l15X10Z18JED4D1b13H191Z13FVt13P0p1Fj17p1Lj1FDFNfDw5p3q1B494c1e8Ie36i1JE786Qb2_1r20~1HT3~1Gr3UX2JB8369EFCt1o1h5k1d6c1x2CX4Eh15F6789ODS798AFq12G0I0E2a40G2W536784s4C1M3Y14g1SC8Ka1E987g3z26Gm4p3ASA9462Ey4x3IBMDG3g13E1o11i22M0S1q20M2086OCC4261CD47OOq2c2440KSQa2s1W1EW18E080k11q23k1360A00L20m11Y16MAIACGOa16u1K3">
  			</iframe>);
  	}

}

//

class MapHolder extends React.Component {

	constructor(props) {
        super(props);
    
		this.mapType = 'B';
		this.state = {
			currentMap : <RouteMapB />
		}
    }

	componentDidMount() {
		this.timerID = setInterval(
	  		() => this.changeMap(),
	  		5000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	//Cycle the map to the next one 
	changeMap() {
		if (this.mapType === 'B'){
			this.setState({
				currentMap : <RouteMapA />
			});
			this.mapType = 'A';
		} else if (this.mapType === 'A') {
			this.setState({
				currentMap : <RouteMapB />
			});
			this.mapType = 'B';
		}
	}

	render() {
		return(this.state.currentMap);
	}
}



ReactDOM.render(<MapHolder />, document.querySelector('#route_map'));

