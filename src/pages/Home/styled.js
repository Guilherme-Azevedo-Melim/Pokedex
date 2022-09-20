import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0 ;
  margin: 0.3rem;
  border: 1px solid #efefef;
  border-radius: 0.2rem;
  min-width: 160px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);

  height: 292px;

  border-radius: 1rem;
  padding: 0.2rem 0.4rem;
  background-color: rgba(255,255,255,0.3);

  background: rgb(247, 247, 247);

`
export const Number = styled.div`
  border-radius: 1rem;
  padding: 0.2rem 0.4rem;
  background-color: rgba(255,255,255,0.3);
`
export const Small = styled.div`
  text-transform: capitalize;
`
export const Image = styled.img`
  width: 120px;
  height: 120px;
`
export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3{
    margin-bottom: 0.2rem;
  }
`
export const Button = styled.button`
  color: rgb(22, 22, 22);
  padding: .5rem;
  margin-top: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.185);
  align-items: center;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  width: 100%;
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
export const Pokemon = styled.div`
  width: 60vw;
  margin-left: auto;
  margin-right: auto;

  margin-top: 50px;
`

export const PokemonImagem = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  
`

export const All = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`
export const Load = styled.div`
  background: #f5f5f5 linear-gradient(#f5f5f5,#f1f1f1) repeat-x;
  border-radius: 2px;
  border: 1px solid #c6c6c6;
  color: #444;
  padding: 0.5rem 1.5rem;
  min-width: 20%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: progress;
  align-items: center;
  justify-content: center;
  text-align: center;

  :hover{
    background: DarkGrey;
  }
`
