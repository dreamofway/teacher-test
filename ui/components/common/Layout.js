import Head from "next/head";
import Header from "./Gnb";
import Footer from "./Footer";
import {useRouter} from "next/router";
// import { useMediaQuery } from "react-responsive";

function Layout(props) {
	const navItems = [
		{
			id: 1,
			title: "교회 소개",
			link: "/info/greeting",
			sub: [
				{
					title: "담임목사 소개",
					link: "/info/greeting",
				},
				{
					title: "예배 안내",
					link: "/info/timetable",
				},
				{
					title: "신앙의 믿음",
					link: "/info/vision",
				},
				{
					title: "섬기는 사람들",
					link: "/info/staff",
				},
				{
					title: "오시는 길",
					link: "/info/location",
				},
			],
		},
		{
			id: 2,
			title: "말씀",
			link: "/worships/sunday",
			sub: [
				{
					title: "주일 예배",
					link: "/worships/sunday",
				},
				{
					title: "수요 예배",
					link: "/worships/wednesday",
				},
				{
					title: "칼럼",
					link: "/worships/column",
				},
			],
		},
		{
			id: 3,
			title: "교회 소식",
			link: "/news/bulletin",
			sub: [
				{
					title: "주보",
					link: "22ㅁㄴㅇ",
				},
				{
					title: "교회 앨범",
					link: "22ㅁㄴㅇ",
				},
				{
					title: "중보기도",
					link: "/news/footer",
				},
			],
		},
		{
			id: 4,
			title: "커뮤니티",
			link: "/community/qt",
			sub: [
				{
					title: "QT나눔",
					link: "/community/qt",
				},
				{
					title: "자유게시판",
					link: "/community/albums",
				},
				{
					title: "성경 Q&A",
					link: "/community/albums",
				},
			],
		},
	];
	const router = useRouter();

	let title = '';
	const content = '우리 교회는 성경적 믿음의 기초가 있는 교회.주님 마음으로 잃어버린 영혼들을 위해 복음을 전하는 교회.세계 선교에 힘쓰는 교회.사랑의 섬김이 있는 교회.';
	if( router.route == '/'){
		title = '메인';
	} else {
		for (const items of navItems) {
			for (const sub_items of items.sub) {
				if(sub_items.link == router.asPath) {
					title = sub_items.title;
				}
			}
		}
	}

	return (
		<>
			<Head>
				<title>은사테스트|강남성서침례교회</title>
				<meta name="description" content={content} />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header navItems={navItems} ></Header>

			{props.children}

			<Footer></Footer>
		</>
	)
};

export default Layout;
