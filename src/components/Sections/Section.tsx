/** @jsx jsx */
import { css, jsx } from '@emotion/react';

export default function Section() {
  return <div css={styles} className="container"></div>;
}

const styles = css`
  width: 96%;
  margin: auto;
`;
