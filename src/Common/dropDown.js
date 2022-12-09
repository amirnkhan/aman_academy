import React, {useEffect, useState, useRef} from 'react'
import styled from "styled-components";
import useOnClickOutside from "./onClickOutsider"
const SortBy = styled.div`
  width: ${props => props.width ? props.width :"228px"};
  height: 34px;
  background: ${props => props.color ? props.color : "white"};
  border-radius: 10px;
  opacity: 1;
  text-align: left;
  font: normal normal 600 14px/70px Barlow;
  display: flex;
  justify-content: space-evenly;
  color: #ffffff;
  align-items: center;
  margin: ${props => props.margin ? props.margin : "0px 20px 0px 20px"};
  @media (max-width:767px){
    width: ${props => props.width ? props.width :"343px"};
    margin: 0px 0px 0px 0px;
    width: 100%;
  }
  @media (min-width:768px) and (max-width:1024px){
    margin: 0px 20px 0px 0px;
  }
`;

const DropDownContainer = styled.div`
  width: 30px;
  align-self: flex-start;
  z-index: 9;
  @media (max-width:767px){
    ${'' /* width: 343px; */}
  }
`;
const ArrowIcon = styled.img`
  width: 20px;
  height: 20px;
  float: right;
  margin-top: 9px;
  color: #9990aa;
`;
const DropDownList = styled.div`
  ${'' /* padding-left: 1em; */}
  background: skyblue;
  ${'' /* border: 2px solid #e5e5e5; */}
  box-sizing: border-box;
  font: normal normal medium 14px/17px Barlow;
  float: right;
  overflow: overlay;
  width: 174px;
  margin-top: 36px;
  line-height: 36px;
  border-radius: 10px;
  padding: 19px 0;

`;

const ListItem = styled.div`
  list-style: none;
  cursor: pointer;
  ${'' /* height:45px; */}
  padding: 0px 0 0 20px;
  margin-left: 10px;
  &:hover {
  ${'' /* color: gray; */}
  background-color: skyblue ;
  width: 158px;
  border-radius: 12px;
  }
`;
const SearchIcon = styled.img`
  margin-right: 0.625rem;
  width: 14px;
  height: 14px;
`;
const SelectOption = styled.span`
color: #9990aa;
`;


// const ref = useRef();

const DropDown = ({options, color, name, icon, width, handleInput, margin}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const toggling = () => setIsOpen(!isOpen);
    const onOptionClicked = (value) => () => {
      setSelectedOption(value);
      setIsOpen(false);
      handleInput && handleInput(value);
    };
    const ref = useRef();
    useOnClickOutside(ref, () => setIsOpen(false));

    
    return (
        <SortBy color={color} width={width} ref={ref} margin={margin} onClick={toggling}>
        {/* <SearchIcon src="/images/sorting.svg" /> */}
         <SelectOption>{selectedOption}</SelectOption>
        <DropDownContainer>
          {/* <ArrowIcon src="/images/Dropdown.svg" ></ArrowIcon> */}
          {isOpen && (
            <DropDownList>
              {options.map((option) => (
                <ListItem
                  onClick={onOptionClicked(option)}
                  key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          )}
        </DropDownContainer>
      </SortBy>
    )
    
}


export default DropDown

