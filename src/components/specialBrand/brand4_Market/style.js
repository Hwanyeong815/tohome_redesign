import styled from "styled-components";

export const Brand4Style = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
  .brand4 {
    width: 1440px;
    height: 800px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      padding: 8px 50px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      gap: 58px;
      h2 {
        width: 352px;
        height: 60px;
        font-size: 30px;
        font-weight: 600;
        color: #3c6039;
        display: flex;
        border-bottom: 1px solid #333;
      }
      .line {
        content: "";
        width: 930px;
        height: 1px;
        height: 60px;
        border-bottom: 1px solid #333;
      }
    }

    table {
      margin-top: 25px;
      border-collapse: separate;
      border-spacing: 70px 0;
      th {
        width: 352px;
        height: 155px;
        font-size: 25px;
        font-weight: 600;
        color: #333;
        text-align: left;
      }
      td {
        width: 930px;
        box-sizing: border-box;
        font-size: 20px;
        line-height: 150%;
        color: #333;
      }
    }

    img {
      width: 1440px;
      height: 350px;
    }
  }
`;
