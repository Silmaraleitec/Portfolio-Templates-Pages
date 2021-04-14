import styled from 'styled-components';

export const SearchArea = styled.div`
background-color:#6e0ad6;
border-bottom: 1px solid #CCC;
padding: 30px 0;

    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

.categoryList {
    display:flex;
    flex-wrap:wrap;
    margin-top:30px;

    .categoryItem {
        width:25%;
        display:flex;
        align-items:center;
        color:#FFF;
        text-decoration:none;
        height:50px;
        margin-botton:10px;

        &:hover {
            color:#DDD;
        }

        img {
            width:45px;
            height:45px;
            margin-right:10px;
        }
    }
}

.searchBox {
    background-color: rgb(255, 255, 255);
    padding-left: 15px;
    display: flex;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 1px 2px 0px;
    -webkit-box-align: center;
    align-items: center;
    height: 60px;
    text-align: left;
    color: #4a4a4a;
    font-family: Nunito Sans,Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5; 
    flex-direction: row-reverse;
    position: relative;
    
form {
    flex:1;
    display:flex;

    input, select {
        border:0;
        border-radius:5px;
        outline:0;
        font-size:15px;
        color:#000;
        margin-right:20px;
        text-transform: none;
        overflow: visible;
        
    }
    input {
        flex:1;
        padding: 0 10px;
        ont-family: inherit;
        font-size: inherit;
        line-height: inherit;
        margin: 0;
        overflow: visible;
    }

    select {
        widht:100px;
    }
    button { 
        background-color: transparent;
        border-radius:5px;
        height: 60px;
        color: rgb(134, 27, 169);
        padding: 18px 19px;
        margin: 0px;
        border-width: 0px 0px 0px 2px;
        border-left-style: solid;
        border-left-color: rgb(210, 210, 210);
        cursor: pointer;
        outline: none;
        z-index: 1;   
        position: relative;
        overflow: hidden;
    

        &:after {
            content: '';
            position: absolute;
            display: block;
            top: 0;
            left: 50%;
            -webkit-transform: translateX(-50%);
                    transform: translateX(-50%);
            width: 0;
            height: 100%;
            background: #9c45b8;
            z-index: -1;
            -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
            transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out; 

          }
          &:hover {
            color: #fff;
            border: 1px solid #FFF;
          }
          &:hover:after {
            width: 100%;
          }
    }
   
    svg {
        position: relative;
        overflow: hidden;
        border-radius: 2px;

        &:hover {
            color:#FFF;
         }  
        }
    }

    @media(max-width:600px) {
        .searchBox form {
            flex-direction:column;

            input {
                padding:10px;
                margin-right:0;
                margin-bottom:10px;
            }
            select {
                width:100%;
                margin-bottom:10px;
            }
        }
        .categoryList, .ategoryItem {
            width:50%;
            padding:10px;
        }

    }
    
`;

export const PageArea = styled.div`
h2{
    font-size:20px;
}
.list {
    display:flex;
    flex-wrap:wrap;

    .aditem {
        width:25%;
       
    }
}
.seeAllLink {
    color:#000;
    text-decoration:none;
    font-wight:bold;
    display:inline-block;
    margin-top:10px;
}

@media(max-width:600px) {
    & {
        margin:10px;
    }

    .list, aditem {
        width:50%;
    }


}


`;