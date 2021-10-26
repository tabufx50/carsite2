import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Marginer } from "../marginer";

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.div`
    min-height: 4.3em;
    box-shadow: 0 1.3px 12px -3px rgba(0,0,0, 0.4);
    ${tw`
        flex 
        justify-center 
        items-center 
        rounded-md 
        bg-white 
        pt-1 
        pb-1 
        pr-2 
        pl-2 
        md:pt-2 
        md:pb-2
        md:pl-9 
        md:pr-9  
        
    `};
`;

const ItemContainer = styled.div`
    ${tw`flex relative`}
`;

const Icon = styled.div`
    ${tw`
        text-red-500 
        fill-current 
        text-xs 
        md:text-base 
        mr-1 
        md:mr-3 
    `}
`;

const SmallIcon = styled.span`
    ${tw`
        text-gray-700 
        fill-current 
        text-xs 
        md:text-base 
        ml-1 
    `}
`;

const Name = styled.span`
    ${tw`
        text-gray-600 
        text-xs 
        md:text-sm 
        cursor-pointer 
        //get rid of selecting text
        select-none 
    `}
`;

const LineSeperator = styled.span`
    width: 2px;
    height: 45%;
    ${tw`
        bg-gray-300 
        mr-2 
        ml-2 
        md:mr-5 
        md:ml-5 
    `}
`;

// Override the calendar with ClassName
const DateCalendar = styled(Calendar)`
    position:absolute;
    max-width: none;
    user-select: none;
    top: 3.5em;
    left: -2em;
`;

export function BookCard() {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
    const [returnDate, setReturnDate] = useState<Date>(new Date());
    const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

    console.log("Value: ", startDate);

    const toggleStartDateCalendar = () => {
        setStartCalendarOpen(!isStartCalendarOpen);
        if(isReturnCalendarOpen) setReturnCalendarOpen(false);
    }
    const toggleReturnDateCalendar = () => {
        setReturnCalendarOpen(!isReturnCalendarOpen);
        if(isStartCalendarOpen) setStartCalendarOpen(false);
    }


    return <CardContainer>
                <ItemContainer>
                    <Icon>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </Icon>
                    <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name>
                    <SmallIcon>
                        <FontAwesomeIcon icon={ isStartCalendarOpen ? faCaretUp : faCaretDown } />
                    </SmallIcon>
                    {isStartCalendarOpen && <DateCalendar value={startDate} onChange={setStartDate as any} />}
                </ItemContainer>
                <LineSeperator />
                <ItemContainer>
                    <Icon>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </Icon>
                    <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
                    <SmallIcon>
                        <FontAwesomeIcon icon={ isReturnCalendarOpen ? faCaretUp : faCaretDown } />
                    </SmallIcon>
                    {isReturnCalendarOpen && <DateCalendar value={returnDate} onChange={setReturnDate as any} />}
                </ItemContainer>
                <Marginer direction="horizontal" margin="2em" />
                <Button text="Book Your Ride" />
        </CardContainer>
        

}