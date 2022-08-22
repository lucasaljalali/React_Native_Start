import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.5
})`
    width: 200px;
    padding: 22px;
    border-radius: 7px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.INFO};
`;

export const Avatar = styled.Image`
    height: 80px;
    width: 80px;
    border-radius: 40px;
`;

export const Name = styled.Text`
    margin-top: 7px;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
`;

export const Specialist = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`;