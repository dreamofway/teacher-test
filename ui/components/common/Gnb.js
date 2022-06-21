import React, { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import Navigation from './Navigation';

function Gnb({navItems}) {
	const style = { display: "block" };
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
	const isDesktop = useMediaQuery({ minWidth: 769 });
	const [isMMenu, setMMenu] = useState("false");
	const [isGnb, setIsGnb] = useState(false);
	const mmenuClick = (e) => {
		setMMenu(!isMMenu);
	};

	const NaviComponent = () => {
		const [active, setActive] = useState(0);
		return (
			<>
				{navItems.map(({ id, title, link, sub }) => (
					<NaviItemComponent key={title} sub={sub} title={title} link={link} onItemClicked={() => setActive(id)} isActive={active === id} />
				))}
			</>
		);
	};
	const NaviComponent2 = () => {
		const [active, setActive] = useState(0);
		return (
			<>
				{navItems.map(({ id, title, link, sub }) => (
					<NaviItemComponent2 key={title} sub={sub} title={title} link={link} onItemClicked={() => setActive(id)} isActive={active === id} />
				))}
			</>
		);
	};

	const NaviItemComponent2 = ({ id = "", title = "", link = "", sub = [], onItemClicked = () => console.error("You passed no action to the component"), isActive = false }) => {
		const router = useRouter();
		const gnbRouter = router.pathname.substring(1).split('/')
		const gnbLink = link.substring(1).split('/')
		let matched = false;
		for (let idx = 0; idx < gnbRouter.length; idx++) {
			if (gnbRouter[idx] === gnbLink[idx]) {
				matched = true;
				// console.log(gnbLink[idx]);

				break;
			}
		}

		return (
			<>
				<li>
					<a href="#none" className={isActive ? "on" : null} onClick={onItemClicked} title={title} key={id}>
						{title}
					</a>
					<ul className="dep2">
						<li>
							{sub.map((subItem, subIdx) => (
								<a href={subItem.link} title={subItem.title} key={subIdx}>
									{subItem.title}
								</a>
							))}
						</li>
					</ul>
				</li>
			</>
		);
	};


	return (
		<header id="header" className="header" onMouseLeave={() => setIsGnb(false)}>
			<div className="header-wrap">
				<ul className="header--user-list">
					<li>
					</li>
				</ul>

				<nav className="header-menu">
					{/* <h1 className="a11y"> */}
					<h1 className="logo">
						<a href="http://gnbbc.com">
							<img src="/images/logo.png" alt="logo" />
						</a>
					</h1>
					{/* {isDesktop && ( */}
					<ul className="header-menu__item" onMouseEnter={() => setIsGnb(true)}>
						{/* <NaviComponent /> */}
						{/*<Navigation isGnb={isGnb} setIsGnb={setIsGnb} navItems={navItems} />*/}
					</ul>
					{/* )} */}
					{/* mobile */}

					<div className="mobile-menu__screen"></div>
					<nav className={"menu m-header-menu " + (isMMenu ? "menu_slide_up" : "menu_slide_up menu_slide_down")}>
						<ul className="">
							<NaviComponent2 />
							{/* <Navigation /> */}
						</ul>
					</nav>
				</nav>
				<div className={isGnb ? " gnb--hover gnb-sub-wrap" : "  gnb-sub-wrap"}></div>
			</div>
		</header>
	);
}

export default Gnb;
