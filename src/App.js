import React from 'react';
import {
  ChakraProvider,
  Flex,
  Text,
  Divider,
  Button,
  Image,
  Link,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const mailtosqncs = 'mailto:hello@sqncs.com';

const App = () => (
  <ChakraProvider resetCSS>
    <Flex alignItems="center" flexDirection="column" mt={24}>
      <Flex maxWidth={800} width="80%" flexDirection="column">
        <Image boxSize="150px" src="sqncs.png" alt="sqncs logo" mb={4} />
        <Text fontSize="4xl" fontWeight="bold" color="gray.900" mb={8}>
          sqncs studio
        </Text>
        <Text fontSize="md" color="gray.600" mb={12}>
          A software studio situated around the Pacific Ocean.
        </Text>
        <Divider borderColor="gray.200" mb={4} />
        <Link href={mailtosqncs} isExternal>
          <Button
            variant="solid"
            rightIcon={<ArrowForwardIcon />}
            size="md"
            colorScheme="gray"
          >
            Get in touch
          </Button>
        </Link>
      </Flex>
    </Flex>
  </ChakraProvider>
);

export default App;
