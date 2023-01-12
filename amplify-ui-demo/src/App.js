import { Button, Flex, Heading, Image, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Flex
      direction={{ base: 'column', large: 'row' }}
      maxWidth="32rem"
      padding="1rem"
      width="100%"
    >
      <Image
        alt="Beentos App"
        height="21rem"
        src="https://photos.app.goo.gl/sozExP3QThpcj8cq9"
            width="100%"
      />
      <Flex justifyContent="space-between" direction="column">
        <Heading level={3}>Beentos App test on AWS Amplify</Heading>
        <Text>
              I really wish I can code, at least I would have made $10k just for doing this.
              But on a serious note, I wish you best of luck in this project.
        </Text>
        <Button
          variation="primary"
          onClick={() => alert('Designed by Vincent Ogbechie!')}
        >
          Developed by Vincent Ogbechie!
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;