
class RouteMap extends React.Component {
  	
  	render() {
  		return (<iframe id="map" width="95%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" sandbox="allow-scripts allow-same-origin"
  		 src="https://onthegomap.com/?m=r&amp;u=km&amp;c%5B%5D=Route+data+%C2%A92019+On+The+Go+Map%2C+OpenStreetMap+Contributors&amp;d=3342&amp;f=d5134631a2&amp;n=1&amp;dm=1&amp;context=embed&amp;r2=sarfAzdXH3H87KD6152EY3Ai18SAW22i1041Q67c1b1G1A864m1o3Qu1Km1a2Y4q2a4Ms1Qw1Y1m22A4o1F44U6W100Gg10ICk17q12s18a12o12A1G2m3Mg34g3BQ0I9K76987A76Z1MBID6BAb147A94n12RAj15P8DC955356T1NAd16H1FAJ1PFD470J2F5t1q176H05800Z1M5Ab16R3B2VKj10B6Z169893B6VKH695D8J058D059DE70B9f15D6981435501633VMD5T8l15X1AL3LHD035B0FF9275NVNBBD70509D71BPj2t1709BH0JHD0D9T5D711DH512NCB492R4RFFj1f175JRJDN3VJJJHh199h1~2Jh19TNX1Fd11DE5AT8HCEG761SLe3~1g3z1o15E1c1I47GX2E9DL5BLNJj1Dn13h16v12X22Z209Bl35LHv1Rb131ERAN8761A3i16_6Pe6b1e4b1a17u1n1GBAD45C7Y2Ko4b1a17U4W2Is20y1r1">
  		 </iframe>);
  	}

}

ReactDOM.render(<RouteMap />, document.querySelector('#route_map'));

