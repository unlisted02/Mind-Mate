import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import styles from '../styles/resources.module.css';
import { Card, Grid, Text, Button, Row, Container } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import brainHeart from '../assets/images/blog-images/brain-heart.jpg';
import yellowSmiles from '../assets/images/blog-images/yellow-smile-faces.jpg';
import mentalHealthMatters from '../assets/images/blog-images/mental-health-matters.jpg';
import meditation from '../assets/images/blog-images/meditation.jpg';
import billBoards from '../assets/images/blog-images/bill-boards.jpg';
import thinkingGirl from '../assets/images/blog-images/thinking-girl.jpg';

const Resources = () => {
  return (
    <MainLayout>
      <Head>
        <title>MindMate - Resources</title>
      </Head>
      <Container>
        <Grid.Container gap={4} className={styles.container}>
          <Grid xs={12} sm={6} md={4} lg={4} xl={3}>
            <Link
              href='https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response'
              target='_blank'
            >
              <Card className={styles.card} isPressable>
                <Card.Header>
                  <Text b>Understanding Mental Health</Text>
                </Card.Header>
                <Card.Divider />
                <Image
                  className={styles.cardImage}
                  showskeleton='true'
                  src={brainHeart}
                  alt='brain'
                ></Image>
                <Card.Body>
                  <Text p='true'>
                    Mental health is the state of a person's emotional and
                    psychological well-being.
                  </Text>
                </Card.Body>
              </Card>
            </Link>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={4} xl={3}>
            <Link
              href='https://www.verywellmind.com/the-importance-of-mental-health-for-wellbeing-5207938'
              target='_blank'
            >
              <Card className={styles.card} isPressable>
                <Card.Header>
                  <Text b>Importance Of Mental Health</Text>
                </Card.Header>
                <Card.Divider />
                <Image
                  className={styles.cardImage}
                  showskeleton='true'
                  src={yellowSmiles}
                  alt='smile'
                ></Image>
                <Card.Body>
                  <Text p='true'>
                    Mental health is essential for overall well-being and
                    affects a person's emotions, and behaviors.
                  </Text>
                </Card.Body>
              </Card>
            </Link>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={4} xl={3}>
            <Link
              href='https://www.betterhealth.vic.gov.au/health/servicesandsupport/types-of-mental-health-issues-and-illnesses'
              target='_blank'
            >
              <Card className={styles.card} isPressable>
                <Card.Header>
                  <Text b>Common Mental Health Disoders</Text>
                </Card.Header>
                <Card.Divider />
                <Image
                  className={styles.cardImage}
                  showskeleton='true'
                  src={mentalHealthMatters}
                  alt='matters'
                ></Image>
                <Card.Body>
                  <Text p='true'>
                    Common mental health disorders are conditions that affect a
                    person's emotional, psychological, and etc.
                  </Text>
                </Card.Body>
              </Card>
            </Link>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={4} xl={3}>
            <Link
              href='https://www.verywellmind.com/mindfulness-meditation-88369'
              target='_blank'
            >
              <Card className={styles.card} isPressable>
                <Card.Header>
                  <Text b>Mindfulness And Meditation</Text>
                </Card.Header>
                <Card.Divider />
                <Image
                  className={styles.cardImage}
                  showskeleton='true'
                  src={meditation}
                  alt='meditation'
                ></Image>
                <Card.Body>
                  <Text p='true'>
                    Mindfulness is the act of paying attention to the present
                    moment, while meditation is a practice to increase inner
                    peace.
                  </Text>
                </Card.Body>
              </Card>
            </Link>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={4} xl={3}>
            <Link
              href='https://www.nimh.nih.gov/health/topics/suicide-prevention'
              target='_blank'
            >
              <Card className={styles.card} isPressable>
                <Card.Header>
                  <Text b>Suicide Prevention</Text>
                </Card.Header>
                <Card.Divider />
                <Image
                  className={styles.cardImage}
                  showskeleton='true'
                  src={billBoards}
                  alt='boards'
                ></Image>
                <Card.Body>
                  <Text p='true'>
                    Suicide prevention is the collective effort to reduce the
                    risk of suicide through awareness, education, and support.
                  </Text>
                </Card.Body>
              </Card>
            </Link>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={4} xl={3}>
            <Link
              href='https://www.psychiatry.org/patients-families/depression/what-is-depression'
              target='_blank'
            >
              <Card className={styles.card} isPressable>
                <Card.Header>
                  <Text b>What Is Depression?</Text>
                </Card.Header>
                <Card.Divider />
                <Image
                  className={styles.cardImage}
                  showskeleton='true'
                  src={thinkingGirl}
                  alt='girl'
                ></Image>
                <Card.Body>
                  <Text p='true'>
                    Depression is a mental health disorder characterized by
                    persistent feelings of sadness, hopelessness, and etc.
                  </Text>
                </Card.Body>
              </Card>
            </Link>
          </Grid>
        </Grid.Container>
      </Container>
    </MainLayout>
  );
};

export default Resources;
