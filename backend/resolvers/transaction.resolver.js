import Transaction from "../models/transaction.model.js";

const transactionResolver = {
  Query: {
    transacions: async (_, __, context) => {
      try {
        if (!context.getUser()) throw new Error("Unauthorized");
        const userId = await context.getUser()._id;

        const transactions = await Transaction.find({ userId });
        return transactions;
      } catch (error) {
        console.error("Error getting transactions:", err)
        throw new Error("Error getting transactions")
      }
    },
    transaction: async(_,{transactionId})=>{
      try {
        const transaction = await Transaction.findById(transactionId)
        return transaction
      } catch (error) {
        console.error("Error getting transaction:",error)
        throw new Error("Error getting transaction")
      }
    },
    //TODO => ADD CategoryStatistics query
  },
  Mutation: {},
};

export default transactionResolver;
