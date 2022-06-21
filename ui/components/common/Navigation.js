import { useRouter } from 'next/router';
import { useState } from 'react';

import { useMediaQuery } from "react-responsive";

function Navigation({ isGnb, setIsGnb, navItems }) {
	const [active, setActive] = useState(0);
	const isDesktop = useMediaQuery({ minWidth: 769 });

	console.error('Navigation');

	// const [isGnb, setIsGnb] = useState(false);
	return (
		<>
			{/* {isDesktop && ( */}
			{/* <ul className="header-menu__item" onMouseEnter={() => setIsGnb(true)}> */}
			{navItems.map(({ id, title, link, sub }) => (
				<NaviItemComponent key={title} sub={sub} title={title} link={link} onItemClicked={() => setActive(id)} isActive={active === id} isGnb={isGnb} />
			))}
			{/* </ul> */}
			{/* )} */}
		</>
	);

}



const NaviItemComponent = ({ id = "", title = "", link = "", sub = [], onItemClicked = () => console.error("You passed no action to the component"), isActive = false, isGnb = { isGnb } }) => {
	const router = useRouter();
	const gnbRouter = router.pathname.substring(1).split('/')
	const gnbLink = link.substring(1).split('/')
	let matched = false;


	const [isMMenu, setMMenu] = useState("false");
	// const [isGnb, setIsGnb] = useState(false);
	console.log(isGnb)
	const mmenuClick = (e) => {
		setMMenu(!isMMenu);
	};

	for (let idx = 0; idx < gnbRouter.length; idx++) {
		if (gnbRouter[idx] === gnbLink[idx]) {
			matched = true;
			// console.log(gnbLink[idx]);

			break;
		}
	}
	return (
		<>
			<li className={`${(link === router.pathname) || matched ? 'on' : ''}`}>
				{/* <a href={link} className="menu" key={id} style={{color: link === router.pathname ? 'red':'yellow'}}> */}
				<a href={link} className={`menu`} key={id}>
					{/* <a href={link} className="menu" key={id} style={{color: gnbLink == gnbRouter ? 'red':'blue'}}> */}
					{title}
				</a>

				<ul className="header-submenu" style={{ display: isGnb ? "block" : "none" }}>
					{sub.map((subItem, subIdx) => (
						<li className={`${subItem.link === router.pathname ? 'on' : ''}`} key={subIdx}>
							<a href={subItem.link} title={subItem.title}>
								{subItem.title}
							</a>
						</li>
					))}
				</ul>
			</li>
		</>
	);
};

export default Navigation;