import {useTheme, Container, Card, Grid, Button, Row, Text, Spacer, Radio} from "@nextui-org/react";
import {SSRProvider} from '@react-aria/ssr';
import RadioComponent from '../ui/components/radio';
import {useRouter} from 'next/router'

export default ()=>{
    const router = useRouter();
    let test_points = [];

    function AddAsks() {
        const asks = {
            '1' : {text: '하나님께 받은 은혜의 말씀으로 타인을 위로하고 격려하고 나누길 좋아한다.'},
            '2' : {text: '영적 성장과 위로 혹은 회복을 위한 그룹과 관계를 가지고 섬기는 일을 좋아한다.'},
            '3' : {text: '성경의 진리를 타인에게 잘 설명해 주거나 가르쳐준다.'},
            '4' : {text: '성경말씀으로 여러가지 상황에 맞도록 잘 적응하면서 신앙생활을 한다.'},
            '5' : {text: '사람들이 내가 성경의 핵심과 중요한 내용을 잘 파악해 주어 도움이 된다고 말한다.'},
            '6' : {text: '어렵고, 실망하고, 곤경에 빠져있는 사람들을 잘 위로해 준다.'},
            '7' : {text: '진리와 비진리를 잘 분별 할 줄 안다.'},
            '8' : {text: '주님의 일을 위해 쓰임받기 위해서 돈 관리를 잘하고 있다.'},
            '9' : {text: '주의 종들이 일을 잘 할 수 있도록 섬기고 돕는다.'},
            '10' : {text: '육체적, 정신적이 어려움을 가진 사람들과 함께 일하길 좋아한다.'},
            '11' : {text: '나는 외국인과 타 문화권에 잘 적응한다.'},
            '12' : {text: '타인이 예수님을 믿고 영접할 수 있도록 도와준다.'},
            '13' : {text: '나는 처음 만나는 사람과 격의없이 잘 지내며 대접하는 것을 좋아한다.'},
            '14' : {text: '그룹 안에서 비전과 방향을 결정하는데 중요한 역할을 한다.'},
            '15' : {text: '내가 말하면, 사람들은 주의 깊게 듣고 동의한다.'},
            '16' : {text: '그룹의 조직이나 계획이 부실할 때 그것을 바로 잡으려 한다.'},
            '17' : {text: '기도 응답 믿음의 능력과 기적들이 체험된다.'},
            '18' : {text: '예수님의 이름으로 병을 고치거나 내 병이 낫는다.'},
            '19' : {text: '방언을 한다.'},
            '20' : {text: '방언을 통역할 수 있다.'},
            '21' : {text: '가난한 이들을 위하여 나의 안락함을 포기 할 때가 있다.'},
            '22' : {text: '나는 독신이며 독신 생활을 즐긴다.'},
            '23' : {text: '나는 매일 최소한 한 시간씩 기도한다.'},
            '24' : {text: '예수의 이름으로 사탄을 대적하면 악한 영들이 순종을 한다.'},
            '25' : {text: '교회에서 특별한 사역 감당하는 것을 좋아한다.'},
            '26' : {text: '하나님께서 미래에 될 일에 대하여 보여주신다.'},
            '27' : {text: '크리스천 그룹이나 교회에서 책임 맡는 것을 좋아한다.'},
            '28' : {text: '신약성경의 내용을 잘 이해하고 설명할 수 있다.'},
            '29' : {text: '복잡한 문제들을 잘 해결 할 수 있다.'},
            '30' : {text: '타인들이 하나님께 가까이 가도록 도울 수 있는 말씀의 통찰력이 있다.'},
            '31' : {text: '사람들이 필요한 사역에 동참할 수 있도록 동기 부여를 할 수 있다.'},
            '32' : {text: '성도들과 함께 하고 계신 성령님을 볼 수 있다.'},
            '33' : {text: '십일조 외에 주님의 사역을 위하여 헌금을 드리고 있다.'},
            '34' : {text: '나는 교회사역을 효과적으로 하는데 도움이 된다는 말을 듣는다.'},
            '35' : {text: '물질적, 육체적 필요를 가지고 있는 사람을 돌봐준다.'},
            '36' : {text: '타 문화권에서 혹은 외국인 사역을 하기 위하여 언어를 배운다.'},
            '37' : {text: '믿지 않는 사람들에게 구원받고 변환된 간증을 즐겁게 이야기 한다.'},
            '38' : {text: '교회나 사회에서 어떤 일의 책임 맡는 것을 좋아한다.'},
            '39' : {text: '하나님은 불가능한 일도 가능케 하실 수 있다고 믿는다.'},
            '40' : {text: '나는 신임이 두터워서 타인들이 내 지도력에 순응해 준다.'},
            '41' : {text: '효과적인 사역을 위한 아이디어, 인력, 자료 시간을 즐겁게 운용한다.'},
            '42' : {text: '하나님은 이적(기적)이나 기사(사실을 알림)를 행하게 하시곤 했다.'},
            '43' : {text: '하나님의 치료를 믿기 때문에 병자를 위한 기도록 한다.'},
            '44' : {text: '배워보지 못한 언어로 사람들에게 하난미이 주신 메시지를 말해준다.'},
            '45' : {text: '방언을 통역하므로 그리스도의 몸인 교회를 영화롭게 하며 성도를 안위한다.'},
            '46' : {text: '단순하게 사는 것이 자신에게 흥미 있는 도전이 된다.'},
            '47' : {text: '결혼에 대하여 관심이 많지 않다.'},
            '48' : {text: '타인이 중보기도를 요청할 때 반드시 기도해준다.'},
            '49' : {text: '사단이 하는 큰 소리를 분명히 들을 수 있다.'},
            '50' : {text: '다양하고 특별한 기술은 없지만 교회가 필요로 하면 기꺼이 봉사한다.'},
            '51' : {text: '하나님께서 주신 말씀을 다른 사람들과 적절한 시기에 나눈다.'},
            '52' : {text: '크리스천 그룹에서 영적인 가이드나 방향제시를 해준다.'},
            '53' : {text: '성경 공부하는 일에 시간을 많이 사용하며 타인과 영적인 교제를 한다.'},
            '54' : {text: '어떤 사람이 어려움을 당했을 때 종종 성경적인 해결 방법을 제시해 준다.'},
            '55' : {text: '연구나 경험ㅇ르 통해서 하나님이 사용하시는 주요 정책이나 기술을 인식할 수 있다.'},
            '56' : {text: '어려움이나 고통 가운데 있던 사람들이 찾아와서 도움과, 치료와 위로가 되었다고 한다.'},
            '57' : {text: '사탄에게 고통을 당하고 있는 사람에게 확신을 가지고 담대하고 선포할 수 있다.'},
            '58' : {text: '사역을 위해 헌금을 해야 한다고 겴힘을 하면 그 필요한 돈이 생긴다.'},
            '59' : {text: '다른 사람들이 더 효과적인 사역을 감당하고 나는 사소한 일 하는 것을 즐긴다.'},
            '60' : {text: '병원이나 양로원 심방을 좋아하며 이런 사역은 잘 해야 한다고 생각된다.'},
            '61' : {text: '외국인들에게 관심이 많으며 그들과 교제를 잘한다.'},
            '62' : {text: '불신자들이 함께 어울리기를 좋아하며 그들에게 예수님을 분명하게 증거한다.'},
            '63' : {text: '사람들이 우리 집에 오면 편안하다고 말한다.'},
            '64' : {text: '사람들이 불가능하다고 생각하는 것도 이룰 수 있는 믿음을 가졌다고 한다.'},
            '65' : {text: '내가 목표를 세우면 다른 사람들은 즉시 동의 한다.'},
            '66' : {text: '내가 목표를 수행하기 위해 효과적이고 효율적인 계획을 세울 수 있다.'},
            '67' : {text: '하나님은 규칙적으로 내 인생에서 불가능해 보이는 일을 행하셨다.'},
            '68' : {text: '사람들은 내 사역을 통해서 하나님이 자신들의 정서적 문제를 치유하였다고 말한다.'},
            '69' : {text: '나는 배워보지 못한 언어로 하나님께 기도 할 수 있다.'},
            '70' : {text: '어떤 사람이 방언을 할 때 통역을 할 수 있게 해달라고 기도한다.'},
            '71' : {text: '나는 가난하지 않지만 가난한 이들을 위하여 그들의 자리에 앉을 수 있다.'},
            '72' : {text: '나는 독신이기 때문에 하나님을 위해서 더 많이 봉사할 수 있어서 좋다.'},
            '73' : {text: '중보기도 하는 시간을 좋아한다.'},
            '74' : {text: '사람들은 귀신들린 것 같다는 의심을 갖게 되면 나를 찾아온다.'},
            '75' : {text: '사람들은 내가 작은 일도 즐기면서 성실하게 한다고 말한다.'},
            '76' : {text: '나는 가끔 어떤 특별한 상황에 대하여 하나님께서 강하게 말씀하심을 느낀다.'},
            '77' : {text: '신자들에게 성경으로 가이드 해주고 함께 기도하므로 그들을 돕는다.'},
            '78' : {text: '타인에게 말씀을 가르치고 나눔으로 그들의 지식과 태도, 가치관과 행동에 변화가 있다.'},
            '79' : {text: '성경 말씀을 적재적소에서 정확하게 적용할 수 있다.'},
            '80' : {text: '성경의 진리를 더 배우기 위해 성경을 읽고 연고한다.'},
            '81' : {text: '범죄인과 술이나 마약에 중독된 사람들을 상담할 수 있다.'},
            '82' : {text: '가르침이 하나님께로부터 온 것인지 아니면 사탄이나 인간의 지식인지 분별할 수도 있다.'},
            '83' : {text: '내가 하나님께 희생을 드렸으므로 하나님은 내 필요를 채우시리라 믿는다.'},
            '84' : {text: '이름도 빛도 없이 사람들을 섬기고 돕는 일이 즐겁다.'},
            '85' : {text: '사람들은 불행한 사람을 돕기 위하여 나를 찾아온다.'},
            '86' : {text: '나의 안락한 환경을 주님과 그리고 타인과 나누기 위해 포기할 수 있다.'},
            '87' : {text: '불신자들에게 복음을 잘 증거하지 못하는 것을 보면 실망스럽다.'},
            '88' : {text: '사람들은 내가 아주 친절하고 호의가 많은 사람이라고 말한다.'},
            '89' : {text: '타인은 의심해도 나는 하나님의 특별한 일을 위해 큰 뜻이 내게 있음을 믿는다.'},
            '90' : {text: '내가 그룹에 들어가면 다른 사람들은 내가 리더가 되길 기대한다.'},
            '91' : {text: '타인을 설득하지 않아도 이무 완수를 위해 그들에게 방향을 제시해 줄 수 있다.'},
            '92' : {text: '하나님은 삶의 과정과 환경에서 나를 초자연적 일을 행하는 도구로 쓰신다.'},
            '93' : {text: '다른 사람의 병이 낫기를 위하여 기도한다.'},
            '94' : {text: '방언으로 메시지를 선포할 때 그 내용이 통역 되었으며 좋겠다고 생각한다.'},
            '95' : {text: '다른 사람에게 덕이 되도록 방언을 통변할 수 있다.'},
            '96' : {text: '교회 사역을 위하여 물질적으로 많이 헌신했다.'},
            '97' : {text: '독신이지만 성적 욕구를 통제하는데 가끔 어려움이 있다.'},
            '98' : {text: '내가 하는 중보기도가 분명하게 응답되는 경우가 있다.'},
            '99' : {text: '사탄에게 눌려 있는 사람을 위해 기도해 주면 사탄이 떠나간다.'},
            '100' : {text: '나는 앉아서 일하는 것보다 밖에서 활동하는 것이 더 좋다.'},
        };

        let add_data = [];
        for (const ask in asks) {
            add_data.push(MakeAskDom(ask, asks[ask].text));
            test_points[ask] = 3;
        }

        return add_data;
    }

    let click_result = {};
    function SetSelectVal(idx, param_val) {
        test_points[idx] = Number(param_val);
    }

    function doneTest(){
        let term_val = 25;
        let result_arr = [];
        let rank_arr = {
            'r1': [],
            'r2': [],
            'r3': [],
        };

        for(let idx = 1; idx <= term_val; idx++) {
            // console.log(test_points[idx]
            //     , test_points[(idx + term_val)]
            //     , test_points[(idx + (term_val * 2))]
            //     , test_points[(idx + (term_val * 3))]
            // );
            result_arr[idx] = test_points[idx] + test_points[(idx + term_val)] + test_points[(idx + (term_val * 2))] + test_points[(idx + (term_val * 3))];

            rank_set : for (const rank in rank_arr) {
                // console.log(idx);
                if( rank_arr[rank].length == 0 ) {
                    // console.log('init', idx);
                    rank_arr[rank].push({
                        idx: idx,
                        point: result_arr[idx],
                    });
                    break rank_set;
                } else {
                    for(const rank_item in rank_arr[rank]) {
                        if(rank_arr[rank][rank_item]['point'] < result_arr[idx] ){
                            rank_arr[rank][rank_item] = {
                                idx: idx,
                                point: result_arr[idx],
                            };
                            break rank_set;
                        }

                        if(rank_arr[rank][rank_item]['point'] == result_arr[idx] ){
                            // console.log('같다', idx);
                            rank_arr[rank].push({
                                idx: idx,
                                point: result_arr[idx],
                            });
                            break rank_set;
                        }
                    }
                }
            }
        }

        // console.log(result_arr);
        // console.log(rank_arr);
        let path_arr = [];
        rank_loop : for (const rank in rank_arr) {
            for(const rank_item in rank_arr[rank]) {
               path_arr.push( rank_arr[rank][rank_item].idx+'-'+rank_arr[rank][rank_item].point );
            }
        }

        // console.log(path_arr.join('/'));
        router.push('/result/'+path_arr.join('/'));

    }


    function MakeAskDom(number, title ) {
        return (
            <Grid css={{ width: "100%", py: '5px' }} key={number} >
                <Card css={{ mw: "100%" }}>
                    <Card.Header>
                        <Text b>질문.{number}</Text>
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body css={{ py: "$10" }}>
                        <Text css={{pr: '20px'}} >{title}</Text>
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer css={{width: "98%"}} >
                        <Row >
                            <RadioComponent number={number}  SetSelectVal={SetSelectVal} id={'radio_GR_'+number}/>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
        )
    }

    return (
        <div className="content">
            <Card css={{ mw: "100%", $$cardColor: '$colors$gradient', mt: '15%', mb: '10px' }}>
                <Card.Body>
                    <Text>아래 100개의 질문을 읽어보시고 네 가지 대답 중 한 가지를 선택 합니다.</Text>
                </Card.Body>
            </Card>
            <Container css={{pr: '0px', pl: '0px'}} >
                <Grid.Container >
                    <SSRProvider>
                        <AddAsks/>
                    </SSRProvider>
                </Grid.Container>
            </Container>
            <Spacer y={0.5} />
            <Button size="xl" onPress={doneTest}>결과확인</Button>
        </div>
    )
}