## live link: https://next-auth-tho8less-projects.vercel.app/signup

## Tech Stack

- Nextjs
- typescript
- mongodb
- mailtrap/nodemailer


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
## Assignment
1. Improve the UI of the application
2. Add feature of forgot password
3. Show if email is verified or not on profile page

---
### Hint:
For forgot password feature.
1. User needs a page to enter his email and submit.
2. Validate if user exists, if yes, send him same token email 
3. User clicks on email and get a page to enter new password with a submit button.
4. As soon as he click submit button, he is sending you a token and new password.
5. Verify the token and save the new password after encrypting it.
