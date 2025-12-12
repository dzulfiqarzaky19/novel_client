import styled from '@emotion/styled';
import { Link } from '@tanstack/react-router';

const Wrap = styled.main`
  min-height: 60vh;
  display: grid;
  place-items: center;
  padding: clamp(16px, 3vw, 24px);
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Card = styled.div`
  display: grid;
  gap: clamp(10px, 2vw, 14px);
  text-align: center;
  max-width: 560px;
  width: 100%;
`;

const Big = styled.div`
  display: inline-flex;
  gap: clamp(6px, 1.6vw, 10px);
  font-weight: 800;
  font-size: clamp(56px, 10vw, 96px);
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0 auto 4px;

  span {
    display: inline-block;
  }

  span:nth-of-type(1) {
    animation: float 3.2s ease-in-out infinite;
  }
  span:nth-of-type(2) {
    animation: float 3.2s ease-in-out 0.12s infinite;
  }
  span:nth-of-type(3) {
    animation: float 3.2s ease-in-out 0.24s infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(18px, 2.6vw, 22px);
  line-height: 1.25;
`;

const Sub = styled.p`
  margin: 0;
  font-size: clamp(12px, 1.8vw, 14px);
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: clamp(10px, 2vw, 14px);
`;

const Btn = styled.button`
  appearance: none;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  background: transparent;
  color: inherit;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  box-shadow: none;

  &:hover {
    background: ${({ theme }) => theme.colors.surface.cardHover};
    transform: none;
    box-shadow: none;
  }
`;

const LinkBtn = styled(Link)`
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  text-decoration: none;
  color: inherit;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surface.cardHover};
  }
`;

export const NotFoundPage = () => (
  <Wrap>
    <Card>
      <Big>
        <span>4</span>

        <span>0</span>

        <span>4</span>
      </Big>

      <Title>Page not found</Title>

      <Sub>The page you’re looking for doesn’t exist or moved.</Sub>

      <Actions>
        <LinkBtn to="/">Go Home</LinkBtn>

        <Btn onClick={() => history.back()}>Go Back</Btn>
      </Actions>
    </Card>
  </Wrap>
);
