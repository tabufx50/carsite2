import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";


const FooterContainer = styled.div`
// min-height: 30em;
background-color: #1d2124;
    ${tw`
        flex
        // flex-col
        min-w-full 
        pt-10
        pl-10 
        pr-10 
        pb-5 
        md:pt-16 
        md:pb-10 
        // items-center
        justify-center 
    `}

`;

const InnerContainer = styled.div`
    ${tw`
        flex
        flex-wrap          
        w-full 
        h-full 
        max-w-screen-2xl 
    `}
`;

const AboutContainer = styled.div`
    ${tw`
        flex
        flex-col 
        mr-2 
        md:mr-16
        mb-3 
    `}
`;
 

const AboutText = styled.p`
    ${tw`
        text-white 
        text-sm 
        font-normal 
        max-w-xs
        leading-5 
        mt-2 
    `}
`;

const LinksList = styled.ul`
    ${tw`
        outline-none 
        list-none 
        flex 
        flex-col  
    `}
`;

const SectionContainer = styled.div`
    ${tw`
        flex
        flex-col 
        md:mr-16 
        mr-5 
    `}
`;

const ListItem = styled.li`
list-style-type: none;
    ${tw`
        mb-3 
        
    `};

    & > a {
        ${tw`
        text-sm 
        text-white  
        hover:text-red-700
        no-underline 
        `}
    };
`;

const HeaderTitle = styled.h3`
    ${tw`
        text-xl 
        md:text-2xl
        font-bold 
        text-white 
        mb-3 
    `}
`;

export function Footer() {
    return <FooterContainer>
        <InnerContainer>
        <AboutContainer>
            <Logo color="white" bgColor="dark" />
            <AboutText>Yourcar is a Car renting and selling company located in many countries across the world which has high quality cars and top-rated services.</AboutText>
        </AboutContainer>
        <SectionContainer>
        <LinksList>
        <HeaderTitle>Our Links</HeaderTitle>
        </LinksList>
        <ListItem><a href="#">Home</a></ListItem>
        <ListItem><a href="#">About Us</a></ListItem>
        <ListItem><a href="#">Services</a></ListItem>
        <ListItem><a href="#">Models</a></ListItem>
        <ListItem><a href="#">Blog</a></ListItem>
        </SectionContainer>
        <SectionContainer>
        <LinksList>
        <HeaderTitle>Other Links</HeaderTitle>
        </LinksList>
        <ListItem><a href="#">FAQ</a></ListItem>
        <ListItem><a href="#">Contact Us</a></ListItem>
        <ListItem><a href="#">Support</a></ListItem>
        <ListItem><a href="#">Privacy Policy</a></ListItem>
        <ListItem><a href="#">Terms &amp; Conditions</a></ListItem>
        </SectionContainer>
        </InnerContainer>
    </FooterContainer>
}