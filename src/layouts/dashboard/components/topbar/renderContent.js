import React from 'react';
import Image from 'next/image';
import { noCase } from 'change-case';
import { SubTitle1, SubBody, SubTitle2 } from 'styled';

// takes in a notification object and returns an object of avatar and title jsx
export default function RenderContent(notification) {
  const { title: _title, description, avatar: _avatar } = notification;
  const title = (
    <>
      <SubTitle2 sx={{ fontSize: '15px !important' }}>{_title}</SubTitle2>
      <SubBody component="span" sx={{ color: 'text.dashed', fontSize: '14px !important' }}>
        &nbsp; {noCase(description)}
      </SubBody>
    </>
  );

  return {
    avatar: <Image alt={title} src={_avatar} />,
    title,
  };
}
