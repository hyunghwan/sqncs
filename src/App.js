import React from 'react';
import {
  ChakraProvider,
  Flex,
  Text,
  Divider,
  Button,
  Image,
  Link,
  Box,
  VStack,
  HStack,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FaBrain, FaGraduationCap, FaCogs } from 'react-icons/fa';

const mailtosqncs = 'mailto:hello@sqncs.com';

const App = () => (
  <ChakraProvider resetCSS>
    <Flex alignItems="center" flexDirection="column" mt={16} mb={16}>
      <Flex maxWidth={1000} width="90%" flexDirection="column">
        {/* Header Section */}
        <VStack spacing={8} mb={16}>
          <Image boxSize="120px" src="sqncs.png" alt="sqncs logo" />
          <Text fontSize="5xl" fontWeight="bold" color="gray.900" textAlign="center">
            sqncs studio
          </Text>
          <Text fontSize="xl" color="gray.600" textAlign="center" maxWidth="600px">
            AI agency studio transforming businesses through intelligent automation and strategic AI implementation.
          </Text>
        </VStack>

        {/* Services Section */}
        <VStack spacing={12} mb={16}>
          <Text fontSize="3xl" fontWeight="semibold" color="gray.800" textAlign="center">
            How We Transform Your Business
          </Text>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="100%">
            <VStack spacing={4} p={6} borderRadius="lg" border="1px" borderColor="gray.200" _hover={{ borderColor: "blue.300", transform: "translateY(-2px)" }} transition="all 0.2s">
              <Icon as={FaBrain} boxSize={8} color="blue.500" />
              <Text fontSize="xl" fontWeight="semibold" color="gray.800">Identify</Text>
              <Text fontSize="md" color="gray.600" textAlign="center">
                Discover high-impact AI opportunities and develop transformation strategies tailored to your business needs.
              </Text>
            </VStack>

            <VStack spacing={4} p={6} borderRadius="lg" border="1px" borderColor="gray.200" _hover={{ borderColor: "green.300", transform: "translateY(-2px)" }} transition="all 0.2s">
              <Icon as={FaGraduationCap} boxSize={8} color="green.500" />
              <Text fontSize="xl" fontWeight="semibold" color="gray.800">Educate</Text>
              <Text fontSize="md" color="gray.600" textAlign="center">
                Train your teams to integrate AI effectively across your organization with hands-on workshops and guidance.
              </Text>
            </VStack>

            <VStack spacing={4} p={6} borderRadius="lg" border="1px" borderColor="gray.200" _hover={{ borderColor: "purple.300", transform: "translateY(-2px)" }} transition="all 0.2s">
              <Icon as={FaCogs} boxSize={8} color="purple.500" />
              <Text fontSize="xl" fontWeight="semibold" color="gray.800">Develop</Text>
              <Text fontSize="md" color="gray.600" textAlign="center">
                Build custom AI solutions and intelligent systems designed specifically for your unique challenges.
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>

        {/* Why Choose Us Section */}
        <VStack spacing={8} mb={16}>
          <Text fontSize="2xl" fontWeight="semibold" color="gray.800" textAlign="center">
            Why Choose sqncs studio
          </Text>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} width="100%">
            <VStack spacing={4} p={6} borderRadius="lg" border="1px" borderColor="gray.200" _hover={{ borderColor: "blue.300", transform: "translateY(-2px)" }} transition="all 0.2s">
              <Text fontSize="xl" fontWeight="semibold" color="gray.800">Strategic Approach</Text>
              <Text fontSize="md" color="gray.600" textAlign="center">
                We don't just implement AI for the sake of it. We identify the right opportunities that will drive real business value and growth.
              </Text>
            </VStack>
            
            <VStack spacing={4} p={6} borderRadius="lg" border="1px" borderColor="gray.200" _hover={{ borderColor: "green.300", transform: "translateY(-2px)" }} transition="all 0.2s">
              <Text fontSize="xl" fontWeight="semibold" color="gray.800">Hands-on Partnership</Text>
              <Text fontSize="md" color="gray.600" textAlign="center">
                From strategy to implementation, we work closely with your team to ensure successful AI adoption and long-term success.
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>

        <Divider borderColor="gray.200" mb={8} />
        
        {/* CTA Section */}
        <VStack spacing={6}>
          <Text fontSize="lg" color="gray.600" textAlign="center" maxWidth="500px">
            Ready to transform your business with AI? Let's partner up and build the future together.
          </Text>
          <Link href={mailtosqncs} isExternal>
            <Button
              variant="solid"
              rightIcon={<ArrowForwardIcon />}
              size="lg"
              colorScheme="blue"
              px={8}
              py={6}
              fontSize="lg"
              _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
              transition="all 0.2s"
            >
              Let's Partner Up
            </Button>
          </Link>
        </VStack>
      </Flex>
    </Flex>
  </ChakraProvider>
);

export default App;
