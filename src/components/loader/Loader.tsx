import styled from '@emotion/styled';

const Full = styled.div`
  min-height: 60vh;
  display: grid;
  place-items: center;
  padding: clamp(16px, 3vw, 24px);
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Card = styled.div`
  display: grid;
  gap: 14px;
  text-align: center;
  max-width: 520px;
  width: 100%;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(20px, 3vw, 28px);
  line-height: 1.2;
`;

const Sub = styled.p`
  margin: 0;
  font-size: clamp(13px, 1.8vw, 14px);
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const SpinnerWrap = styled.div`
  display: inline-grid;
  place-items: center;
  margin: 6px auto 2px;
`;

const Spinner = styled.div`
  width: 52px;
  height: 52px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 3px solid ${({ theme }) => theme.colors.border.default};
  border-top-color: currentColor;
  animation: spin 900ms linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const Dots = styled.div`
  display: inline-flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  margin-top: 6px;

  span {
    width: 6px;
    height: 6px;
    border-radius: 9999px;
    background: currentColor;
    opacity: 0.35;
    animation: blink 1.4s infinite;
  }
  span:nth-of-type(2) {
    animation-delay: 0.15s;
  }
  span:nth-of-type(3) {
    animation-delay: 0.3s;
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 0.35;
      transform: translateY(0);
    }
    50% {
      opacity: 1;
      transform: translateY(-2px);
    }
  }
`;

export const LoaderPage = ({ label = 'Loading' }: { label?: string }) => (
  <Full
    role="status"
    aria-live="polite"
  >
    <Card>
      <SpinnerWrap>
        <Spinner />
      </SpinnerWrap>

      <Title>{label}</Title>

      <Sub>Fetching fresh data…</Sub>

      <Dots>
        <span />

        <span />

        <span />
      </Dots>
    </Card>
  </Full>
);
