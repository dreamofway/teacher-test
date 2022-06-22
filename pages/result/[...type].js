import {useTheme, Container, Card, Grid, Button, Row, Text, Spacer, Radio} from "@nextui-org/react";
import {SSRProvider} from '@react-aria/ssr';
import React, { useState, useRef, useEffect } from "react";
import {useRouter} from "next/router";

export default ()=>{
    const router = useRouter();


    useEffect(()=>{
        console.log(router.query);
    }, []);

    // if(router.query.hasOwnProperty('type')){
    //     if(router.query.type[0] == 'column') {
    //         setIsData(true);
    //     } else {
    //         setIsData(false);
    //     }
    // }

    return (
        <div className="content">
            <Card css={{ mw: "100%", $$cardColor: '$colors$gradient', mt: '15%', mb: '10px' }}>
                <Card.Body>
                    <Text>합계 점수가 높은 순으로 나열되었습니다. <br/>높은 점수가 당신의 은사입니다.</Text>
                </Card.Body>
            </Card>
            <Container css={{pr: '0px', pl: '0px'}} >
                <Grid.Container >
                    <SSRProvider>

                    </SSRProvider>
                </Grid.Container>
            </Container>
            <Spacer y={0.5} />
        </div>
    )
}