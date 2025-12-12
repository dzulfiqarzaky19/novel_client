import styled from '@emotion/styled';

export const Cards = styled.div`
  background: #0b0f14;
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #1f2937;
  margin-bottom: 24px;
`;

export const Title = styled.h3`
  margin: 0 0 16px 0;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #6b7280;
  font-weight: 700;
  border-bottom: 1px solid #1f2937;
  padding-bottom: 12px;
`;

export const Text = styled.div`
  color: #d1d5db;
  font-size: 15px;
  line-height: 1.8;

  p {
    margin-bottom: 16px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
