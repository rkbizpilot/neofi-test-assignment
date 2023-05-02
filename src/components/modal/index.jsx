import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "../../assets/asset-close.png";
import searchIcon from "../../assets/asset-search.png";
import checkIcon from "../../assets/asset-check.png";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 80%;
  max-width: 410px;
  background-color: #fff;
  padding: 50px 45px;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 90%;
    max-width: 400px;
    padding: 40px 25px;
  }
  background: #181627;
  border-radius: 18px;
  position: relative;
  border: 1px solid rgba(110, 86, 248, 0.25);
`;

const ModalCloseButton = styled.button`
  border: none;
  background: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 12px;
`;

const ModalContent = styled.div``;

const InputWrapper = styled.div`
  border: 1px solid rgba(110, 86, 248, 0.25);
  border-radius: 30px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 12px;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 18px;
  border: none;
  background: transparent;
  ont-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height */

  outline: none;

  color: #d2d2d2;
  padding: 12px;
`;
const SearchIcon = styled.img``;
const TokenWrapper = styled.div`
  max-height: 300px;
  height: 300px;
  overflow-y: auto;
  margin-top: 1rem;
`;
const TokenLogoIcon = styled.img`
  height: 24px;
  width: 24px;
  margin-right: 14px;
`;
const TokenName = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  color: #ffffff;
`;
const TokenLeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TokenItemWapper = styled.div`
  padding: 10px 16px;
  cursor: pointer;
  :hover {
    background: #1b192d;
    border-radius: 2px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectTokenModal = ({
  setOpen,
  coinInfo,
  setCoinInfo,
  coinSelected,
  setCoinSelected,
}) => {
  const [searchInfo, setSearchInfo] = useState("");
  const handleClick = (e) => {
    setCoinSelected(e);
    setOpen(false);
  };

  const filteredItems = coinInfo.filter((singleCoin) =>
    singleCoin.name.toLowerCase().includes(searchInfo.toLowerCase())
  );
  return (
    <ModalOverlay>
      <ModalWrapper>
        <ModalCloseButton onClick={() => setOpen(false)}>
          <img src={CloseIcon} alt="close" />
        </ModalCloseButton>

        <ModalContent>
          <InputWrapper>
            <SearchIcon src={searchIcon} alt="search" />
            <Input
              type="text"
              placeholder="Search chains"
              onChange={(e) => setSearchInfo(e.target.value)}
              value={searchInfo}
            />
          </InputWrapper>
          <TokenWrapper>
            {filteredItems.map((singleCoin) => (
              <TokenItemWapper
                key={singleCoin.id}
                onClick={() => handleClick(singleCoin)}
              >
                <TokenLeftWrapper>
                  <TokenLogoIcon src={singleCoin.image} alt="smaller-icon" />
                  <TokenName>{singleCoin.name}</TokenName>
                </TokenLeftWrapper>

                {singleCoin.id === coinSelected.id && (
                  <img
                    src={checkIcon}
                    alt="selected"
                    className="selected-mark"
                  />
                )}
              </TokenItemWapper>
            ))}
          </TokenWrapper>
        </ModalContent>
      </ModalWrapper>
    </ModalOverlay>
  );
};
