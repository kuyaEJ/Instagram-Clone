import { Container, Flex, VStack, Box, Image } from '@chakra-ui/react';
import AuthForm from '../components/AuthForm/AuthForm.jsx';

const AuthPage =   () => {
    return (
        <Flex minH={"100vh"} alignItems={"center"} justifyContent={"center"} px={4}>
            <Container maxW={"container.md"} padding={0}>
                <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                {/* Left Hand-side */}
                <Box display={{ base: "none", md: "block" }}>
                    <Image src="/auth.png" alt="Phone img" h={650} />
                </Box>
                {/* Right Hand-side */}
                <VStack spacing={4} align={"stretch"}>
                    <AuthForm />
                    <Box textAlign={"center"}>Get the app.</Box>
                    <Flex gap={5} justifyContent={"center"}>
                    <Image src="/playstore.png" h={"10"} alt="Playstore logo" />
                    <Image src="/microsoft.png" h={"10"} alt="Microsoft logo" />
                    </Flex>
                </VStack>
                </Flex>
            </Container>
        </Flex>
    )
}
export default AuthPage;