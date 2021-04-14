import styled from 'styled-components';

export const HeaderArea = styled.div`
    height: 80px;
    background-color: rgb(255, 255, 255);
    border-color: rgb(229, 229, 229);
    border-bottom: 1px solid #CCC;
    font-family: "Nunito Sans";
    padding-left: 150px;
    display: flex;
    align-items: center;
    margin: auto;
    -webkit-box-pack: start;
    justify-content: flex-start;
    
.container {
    width:100px;
    display:flex;
    flex-direction: row;
    aign-items:center;
    -webkit-font-smoothing: antialiased;
    justify-content: center;
    left: 0;
 
}
.logo {
    flex:1;
    display:flex;
    align-items:center;
}
nav{
    padding-top:10px;
    padding-bottom:10px;
   
    ul, li {
        margin:0;
        padding:0;
        list-style:none;
    }
    ul {
        display:flex;
        align-items:center;
        height:40px;
        position: absolute;
        top:20px;
        right: 150px;
    }
    li {
        margin-left:20px;
        margin-right:20px;
        
        a, button {
            border:0;
            background:none;
            color:#000;
            font-size: 1rem;
            text-decoration:none;
            font-family: Nunito Sans,Helvetica Neue,HelveticaNeue,Helvetica,Arial,sans-serif;
            font-weight: 600;
            line-height: 1.5;
            margin: 0;
            text-align: left; 
            cursor:pointer;

            &:hover {
                color:#6e0ad6;
            }

            &.button {
                width: 120px;
                height: 40px;
                display: flex;
                flex-direction: row;
                -webkit-box-pack: center;
                justify-content: center;
                -webkit-box-align: center;
                align-items: center;
                text-decoration: none;
                background-color: rgb(247, 131, 35);
                color: rgb(255, 255, 255);
                border-radius: 30px;
                line-height: 21px;
                font-size: 14px;
                font-weight: 700;
                text-align: center;
                user-select: none;
                border: 1px solid transparent;
                cursor: pointer;

            }
            &.button:hover {
                background-color:#f0993c;
            }
        }
    }
}

@media(max-width:600px) {

    &{
        height:auto
    }
    .container {
        flex-direction:column;
    }
    .logo {
        justify-content:center;
        margin:70px;
    }
    nav ul {
        flex-direction:column;
        height:auto;
    }
    nav li {
        margin:3px 5px;
    }
}


`;
