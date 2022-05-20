import styled from 'styled-components';

export const StyledSection = styled.section`

    height: 100%;
    width: 100%;
    background-color: ${({theme}) => theme.colors.main};
    transition: 0.25s;
    font-size : 1.15vw;

    #About{
        display: flex;  
        height: 65vh;
        width: 100%;
        
        // Included : Profile Image, About(h2), Resunme A tag. 
        #about-left{
            display : flex;
            width: 50%;
            height 100%;
            padding : 4vh 4vw 4vh 4vw;

            .career{
                display : flex;
                flex-direction: column;
                width : 100%;
                height: 100%;
                
                #Company{
                    margin : 1vh 0vw 1vh 0vw;

                    h5{
                        margin : 2vh 0vw 2vh 0vw;
                    }
                }

                #Fashion{
                    margin : 1vh 0vw 1vh 0vw;

                    h5{
                        margin : 2vh 0vw 2vh 0vw;
                    }
                }

                #University{
                    margin : 1vh 0vw 1vh 0vw;

                    h5{
                        margin : 2vh 0vw 2vh 0vw;
                    }
                }

                #Rokmc{
                    margin : 1vh 0vw 1vh 0vw;

                    h5{
                        margin : 2vh 0vw 2vh 0vw;
                    }
                }

                #Japanese{
                    margin : 1vh 0vw 1vh 0vw;

                    h5{
                        margin : 2vh 0vw 2vh 0vw;
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
                }
                a{
                    font-size : 1.25vw;
                    margin : 2vh 0vh 2vh 0vh;
                    border: 0.1vw solid;
                    padding: 0vw 1vw 0vw 1vw;
                    border-image: linear-gradient(to top, white, yellow) 0 1;
                }
            }
        }
    }

    #Works{
        display: flex;  
        height: 65vh;
        width: 100%;
    }

    #Experience{
        display: flex;  
        height: 65vh;
        width: 100%;
    }

    #Contact{
        display: flex;  
        height: 65vh;
        width: 100%;
    }
`
