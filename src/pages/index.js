import Head from 'next/head';
import Image from 'next/image';
import MainLayout from '@/layouts/MainLayout';
import Lottie from 'lottie-react';
import heroImage from '../assets/animation-svg/mediHeroImage.json';
import blob1 from '../assets/images/blob1.svg';
import blob2 from '../assets/images/blob2.svg';
import blob3 from '../assets/images/blob3.svg';
import { Container, Text, Button } from '@nextui-org/react';
import { useRouter } from 'next/router';
import styles from '../styles/index.module.css';

export default function Home() {
  const router = useRouter();

  const handleClickSupport = () => {
    router.push('/support');
  };
  return (
    <>
      <Head>
        <title>MindMate - Home</title>
      </Head>
      <MainLayout>
        <Container>
          <div className={styles.container}>
            <Image
              className={styles.blob1}
              src={blob1}
              width={420}
              height={380}
            />
            <Image
              className={styles.blob2}
              src={blob2}
              width={520}
              height={480}
            />
            <Image
              className={styles.blob3}
              src={blob3}
              width={380}
              height={380}
            />
            <div className={styles.heroText}>
              <Text className={styles.headerTitle} weight='bold'>
                Unlock the Power of Your Mind with Our AI-Driven Mental Health
                Web Application
              </Text>
              <Text className={styles.subHeading}>
                Get personalized mental health solutions based on your unique
                needs and preferences.
              </Text>

              <Button className={styles.tryBtn} onPress={handleClickSupport}>
                Get Support
              </Button>
            </div>
            <Lottie className={styles.heroImage} animationData={heroImage} />
          </div>
        </Container>
      </MainLayout>
    </>
  );
}
