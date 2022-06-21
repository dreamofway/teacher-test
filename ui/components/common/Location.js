import React from 'react';
import Head from "next/head";

function Location() {
	return (
		<>
			<section className="worship-area">
				<h1 className="worship-area__tit">오시는 길</h1>
				<p className="worship-area__sub">LOCATION</p>
				<p className="txt_map">
					서울시 서초구 강남대로 55길 9-11 시원빌딩 9층<br />
				</p>

				<div className="map">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.551063650305!2d127.03023502673203!3d37.494919144725614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15af2cf9b17%3A0xd1ccf1ba8e2f15a0!2z7ISc7Jq47Yq567OE7IucIOyEnOy0iOq1rCDshJzstIjrj5kg6rCV64Ko64yA66GcNTXquLggOS0xNQ!5e0!3m2!1sko!2skr!4v1550311604178" height="450" width="100%" frameBorder="0" allowFullScreen></iframe>
				</div>
			</section>

		</>
	)
}

export default Location;