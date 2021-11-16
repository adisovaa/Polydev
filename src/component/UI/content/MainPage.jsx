import React from 'react'
import Heading from "./heading/Heading";
import Text from "./text/Text";
import Project from "./projects/Projects";
import {ClientInfo, StudioInfo} from "./info/Info";
import {Box, BoxTechnologies} from "./box/Box";
import TabInfo from "./tab/Tab";
import {Brief} from "./brief/Brief";
import Ask from "./ask/Ask";
import ReviewSlider from "./review/Slider";


const MainPage = () => {
    return (
        <div id='0'>
            <Heading/>
            <Text/>
            <Project/>
            <ClientInfo/>
            <Box/>
            <StudioInfo/>
            <BoxTechnologies/>
            <TabInfo/>
            <ReviewSlider/>
            <Brief/>
            <Ask/>
        </div>
    )
}

export default MainPage