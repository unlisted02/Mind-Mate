import Head from 'next/head';
import MainLayout from '@/layouts/MainLayout';
import Lottie from 'lottie-react';
import heroImage from '../../public/mediHeroImage.json';
import { Container, Text, Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import styles from '../styles/index.module.css';

export default function Home() {
  const router = useRouter();

  const handleClickChat = () => {
    router.push('/chat');
  };
  return (
    <>
      <Head>
        <title>MindMate - Home</title>
      </Head>
      <MainLayout>
        <Container>
          <div className={styles.container}>
            <div className={styles.heroText}>
              <Text className={styles.headerTitle} weight='bold'>
                Unlock the Power of Your Mind with Our AI-Driven Mental Health
                Web Application
              </Text>
              <Text className={styles.subHeading}>
                Get personalized mental health solutions based on your unique
                needs and preferences.
              </Text>

              <Button className={styles.tryBtn} onClick={handleClickChat}>
                Try It Now
              </Button>
            </div>
            <Lottie className={styles.heroImage} animationData={heroImage} />
          </div>
        </Container>
      </MainLayout>
    </>
  );
}
