import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // You can add authorization logic here
      // For example, check if user is in an allowed list
      // const allowedUsers = ['username1', 'username2']
      // return allowedUsers.includes(profile.login)
      
      // For now, allow all GitHub users to sign in
      // You can customize this to restrict to specific users
      return true
    },
    async session({ session, token }) {
      session.user.username = token.username
      return session
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.username = profile.login
      }
      return token
    },
  },
  pages: {
    signIn: '/',
    error: '/',
  },
  secret: process.env.NEXTAUTH_SECRET,
})
