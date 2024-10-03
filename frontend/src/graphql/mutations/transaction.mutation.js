import { gql } from "@apollo/client";

export const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($input: createTransactionInput!) {
    createTransaction(input: $input) {
      _id
      description
      paymentType
      category
      amount
      location
      date
    }
  }
`;

export const UPDATE_TRANSACTION = gql`
  mutation UpdateTransaction($input: updateTransactionInput!) {
    updateTransaction(input: $input) {
      _id
      description
      paymentType
      category
      amount
      location
      date
    }
  }
`;

export const DELETE_TRANSACTION = gql`
  mutation DeleteTrasaction($transactionId: ID!) {
    deleteTransaction(transactionId: $transactionId) {
      _id
      # the below things only keep if you want it
      description
      paymentType
      category
      amount
      location
      date
    }
  }
`;
