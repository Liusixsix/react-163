import styled from 'styled-components'


export const CommentWrapper = styled.div`
    margin-top:20px;
    .header{
        border-bottom:1px solid #cfcfcf;
    }
    .comment-item{
        display:flex;
        font-size:12px;
        color: #333;
        border-bottom: 1px dotted #ccc;
        padding:15px 0;
        .content{
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            margin-left:10px;
            .name{
                font-size:12px;
                padding:0;
            }
        }
    }
`

export const PaginationWrap =  styled.div`
    text-align:center;
    margin-top:20px;
`