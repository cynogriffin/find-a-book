import gql from '@apollo/client';

// query for logged in users
export const GET_ME = gql`
    {
        me {
            id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                image
                description
                title
                link
            }
        }
    }
`;