import styled, { keyframes } from "styled-components";
import image from "../assets/images/page-not-found.svg";
import { useNavigate } from "react-router-dom";

// Animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledPageNotFound = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1.2s ease-in-out;
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto 2rem;
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`;

const Heading = styled.h1`
    font-size: 3rem;
    color: var(--color-grey-900);
    margin: 2rem 0 1rem;
`;

const Message = styled.p`
    font-size: 1.6rem;
    color: var(--color-grey-600);
    margin-bottom: 3rem;
`;

const Button = styled.button`
    background-color: var(--color-primary);
    color: white;
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    border: none;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--color-primary-dark);
    }
`;

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <StyledPageNotFound>
            <Box>
                <ImageWrapper>
                    <Image src={image} alt="404 - Page Not Found" />
                </ImageWrapper>
                <Heading>Oops! Page Not Found</Heading>
                <Message>The page you're looking for doesn't exist or has been moved.</Message>
                <Button onClick={() => navigate("/")}>Go to Homepage</Button>
            </Box>
        </StyledPageNotFound>
    );
}

export default PageNotFound;
