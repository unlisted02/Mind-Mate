import MainLayout from '@/layouts/MainLayout';
import axios from 'axios';
import { useState } from 'react';
import {
  Container,
  Card,
  Button,
  Input,
  Textarea,
  Dropdown,
  Loading,
  Text,
  Badge,
} from '@nextui-org/react';
import React from 'react';
import Head from 'next/head';

const Chat = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [age, setAge] = useState('');
  const [ageStatus, setAgeStatus] = useState('primary');
  const [gender, setGender] = useState(new Set(['Gender']));
  const [genderStatus, setGenderStatus] = useState('primary');
  const [problem, setProblem] = useState('');
  const [problemStatus, setProblemStatus] = useState('primary');
  const [solution, setSolution] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const selectedValue = React.useMemo(
    () => Array.from(gender).join(', ').replaceAll('_', ' '),
    [gender]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (age == '') {
      setAgeStatus('error');
      setTimeout(() => {
        setAgeStatus('primary');
      }, 3000);

      return;
    }
    if (gender.anchorKey == undefined) {
      setGenderStatus('error');
      setTimeout(() => {
        setGenderStatus('primary');
      }, 3000);

      return;
    }
    if (problem == '') {
      setProblemStatus('error');
      setTimeout(() => {
        setProblemStatus('primary');
      }, 3000);

      return;
    } else {
      setAge('');
      setGender(new Set(['Gender']));
      setProblem('');
      setSolution('');
      setIsLoading(true);
      await axios
        .post('https://mind-mate-sv15.onrender.com/api/conversation', {
          age: age,
          gender: gender,
          problem: problem,
        })
        .then(function (response) {
          let formattedResponse = response.data.text;
          formattedResponse = formattedResponse.replace(/^\n/, '');
          formattedResponse = formattedResponse.replace(/^\n/, '');
          setSolution(formattedResponse);
          setIsLoading(false);
        })
        .catch(function (error) {
          setIsLoading(false);
          setErrorMessage(error.message);
        });
    }
  };

  return (
    <MainLayout>
      <Head>
        <title>MindMate - Chat</title>
      </Head>
      <Container>
        <form onSubmit={handleSubmit}>
          <Card
            variant='bordered'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: 'calc(100vh - 120px)',
              margin: '0.5rem 0',
              padding: '0.5rem',
            }}
          >
            <Text
              b
              style={{
                marginBottom: '0.5rem',
                marginLeft: '2rem',
                marginRight: '2rem',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                maxWidth: '450px',
                width: '100%',
              }}
            >
              AI Health Support
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Badge color='success' variant='dot' />
                <Text style={{ fontWeight: 400, marginLeft: '0.2rem' }}>
                  Online
                </Text>
              </div>
            </Text>
            <Card.Divider />
            <Card
              variant='flat'
              style={{
                display: 'flex',
                height: 'calc(100% - 16rem)',
                margin: '0.5rem 0',
                borderRadius: '0rem',
                backgroundColor: 'primary',
                overflowY: 'auto',
                overflowX: 'hidden',
                maxWidth: '100%',
              }}
            >
              {isLoading ? (
                <Loading
                  style={{ paddingTop: '0.4rem', alignSelf: 'flex-start' }}
                  type='points'
                />
              ) : errorMessage ? (
                <Card
                  variant='flat'
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  <Badge
                    color='error'
                    style={{
                      maxHeight: '1.4rem',
                      lineHeight: '1.4rem',
                      marginTop: '0.2rem',
                      marginRight: '0.5rem',
                    }}
                  >
                    Error
                  </Badge>
                  <Text color='error'>{errorMessage}</Text>
                </Card>
              ) : (
                <p style={{ whiteSpace: 'pre-line' }}>{solution}</p>
              )}
            </Card>
            <Card
              variant='bordered'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'column',
              }}
            >
              <Card
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 0.5rem',
                }}
              >
                <Card
                  variant='flat'
                  style={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'row',
                    gap: '0.5rem',
                    margin: '0.5rem',
                    padding: '0.5rem',
                  }}
                >
                  <Input
                    id='age'
                    disabled={isLoading}
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                    aria-label='age'
                    name='age'
                    status={ageStatus}
                    placeholder='Enter your age..'
                    type='number'
                  />
                  <Dropdown
                    name='gender'
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <Dropdown.Button
                      color={genderStatus}
                      disabled={isLoading}
                      id='submit'
                      flat
                      css={{ tt: 'capitalize' }}
                    >
                      {selectedValue}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      aria-label='gender'
                      disallowEmptySelection
                      selectionMode='single'
                      selectedKeys={gender}
                      onSelectionChange={setGender}
                    >
                      <Dropdown.Item
                        onPress={() => setGender('male')}
                        key='male'
                      >
                        Male
                      </Dropdown.Item>
                      <Dropdown.Item
                        onPress={() => setGender('female')}
                        key='female'
                      >
                        Female
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card>
                <Textarea
                  status={problemStatus}
                  disabled={isLoading}
                  name='query'
                  aria-label='query'
                  placeholder='Type something in your mind..'
                  onChange={(e) => setProblem(e.target.value)}
                  value={problem}
                  minRows={3}
                  maxRows={4}
                  fullWidth
                />
                <Button
                  id='submit'
                  type='submit'
                  disabled={isLoading}
                  aria-label='submit'
                  style={{ width: '100vw', marginTop: '0.5rem' }}
                >
                  {isLoading && (
                    <Loading
                      color='currentColor'
                      size='sm'
                      style={{ marginRight: '1rem' }}
                    />
                  )}
                  Ask from MindMate
                </Button>
              </Card>
            </Card>
          </Card>
        </form>
      </Container>
    </MainLayout>
  );
};

export default Chat;
