import { Navbar, Text } from '@nextui-org/react';
import Image from 'next/image';
import MindMateLogo from '../../public/mindmate-logo.png';
import Link from 'next/link';
import * as React from 'react';

export default function App() {
  const collapseItems = [
    { name: 'Home', url: '/' },
    { name: 'Get Support', url: '/support' },
    { name: 'Blog', url: '/blog' },
    { name: 'About', url: '/about' },
  ];

  return (
    <Navbar isBordered variant='sticky'>
      <Navbar.Brand>
        <Navbar.Toggle
          aria-label='toggle navigation'
          hideIn='smMax'
          showIn='xs'
        />
        <Image
          src={MindMateLogo}
          alt='logo'
          width='40'
          height='40'
          style={{ margin: '0 0.5rem' }}
        />
        <Text
          b
          color='inherit'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: '1.5rem',
          }}
        >
          MindMate
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight={true}
        hideIn='xs'
        variant='underline'
      >
        <Link href='/'>Home</Link>
        <Link href='/support'>Get Support</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/about'>About</Link>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={index}>
            <Link
              color='inherit'
              css={{
                minWidth: '100%',
              }}
              href={item.url}
            >
              {item.name}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
