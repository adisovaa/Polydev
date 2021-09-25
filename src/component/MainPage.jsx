import React from 'react'
import Heading from "./heading/Heading";
import Text from "./text/Text";
import Project from "./projects/Projects";
import {ClientInfo, StudioInfo} from "./info/Info";
import {Box, BoxTechnologies} from "./content/box/Box";
import TabInfo from "./tab/Tab";
import Review from "./review/Review";
import {Brief} from "./content/brief/Brief";
import Ask from "./content/ask/Ask";


const MainPage = () => {
    return (
        <div>
            <Heading/>
            <Text/>
            <Project/>
            <ClientInfo/>
            <Box/>
            <StudioInfo/>
            <BoxTechnologies/>
            <TabInfo/>
            <Review/>
            <Brief/>
            <Ask/>
        </div>
    )
}

export default MainPage