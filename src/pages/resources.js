import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import styles from '../styles/resources.module.css';
import { Card, Grid, Text, Button, Row, Container } from '@nextui-org/react';

const Resources = () => {
  return (
    <MainLayout>
      <Head>
        <title>MindMate - Resources</title>
      </Head>
      <Container>
        <Grid.Container gap={4} className={styles.container}>
          <Grid xs={12} sm={6} md={4} lg={4} xl={3}>
            <Card className={styles.card}>
              <Card.Header>
                <Text b>Card Title</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Row justify='flex-end'>
                  <Button size='sm' color='primary'>
                    Read more
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={4} xl={3}>
            <Card className={styles.card}>
              <Card.Header>
                <Text b>Card Title</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Row justify='flex-end'>
                  <Button size='sm' color='primary'>
                    Read more
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={4} xl={3}>
            <Card className={styles.card}>
              <Card.Header>
                <Text b>Card Title</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Row justify='flex-end'>
                  <Button size='sm' color='primary'>
                    Read more
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={4} xl={3}>
            <Card className={styles.card}>
              <Card.Header>
                <Text b>Card Title</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Row justify='flex-end'>
                  <Button size='sm' color='primary'>
                    Read more
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={4} xl={3}>
            <Card className={styles.card}>
              <Card.Header>
                <Text b>Card Title</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Row justify='flex-end'>
                  <Button size='sm' color='primary'>
                    Read more
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={4} xl={3}>
            <Card className={styles.card}>
              <Card.Header>
                <Text b>Card Title</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
              </Card.Body>
              <Card.Divider />
              <Card.Footer>
                <Row justify='flex-end'>
                  <Button size='sm' color='primary'>
                    Read more
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </MainLayout>
  );
};

export default Resources;
