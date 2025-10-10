import styled from '@emotion/styled';
import { getRouteApi } from '@tanstack/react-router';

const HomeRoute = getRouteApi('/');

const Full = styled.div`
  --text: #111;
  --muted: #6b7280;
  --line: #e5e7eb;
  --bg-hover: #f9fafb;

  @media (prefers-color-scheme: dark) {
    --text: #e5e7eb;
    --muted: #9ca3af;
    --line: #1f2937;
    --bg-hover: #0b0f14;
  }

  min-height: 60vh;
  display: grid;
  place-items: center;
  padding: clamp(16px, 3vw, 24px);
  color: var(--text);
`;

const Bubble = styled.div`
  position: relative;
  margin: 0 auto;
  width: clamp(220px, 40vw, 360px);
  padding: clamp(12px, 2.5vw, 16px) clamp(14px, 3vw, 20px);
  border: 1px solid var(--line);
  border-radius: 16px;
  text-align: left;

  &:after {
    content: '';
    position: absolute;
    left: 24px;
    bottom: -10px;
    width: 14px;
    height: 14px;
    background: transparent;
    border: 1px solid var(--line);
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg);
  }
`;

const Card = styled.div`
  display: grid;
  gap: 14px;
  text-align: center;
  max-width: 520px;
  width: 100%;
`;

const ErrorRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
`;

const Emoji = styled.div`
  font-size: 22px;
  line-height: 1;
  animation: wobble 900ms ease-in-out infinite;
  transform-origin: 60% 60%;

  @keyframes wobble {
    0%,
    100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-6deg);
    }
  }
`;

const ErrTitle = styled.h2`
  margin: 0 0 4px;
  font-size: clamp(16px, 2.4vw, 20px);
  line-height: 1.25;
`;

const ErrSub = styled.p`
  margin: 0;
  font-size: clamp(12px, 1.8vw, 14px);
  color: var(--muted);
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: clamp(12px, 2.5vw, 16px);
  flex-wrap: wrap;
`;

const Btn = styled.button`
  appearance: none;
  border: 1px solid var(--line);
  background: transparent;
  color: inherit;
  border-radius: 10px;
  padding: 10px 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: var(--bg-hover);
  }
`;

const LinkBtn = styled(HomeRoute.Link)`
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 10px 14px;
  text-decoration: none;
  color: inherit;
  font-weight: 600;

  &:hover {
    background: var(--bg-hover);
  }
`;

type ErrorPageProps = {
  title?: string;
  message?: string;
  onRetry?: () => void;
};

export const ErrorPage = ({
  title = 'Something went wrong',
  message = 'Please try again, or go back and retry.',
  onRetry,
}: ErrorPageProps) => (
  <Full role="alert">
    <Card>
      <Bubble>
        <ErrorRow>
          <Emoji>⚠️</Emoji>

          <div>
            <ErrTitle>{title}</ErrTitle>

            <ErrSub>{message}</ErrSub>
          </div>
        </ErrorRow>
      </Bubble>

      <Actions>
        {onRetry && <Btn onClick={onRetry}>Retry</Btn>}

        <LinkBtn to="/">Go Home</LinkBtn>
      </Actions>
    </Card>
  </Full>
);
