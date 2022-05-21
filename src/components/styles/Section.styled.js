import styled from 'styled-components';

export const StyledSection = styled.section`

    height: 100%;
    width: 100%;
    background-color: ${({theme}) => theme.colors.main};
    transition: 0.25s;
    font-size : 1.15vw;

@media screen and (min-width: 320px){
    #About{
        display: block;  
        height: 65vh;
        width: 100%;
    
        #about-left{
            margin-top : 90vh;
            display : flex;
            width: 100%;
            height 100%;
            padding : 4vh 4vw 4vh 4vw;
    
            .career{
                display : flex;
                flex-direction : column;
                width : 100%;
                height : 100%;
    
                .career-separate-section{
                    display: flex;
                    justify-content: flex-start;
                    margin : 1vh 1vw 1vh 14vw;
                    padding : 1vw 1vw 1vw 1vw;
                    transition: all 0.65s;
    
                    &:hover{
                        transition: all 0.25s;
                        background : rgba(50,50,50,0.5);
                    }
                    img{
                        width : 25%;
                        height : auto;
                        padding-right : 1vw;
                    }
                    h5, h6{
                        font-size : 2.5vw;
                        text-align: left;
                    }
                }
            }
        }
    
        #about-right{
            display : flex;
            width: 100%;
            height: 100%;
            padding : 4vh 4vw 4vh 4vw;
            margin-top : 10vh;

            .resume-profile{
                display : flex;
                flex-direction: column;
                width : 100%;
                height: 100%;
    
                img{
                    width : 50vw;
                    height: 50vw;
                    object-fit: cover; 
                    border: 2px solid transparent;
                    border-radius:  50%;
                }
                h2{
                    margin : 1vh 0vw 1vh 0vw;
                    font-size : 7vw;
                }
                a{
                    font-size : 5vw;
                    margin : 2vh 0vh 2vh 0vh;
                    border: 0.1vw solid;
                    padding: 0vw 1vw 0vw 1vw;
                    border-image: linear-gradient(to top, white, yellow) 0 1;
                }
            }
        }
    }
    
        .Category{
            display: flex;  
            height: 65vh;
            width: auto;
        }
    }
}

@media screen and (min-width: 766px){
    #About{
        display: flex;  
        height: 65vh;
        width: 100%;
    
        #about-left{
            margin-top : 0vh;
            display : flex;
            width: 50%;
            height 100%;
            padding : 4vh 4vw 4vh 4vw;
    
            .career{
                display : flex;
                flex-direction : column;
                width : 100%;
                height : 100%;
    
                .career-separate-section{
                    display: flex;
                    justify-content: flex-start;
                    margin : 0.5vh 0.5vw 0.5vh 9vw;
                    padding : 1vw 1vw 1vw 1vw;
                    transition: all 0.65s;
    
                    &:hover{
                        transition: all 0.25s;
                        background : rgba(50,50,50,0.5);
                    }
                    img{
                        width : 25%;
                        height : auto;
                        padding-right : 1vw;
                    }
                    h5, h6{
                        font-size : 1.5vw;
                        text-align: left;
                    }
                }
            }
        }
    
        #about-right{
            display : flex;
            width: 50%;
            height: 100%;
            padding : 4vh 4vw 4vh 4vw;
    
            .resume-profile{
                display : flex;
                flex-direction: column;
                width : 100%;
                height: 100%;
    
                img{
                    width : 15vw;
                    height: 15vw;
                    object-fit: cover; 
                    border: 2px solid transparent;
                    border-radius:  50%;
                }
                h2{
                    margin : 1vh 0vw 1vh 0vw;
                    font-size : 3.5vw;
                }
                a{
                    font-size : 1.5vw;
                    margin : 2vh 0vh 2vh 0vh;
                    border: 0.1vw solid;
                    padding: 0vw 1vw 0vw 1vw;
                    border-image: linear-gradient(to top, white, yellow) 0 1;
                }
            }
        }
    }
    
        .Category{
            display: flex;  
            height: 65vh;
            width: auto;
        }
    }
}

@media screen and (min-width: 1366px){
    #About{
        display: flex;  
        height: 65vh;
        width: 100%;
    
        #about-left{
            margin-top : 0vh;
            display : flex;
            width: 50%;
            height 100%;
            padding : 4vh 4vw 4vh 4vw;
    
            .career{
                display : flex;
                flex-direction : column;
                width : 100%;
                height : 100%;
    
                .career-separate-section{
                    display: flex;
                    justify-content: flex-start;
                    margin : 1vh 1vw 1vh 9vw;
                    padding : 1vw 1vw 1vw 1vw;
                    transition: all 0.65s;
    
                    &:hover{
                        transition: all 0.25s;
                        background : rgba(50,50,50,0.5);
                    }
                    img{
                        width : 18%;
                        height : auto;
                        padding-right : 1vw;
                    }
                    h5, h6{
                        font-size : 1vw;
                        text-align: left;
                    }
                }
            }
        }
    
        #about-right{
            display : flex;
            width: 50%;
            height: 100%;
            padding : 4vh 4vw 4vh 4vw;
    
            .resume-profile{
                display : flex;
                flex-direction: column;
                width : 100%;
                height: 100%;
    
                img{
                    width : 15vw;
                    height: 15vw;
                    object-fit: cover; 
                    border: 2px solid transparent;
                    border-radius:  50%;
                }
                h2{
                    margin : 1vh 0vw 1vh 0vw;
                    font-size : 3vw;
                }
                a{
                    font-size : 1vw;
                    margin : 2vh 0vh 2vh 0vh;
                    border: 0.1vw solid;
                    padding: 0vw 1vw 0vw 1vw;
                    border-image: linear-gradient(to top, white, yellow) 0 1;
                }
            }
        }
    }
    
        .Category{
            display: flex;  
            height: 65vh;
            width: auto;
        }
    }
}
`
