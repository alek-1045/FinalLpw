import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 580px;
  margin: 30px auto 0;
  padding: 30px;
  background: 4px solid #ddd;

  display: flex;
  flex-direction: column;
  border-bottom: 4px solid #DDD;

  input {
    margin-bottom: 10px;
    border-bottom: 4px solid #DDD;
  }

  input[type=text] {
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
    border-bottom: 4px solid #DDD;
  }

  button{
       margin-bottom: 10px 20px;
       padding: 10px 10px;
       border-radius: 4px;
       border: 0;
        background: #008000;
        color: #B0E0E6;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        border-bottom: 4px solid #32CD32;
      }

      margin-bottom: 10px 240px;
      padding: 10px 10px;
      border-radius: 4px;
      border: 0;
      font-size: 15px;



     /* thead {
      margin-bottom: 10px 20px;
       padding: 10px 10px;
       border-radius: 4px;
       border-bottom: 4px solid #363636;
     } */

  /* button {
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background: #7159c1;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

  } */

`

export const Table = styled.table`
  width: 100%;
  border: 1px;


  padding: 10px 20px;
      border-radius: 4px;
      border: 0;
      background: #32CD32;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      border-bottom: 4px solid #696969;
`



