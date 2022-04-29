import gql from '@apollo/client';

// to log in a user
export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                id
                username
                email
                bookCount
                savedBooks {
                    bookId
                    title
                    description
                    authors
                    link
                    image
                }
            }
        }
    }
`;

// to add a new user
export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                id
                username
                email
                bookCount
                savedBooks {
                    bookId
                    title
                    description
                    authors
                    image
                    link
                }
            }
        }
    }
`;

// to save a book
export const SAVE_BOOK = gql`
    mutation saveBook($input: bookInput!) {
        saveBook(input: $input) {
            id
            username
            email
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

// to remove a saved book
export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook(bookId: $bookId) {
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