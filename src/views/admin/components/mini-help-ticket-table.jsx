import * as React from 'react';
// mui components
import { useTheme } from '@mui/material/styles';
import { MuiTable } from 'muibase';
import { SubBody } from 'styled';

// import subtitle
import { SubTitle2 } from 'styled';

// import label and more menu and tableListToolBar
import { DotLabel } from 'components';

export default function MiniHelpTicketTable({ headData = [], bodyData = [] }) {
  const theme = useTheme();
  const { Container, Cell, Head, Row, Body } = MuiTable;
  return (
    <Container>
      <MuiTable sx={{ maxWidth: '100%' }} aria-label="ticket table" size="small">
        <Head>
          <Row>
            {headData.map((head) => (
              <Cell key={head.id} align={head.alignRight ? 'right' : 'left'}>
                <SubBody wrap>{head.label}</SubBody>
              </Cell>
            ))}
          </Row>
        </Head>
        <Body>
          {bodyData.length > 0 &&
            bodyData.map((body) => (
              <Row>
                <Cell align="left">
                  <SubTitle2 noWrap style={{ color: `${theme.palette.alternate.main}` }}>
                    {new Date(body.date).toLocaleDateString()}
                  </SubTitle2>
                </Cell>
                <Cell align="center">
                  <DotLabel status={body.status} />
                </Cell>
                <Cell align="left">
                  <SubTitle2 wrap fontSize={'15px !important'}>
                    {body.topic &&
                      (body.topic.length > 25 ? `${body.substring(0, 25)}..` : body.topic)}
                  </SubTitle2>
                </Cell>
              </Row>
            ))}
        </Body>
      </MuiTable>
    </Container>
  );
}
