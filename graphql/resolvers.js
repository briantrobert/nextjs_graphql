// import { books } from '../data/MockData'
import { Context } from "@/pages/api/graphql";

export const resolvers = {
    Query: {
      books: async (parent, args, Context) => {
        return await Context.prisma.book.findMany();
      },
      book: async (parent, args, Context) => {
        return await Context.prisma.book.findUnique({
          where:{
            id : args.id,
          }
        });
    },
  },
    Book : {
      authors : async (parent, args, Context) => {
        return await Context.prisma.author.findMany({
          where :{
            bookId : parent.id,
          }
        });
    },
  },

  Mutation: {
    addBook: async (parent, args, Context) => {
      return await Context.prisma.book.create({
        data :{
          title : args.title,
          image : args.image,
        }
      });
    },
	updateBook: async (parent, args, Context) => {
      return await Context.prisma.book.update({
		  where:{
			  id: args.id
		  },
        data :{
          title : args.title,
          image : args.image,
        }
      });
    },
	deleteBook: async (parent, args, Context) => {
		return await Context.prisma.book.delete({
        where :{
             id: args.id
        },
      });
  },
  addAuthors: async (parent, args, Context) => {
      return await Context.prisma.author.create({
        data :{
		     bookId: args.bookId,
             name : args.name,
          
        }
      });
    },
  deleteAuthors: async (parent, args, Context) => {
		return await Context.prisma.author.delete({
        where :{
             id: args.id,
        },
      });
  },
}
};