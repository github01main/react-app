import styled from 'styled-components';

export const StyledSection = styled.section`

    height: 100%;
    width: 100%;
    background-color: ${({theme}) => theme.colors.main};
    transition: 0.25s;
    font-size : 1.15vh;

// Mobile.
@media screen and (min-width: 360px){

    #About{
            
        display : flex;
        flex-direction : column;
        width : 100%;
        height : 100vh;
        z-index: 1;
        padding : 1.5vh 1.5vh 1.5vh 1.5vh;

        #about-left{
            display : flex;
            width: 100%;
            height 100%;

            .career{
                display : flex;
                flex-direction : column;

                .career-separate-section{
                    display: flex;
                    justify-content: flex-start;
                    margin : 1vh 1vh 1vh 1vh;
                    padding : 1vh 1v 1vh 1vh;
                    transition: all 0.65s;

                    &:hover{
                        transition: all 0.25s;
                        background : rgba(50,50,50,0.5);
                    }
                    
                    img{
                        width : 20%;
                        padding-right : 1vh;
                    }

                    h5, h6{
                        font-size : 1.5vh;
                        text-align: left;
                    }
                }
            }
        }

        #about-right{
            display : flex;
            width: 100%;
            height: 100%;

            .resume-profile{
                display : flex;
                flex-direction: column;
                width : 100%;
                height: 100%;

                img{
                    width : 20vh;
                    height: 20vh;
                    border: 2px solid transparent;
                    border-radius:  40%;
                }
                h2{
                    margin : 1vh 0vh 1vh 0vh;
                    font-size : 3vh;
                }
                a{
                    font-size : 2vh;
                    margin : 2vh 0vh 2vh 0vh;
                    border: 0.1vh solid;
                    padding: 0vh 1vh 0vh 1vh;
                    border-image: linear-gradient(to top, white, yellow) 0 1;
                }
            }
        }
    }

    #Works{

        display : flex;
        flex-direction : column;
        width : 100%;
        height : 100vh;
        z-index: 1;

        #main-frame{
            width : 100%;
            height : 100%;
        }
        
        #sub-frame{
            display : flex;
            flex-wrap: wrap;
            width : 100%;
            height : 100%;
            opacity : 0.25;
            transition: all 0.65s;
            overflow: auto;

            &:hover{
                opacity : 1;
                transition: all 0.65s;
            }
        }
    }

    #Experience{
        display : flex;
        flex-direction : row;
        width : 100%;
        height : 100vh;
        z-index: 1;
        padding : 15vh 15vh 15vh 15vh;
    }

    #Contact{
        display : flex;
        flex-direction : row;
        width : 100%;
        height : 100vh;
        z-index: 1;
        padding : 15vh 15vh 15vh 15vh;
    }
}
// Tablet.
@media screen and (min-width: 720px){

    #About{
            
        display : flex;
        flex-direction : row;
        width : 100%;
        height : 100vh;
        z-index: 1;
        padding : 1.5vh 1.5vh 1.5vh 1.5vh;

        #about-left{
            display : flex;
            width: 50%;
            height 100%;

            .career{
                display : flex;
                flex-direction : column;

                .career-separate-section{
                    display: flex;
                    justify-content: flex-start;
                    margin : 1vh 1vh 1vh 9vh;
                    padding : 1vh 1vh 1vh 1vh;
                    transition: all 0.65s;

                    &:hover{
                        transition: all 0.25s;
                        background : rgba(50,50,50,0.5);
                    }
                    
                    img{
                        width : 20%;
                        // height : auto;
                        padding-right : 1vh;
                    }

                    h5, h6{
                        font-size : 1vh;
                        text-align: left;
                    }
                }
            }
        }

        #about-right{
            display : flex;
            width: 50%;
            height: 100%;

            .resume-profile{
                display : flex;
                flex-direction: column;
                width : 100%;
                height: 100%;

                img{
                    width : 40vh;
                    height: 40vh;
                    border: 2px solid transparent;
                    border-radius:  40%;
                }
                h2{
                    margin : 1vh 0vh 1vh 0vh;
                    font-size : 3vh;
                }
                a{
                    font-size : 3vh;
                    margin : 2vh 0vh 2vh 0vh;
                    border: 0.1vh solid;
                    padding: 0vh 1vh 0vh 1vh;
                    border-image: linear-gradient(to top, white, yellow) 0 1;
                }
            }
        }
    }

    #Works{

        display : flex;
        flex-direction : row;
        width : 100%;
        height : 100vh;
        z-index: 1;
        padding : 15vh 1.5vh 15vh 1.5vh;

        #main-frame{
            width : 80%;
            height : 100%;
        }
        
        #sub-frame{
            display : flex;
            flex-direction : column;
            flex-wrap: nowrap;
            width : 20%;
            height : 100%;
            opacity : 0.25;
            transition: all 0.65s;
            overflow: auto;

            &:hover{
                opacity : 1;
                transition: all 0.65s;
            }
        }
    }

    #Experience{
        display : flex;
        flex-direction : row;
        width : 100%;
        height : 100vh;
        z-index: 1;
        padding : 15vh 15vh 15vh 15vh;
    }

    #Contact{
        display : flex;
        flex-direction : row;
        width : 100%;
        height : 100vh;
        z-index: 1;
        padding : 15vh 15vh 15vh 15vh;
    }
}

// Laptop.
@media screen and (min-width: 1080px){

    #About{
            
        display : flex;
        flex-direction : row;
        width : 100%;
        height : 100vh;
        z-index: 1;
        padding : 10vh 10vh 10vh 10vh;

        #about-left{
            display : flex;
            width: 50%;
            height 100%;

            .career{
                display : flex;
                flex-direction : column;

                .career-separate-section{
                    display: flex;
                    justify-content: flex-start;
                    margin : 1vh 1vh 1vh 9vh;
                    padding : 1vh 1vh 1vh 1vh;
                    transition: all 0.65s;

                    &:hover{
                        transition: all 0.25s;
                        background : rgba(50,50,50,0.5);
                    }
                    
                    img{
                        width : 20%;
                        // height : auto;
                        padding-right : 1vh;
                    }

                    h5, h6{
                        font-size : 1vh;
                        text-align: left;
                    }
                }
            }
        }

        #about-right{
            display : flex;
            width: 50%;
            height: 100%;

            .resume-profile{
                display : flex;
                flex-direction: column;
                width : 100%;
                height: 100%;

                img{
                    width : 40vh;
                    height: 40vh;
                    border: 2px solid transparent;
                    border-radius:  40%;
                }
                h2{
                    margin : 1vh 0vh 1vh 0vh;
                    font-size : 3vh;
                }
                a{
                    font-size : 3vh;
                    margin : 2vh 0vh 2vh 0vh;
                    border: 0.1vh solid;
                    padding: 0vh 1vh 0vh 1vh;
                    border-image: linear-gradient(to top, white, yellow) 0 1;
                }
            }
        }
    }

    #Works{

        display : flex;
        flex-direction : row;
        width : 100%;
        height : 100vh;
        z-index: 1;
        padding : 15vh 15vh 15vh 15vh;

        #main-frame{
            width : 80%;
            height : 100%;
        }
        
        #sub-frame{
            display : flex;
            flex-direction : column;
            flex-wrap: nowrap;
            width : 20%;
            height : 100%;
            opacity : 0.25;
            transition: all 0.65s;
            overflow: auto;

            &:hover{
                opacity : 1;
                transition: all 0.65s;
            }
        }
    }

    #Experience{
        display : flex;
        flex-direction : row;
        width : 100%;
        height : 100vh;
        z-index: 1;
        padding : 15vh 15vh 15vh 15vh;
    }

    #Contact{
        display : flex;
        flex-direction : row;
        width : 100%;
        height : 100vh;
        z-index: 1;
        padding : 15vh 15vh 15vh 15vh;
    }
}

// Desktop.
@media screen and (min-width: 1400px){

    #About{
            
        display : flex;
        flex-direction : row;
        width : 100%;
        height : 100vh;
        z-index: 1;
        padding : 15vh 15vh 15vh 15vh;

        #about-left{
            display : flex;
            width: 50%;
            height 100%;

            .career{
                display : flex;
                flex-direction : column;

                .career-separate-section{
                    display: flex;
                    justify-content: flex-start;
                    margin : 1vh 1vh 1vh 9vh;
                    padding : 1vh 1vh 1vh 1vh;
                    transition: all 0.65s;

                    &:hover{
                        transition: all 0.25s;
                        background : rgba(50,50,50,0.5);
                    }
                    
                    img{
                        width : 20%;
                        // height : auto;
                        padding-right : 1vh;
                    }

                    h5, h6{
                        font-size : 1vh;
                        text-align: left;
                    }
                }
            }
        }

        #about-right{
            display : flex;
            width: 50%;
            height: 100%;

            .resume-profile{
                display : flex;
                flex-direction: column;
                width : 100%;
                height: 100%;

                img{
                    width : 22.5vh;
                    height: 22.5vh;
                    border: 2px solid transparent;
                    border-radius:  40%;
                }
                h2{
                    margin : 1vh 0vh 1vh 0vh;
                    font-size : 3vh;
                }
                a{
                    font-size : 1vh;
                    margin : 2vh 0vh 2vh 0vh;
                    border: 0.1vh solid;
                    padding: 0vh 1vh 0vh 1vh;
                    border-image: linear-gradient(to top, white, yellow) 0 1;
                }
            }
        }
    }

    #Works{

        display : flex;
        flex-direction : row;
        width : 100%;
        height : 100vh;
        z-index: 1;
        padding : 15vh 15vh 15vh 15vh;

        #main-frame{
            width : 80%;
            height : 100%;
        }
        
        #sub-frame{
            display : flex;
            flex-direction : column;
            flex-wrap: nowrap;
            width : 20%;
            height : 100%;
            opacity : 0.25;
            transition: all 0.65s;
            overflow: auto;
            &:hover{
                opacity : 1;
                transition: all 0.65s;
            }
        }
    }

    #Experience{
        display : flex;
        flex-direction : row;
        width : 100%;
        height : 100vh;
        z-index: 1;
        padding : 15vh 15vh 15vh 15vh;
    }

    #Contact{
        display : flex;
        flex-direction : row;
        width : 100%;
        height : 100vh;
        z-index: 1;
        padding : 15vh 15vh 15vh 15vh;
    }
}
`
