import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import MindMateLogo from '../../public/mindmate-logo.png';
import { Container, Card, Text } from '@nextui-org/react';
import styles from '../styles/about.module.css';
import PublicIcon from '@mui/icons-material/Public';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Head from 'next/head';
import Link from 'next/link';

const About = () => {
  return (
    <MainLayout>
      <Head>
        <title>MindMate - About</title>
      </Head>
      <Container>
        <Card className={styles.mainWrapper}>
          <div className={styles.brandSection}>
            <Image className={styles.image} src={MindMateLogo} />
            <Text size='$lg' style={{ lineHeight: 1, fontWeight: '500' }}>
              MindMate
            </Text>
            <Text size='$xs'>Version: 0.1.0</Text>
            <Text size='$md' className={styles.description}>
              MindMate is a Next.js powered mental health support web
              application. It uses the OpenAI API to provide personalized advice
              based on user inputs. The user can share their mental health
              concerns and receive guidance for a happier life. Helping people
              to deal with negative vibes and lead a positive life.
            </Text>
          </div>
          <div className={styles.devInfoSection}>
            <Text size='$md'>
              Developer:
              <Link
                href='https://lakshanrukantha.github.io'
                target='_blank'
                style={{
                  marginLeft: '0.5rem',
                  color: '#0072F5',
                }}
              >
                Lakshan Rukantha
              </Link>
            </Text>
            <Text color='default' size='$xs' style={{ fontweight: '500' }}>
              Software Engineering Undergraduate - NSBM Green University
            </Text>
            <div className={styles.socialSection}>
              <a href='https://lakshanrukantha.github.io' target='_blank'>
                <PublicIcon />
              </a>
              <a href='https://github.com/LakshanRukantha' target='_blank'>
                <GitHubIcon />
              </a>
              <a
                href='https://lk.linkedin.com/in/lakshanrukantha'
                target='_blank'
              >
                <LinkedInIcon />
              </a>
              <a
                href='https://facebook.com/LakshanRukantha.LaKi'
                target='_blank'
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </Card>
      </Container>
    </MainLayout>
  );
};

export default About;
