import { Container, Avatar, Name, Specialist, } from "./styles";

export function Doctor(){
    return (
        <Container>
            
            <Avatar source={{ uri: 'https://github.com/lucasaljalali.png' }} />
            
            <Name>Lucas al Jalali</Name>
            
            <Specialist>Neurologist</Specialist>

        </Container>
    )
}