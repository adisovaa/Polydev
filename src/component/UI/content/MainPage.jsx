import React from 'react'
import Heading from "./heading/Heading";
import Text from "./text/Text";
import Project from "./projects/Projects";
import {ClientInfo, StudioInfo} from "./info/Info";
import {Box, BoxTechnologies} from "./box/Box";
import TabInfo from "./tab/Tab";
import Review from "./review/Review";
import {Brief} from "./brief/Brief";
import Ask from "./ask/Ask";
import NewReview from "./review/newReview/NewReview";


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
            <NewReview/>
            <Brief/>
            <Ask/>
        </div>
    )
}

export default MainPage