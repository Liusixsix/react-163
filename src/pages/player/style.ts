import styled from 'styled-components'


export const SongDetailWrapper = styled.div`
    .content{
        display:flex;
        width:982px;
        background: url(${require('@/assets/image/wrap-bg.png')}) repeat-y center 0;
    }
`

export const SongLeft = styled.div`
  width: 720px;
  padding: 47px 30px 40px 39px;
`

export const SongRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`