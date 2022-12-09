import React from "react";
import styled from "styled-components";

const CardData = [
  {
    id: 1,
    docName: "General Information",
    docLink:
      "https://drive.google.com/file/d/1wYwIm6VXkhzIiQZYGR10Gpq9Hx5X93_9/view?usp=share_link",
  },
  {
    id: 2,
    docName: "Affiliation & Extension",
    docLink:
      "https://drive.google.com/file/d/13MTeij5rG0jBMx-kCl3VZKwY0DCcFZP0/view?usp=share_link",
  },
  {
    id: 3,
    docName: "Trust Deed of School",
    docLink:
      "https://drive.google.com/file/d/1q-Wa-zT7jt6wYnmeknjblW9j_j2-7M-v/view?usp=share_link",
  },
  {
    id: 4,
    docName: "N.O.C.- State Government",
    docLink:
      "https://drive.google.com/file/d/13bHMJ1BJT1YpRdsUWRb129ZMzKHJlWam/view?usp=share_link",
  },
  {
    id: 5,
    docName: "Recognition Certificate",
    docLink:
      "https://drive.google.com/file/d/1kBjh9EbEop4bxkR8XP4xnsCLE9dSPrDP/view?usp=share_link",
  },
  {
    id: 6,
    docName: "Building Construction",
    docLink:
      "https://drive.google.com/file/d/1lReWuqV7o_QFYGn7J0nw2YfdDHezGcq7/view?usp=share_link",
  },
  {
    id: 7,
    docName: "Fire Safety Certificate",
    docLink:
      "https://drive.google.com/file/d/1fEd_vBkxXNJ_jDn03SA6B3nanYFYyM6z/view?usp=share_link",
  },
  {
    id: 8,
    docName: "Safe Drinking",
    docLink:
      "https://drive.google.com/file/d/1CE3WFjg33ZLyDZeG06fSvZK3wzLfkxmI/view?usp=share_link",
  },
  {
    id: 9,
    docName: "Fee Structure",
    docLink:
      "https://drive.google.com/file/d/1IrJp0jNkwHLCX7XU4SCLJr11r9hByFOI/view?usp=share_link",
  },
  {
    id: 10,
    docName: "P.T.A",
    docLink:
      "https://drive.google.com/file/d/1Mq4PqtTtWWRiXhThUL5IJmrHaTGQvBtU/view?usp=share_link",
  },
  {
    id: 11,
    docName: "Class X Result",
    docLink:
      "https://drive.google.com/file/d/1DgcPQaXbDRFPOcBD0YxFPTf4jtaq4IxN/view?usp=share_link",
  },
  {
    id: 12,
    docName: "Self Certification",
    docLink:
      "https://drive.google.com/file/d/1dWWhLUAead43LCcP0gdIhaGfErz47P8H/view?usp=share_link",
  },
  {
    id: 13,
    docName: "Academic Staff List",
    docLink:
      "https://drive.google.com/file/d/1e6U1r2reV6qc-UJB50QXeN9FXBbKoTu1/view?usp=share_link",
  },
  {
    id: 14,
    docName: "School Infrasturcture",
    docLink:
      "https://drive.google.com/file/d/1uJW08BPUPNqM3nNyBBjh_zoaOElWMnw-/view?usp=share_link",
  },
  {
    id: 15,
    docName: "Academic Calendar",
    docLink:
      "https://drive.google.com/file/d/1gawilttuUv_-YJA9unBdqpbS3iLJYmmq/view?usp=share_link",
  },
  {
    id: 16,
    docName: "School Management Committee",
    docLink:
      "https://drive.google.com/file/d/1xb37RVXMfoZnwbR_J6upi12qxcqJLc6g/view?usp=share_link",
  },
  {
    id: 17,
    docName: "Sexual Harrasment Committee",
    docLink:
      "https://drive.google.com/file/d/1_j91riWkoVjBdnJTrsnANTIiiRFs5_WM/view?usp=share_link",
  },
];

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 767px) {
    align-items: center;
    justify-content: center;
  }
`;
const Card = styled.button`
  color: #fff;
  background-image: linear-gradient(180deg, #ce6161 0%, #f2295b 100%);
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  width: 200px;
  max-width: 220px;
  border: none;
  outline: none;
  margin-right: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 767px) {
    margin-right: 0px;
    margin-bottom: 5px;
  }
`;

export default function Cards() {
  return (
    <MainDiv>
      {CardData?.map((item) => (
        <a href={item?.docLink} target="_blank">
          <Card>{item?.docName}</Card>
        </a>
             ))}
    </MainDiv>
  );
}
