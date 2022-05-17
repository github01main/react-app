import { StyledSection } from "./styles/Section.styled.js";

export default function Section (){
  return (
  <>
  <StyledSection>
      <div id='section' data-testid='section'>
        <article id="About"><a href="#About">About</a></article>
        <article id="Works"><a href="#Works">Works</a></article>
        <article id="Experience"><a href="#Experience">Experience</a></article>
        <article id="SNS"><a href="#SNS">SNS</a></article>
      </div>
    </StyledSection>
  </>
  )
}