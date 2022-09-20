import styled from "styled-components";

export const Main = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    background-image: url(https://cdn.99images.com/photos/wallpapers/hd-wallpapers/hd-wallpapers%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-xkgme.png);
    background-size: contain;
    height: calc(100vh - 63px);
`

export const PokemonCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
`

export const Description = styled.div`
    color: yellow;
    font-weight: bold;
    background-color: #3a89c9;
    margin-bottom: 5px;
    padding: 0px;
    border: 0px;
`

export const Title = styled.div`
  display: flex;
  background-color: #3a89c9;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: 2.3rem;
  color: yellow;
  text-shadow: -3px 0.7px black;
  box-shadow: 2px 1px 5px 0px rgba(50, 50, 50, 1);    
`