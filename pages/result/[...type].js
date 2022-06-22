import {Container, Card, Grid, Text, Spacer, Col} from "@nextui-org/react";
import {SSRProvider} from '@react-aria/ssr';
import React, { useState, useRef, useEffect } from "react";
import {useRouter} from "next/router";

export default ()=>{
    const router = useRouter();    
    let [list, setList] = useState([]);
    const teacher_types = {
        '1': {title: '예언',desciption: '하나님이 행하실 일들을 성경을 통하여 말씀하심', img: '/images/1.jpg'},
        '2': {title: '목자',desciption: '목사라고 한다.믿음이 연약한 양육 양육하며 돌보아 줌', img: '/images/2.jpg'},
        '3': {title: '가르침',desciption: '교사로서 하나님 말씀을 알기 쉽게 잘 가르쳐 줌', img: '/images/3.jpg'},
        '4': {title: '지혜',desciption: '하나님의 뜻과 말씀의 뜻을 잘 깨닫고 알아 지혜롭게 행함', img: '/images/4.jpg'},
        '5': {title: '지식',desciption: '하나님의 말씀을 상황에 맞도록 적용하는 능력', img: '/images/5.jpg'},
        '6': {title: '권위',desciption: '권면하고 격려해 주고 위로해 줌', img: '/images/6.jpg'},
        '7': {title: '영분별',desciption: '하나님의 뜻, 사탄의 역사, 인간의 소리를 구분할 수 있는 능력', img: '/images/7.jpg'},
        '8': {title: '구제',desciption: '주님을 위해 그리고 가난한 이들을 위해 물질로 헌신함', img: '/images/8.jpg'},
        '9': {title: '도움',desciption: '도움이 필요한 사람들에게 아낌없이 여러가지를 도와줌', img: '/images/9.jpg'},
        '10': {title: '자비(긍휼)',desciption: '타인의 아픔과 고통 혹은 형편을 내 일처럼 여겨줌', img: '/images/10.jpg'},
        '11': {title: '선교',desciption: '타 문화권 곧 외국과 외국인에게 복음을 증거 함', img: '/images/11.jpg'},
        '12': {title: '전도',desciption: '사람들에게 예수님을 증거 함', img: '/images/12.jpg'},
        '13': {title: '손님대접',desciption: '음식과 집 혹은 여러가지로 손님 대접하는 것을 기쁘게 함', img: '/images/13.jpg'},
        '14': {title: '믿음',desciption: '하나님과 하나님이 행하시는 일에 대하여 특별한 확신을 가짐', img: '/images/14.jpg'},
        '15': {title: '지도자',desciption: '그룹을 지도하고 인도하는 일에 리더십을 가짐', img: '/images/15.jpg'},
        '16': {title: '다스림',desciption: '교회 일을 계획하고 진행하는 일을 잘 감당 함', img: '/images/16.jpg'},
        '17': {title: '기적',desciption: '자연법칙이나 질서를 초월하여 능력을 행하므로 하나님께 영광돌림', img: '/images/17.jpg'},
        '18': {title: '신유',desciption: '기도함으로 질병을 치유함', img: '/images/18.jpg'},
        '19': {title: '방언',desciption: '배우지 않은 특별한 언어로 기도함', img: '/images/19.jpg'},
        '20': {title: '통변',desciption: '방언 기도의 내용을 통역 함', img: '/images/20.jpg'},
        '21': {title: '겸손(수준을 낮춤)',desciption: '예수님처럼 자신의 안락과 권리를 포기하고 낮아짐', img: '/images/21.jpg'},
        '22': {title: '독신',desciption: '성적 시험 없이 홀로 사는 것을 즐기며 주를 위하여 일을 함', img: '/images/22.jpg'},
        '23': {title: '중보(기도)',desciption: '자신을 위한 기도는 물론 중보기돌르 즐겨함', img: '/images/23.jpg'},
        '24': {title: '축귀',desciption: '귀신 들린 사람들이나 악한 영들의 역사를 담대하게 쫓아냄', img: '/images/24.jpg'},
        '25': {title: '섬김',desciption: '헌신된 마음으로 필요가 무엇인지 알고 기쁨으로 봉사를 함', img: '/images/25.jpg'},
    }
    useEffect(()=>{
        if(router.query.hasOwnProperty('type')) {
            setList(router.query.type.map((item)=>{
                return {
                    id: item.split('-')[0],
                    point: item.split('-')[1],
                }; 
            }));
        }
        
    }, [router.query]);

    function MakeResultList({list}){
        return list.map(item=><SetCardDom type_object={teacher_types[item.id]} point={item.point} key={item.id} />);
    }

    function SetCardDom({type_object, point}) {
        return (
            <Grid xs={12} sm={4} >
                <Card >
                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                        <Col>
                            <Text size={20} weight="bold" transform="uppercase" color="#ffffffAA">
                                {type_object.title} ({point}점)
                            </Text>
                            <Text color="white" size={46} css={{pr: '20px'}} >
                                {type_object.desciption}
                            </Text>
                        </Col>
                    </Card.Header>
                    <Card.Image
                        src={type_object.img}
                        objectFit="cover"
                        width="100%"
                        height={340}
                        alt={type_object.title}
                    />
                </Card>
            </Grid>
        )
    }
    
    return (
        <div className="content">
            <Card css={{ mw: "100%", $$cardColor: '$colors$gradient', mt: '15%', mb: '10px' }}>
                <Card.Body>
                    <Text>합계 점수가 높은 순으로 나열되었습니다. <br/>높은 점수가 당신의 은사입니다.</Text>
                </Card.Body>
            </Card>
            <Container css={{pr: '0px', pl: '0px'}} >
                <Grid.Container gap={2} justify="left" >
                    <SSRProvider>
                        <MakeResultList list={list} />
                    </SSRProvider>
                </Grid.Container>
            </Container>
            <Spacer y={0.5} />
        </div>
    )
}