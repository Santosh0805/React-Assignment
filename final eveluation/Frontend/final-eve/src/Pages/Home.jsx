import {Box , Headings , Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate();

    function handleClick (){
        navigate('/login');

    }


    return (
        <Box>
            <Headings as="h1" size="xl" >Welcome to Home pages </Headings>
            <Button onClick={handleClick}>Login</Button>
            <Button colorScheme="green " variant= "solid " onClick={handleClick}>
                Go to the login pages
            </Button>
        </Box>
    )
}
