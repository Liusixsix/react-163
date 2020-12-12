import styled from 'styled-components'


export const PlayListWrapper = styled.div`
         border-width: 0px 1px;
         border-style: solid;
         border-color: rgb(211, 211, 211);
        border-left-width: 1px;
`

export const HeaderWrapper = styled.div`
    padding:40px;
    display:flex;
  
    .cover{
        border: 1px solid #ccc;
        padding:3px;
        img{
            width: 150px;
            height: 150px;
        }
    }

 
       


  .title-info {
    margin-left: 35px;
    padding: 16px 0 3px;

    .update-info {
      margin: 0 0 20px;
      line-height: 35px;

      .timer {
        font-size: 15px;
        margin-right: 5px;
      }
    }
  }
`