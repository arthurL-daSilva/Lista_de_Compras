import styled from 'styled-components'

export const Container = styled.div `
    background: #b752ff;
    padding: 20px;
    border-radius: 10px;
    opacity: 80%;
    
    h1 {
        padding-left: 20px;
        color: #000;
        animation: pop_h1 0.5s;
        font-family: "Roboto Condensed", sans-serif;
        font-weight: 700;

    }

    hr {
        animation: pop_hr 1s;
        border-color: #000;
    }

    input {
        height: 35px;
        border-radius: 5px;
        border: none;
        margin-top: 30px;
        outline: none;
        padding-left: 10px;
    }

    @keyframes pop_hr {
        from{
            width: 0%;
            opacity: 0%;
        }
        to{
            width: 100%;
            opacity: 100%;
        }
    }

    @keyframes pop_h1 {
        from{
            transform: translateX(-30px);
            opacity: 0%;
        }
        to{
            transform: translateX(0px);
            opacity: 100%;
        }
    }
`

export const AddButton = styled.button `
    background: #6495ED;
    color:#000;
    height: 35px;
    opacity: 0.8;
    margin-left: 10px;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    transition: 0.3s;
    

    &:hover {
        opacity: 1;
        border-color: #000;
        color: white;
        border: solid;
        border-width: 1px
    }
`

export const Produto = styled.div `
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    background: #fff;
    border-radius: 5px;
    margin-top: 15px;
    padding: 0 10px;

    button{
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 18px;
    }

    p {
        font-family: Arial, Helvetica, sans-serif;
        text-transform: capitalize;
        font-weight: bold;
        font-size: 15px;
    }
`